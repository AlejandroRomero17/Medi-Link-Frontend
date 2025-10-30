// src/hooks/use-auth.ts
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth-service";
import { doctorService } from "@/services/doctor-service";
import {
  UsuarioCreate,
  UsuarioLogin,
  DoctorCreate,
  UsuarioResponse,
} from "@/types/api.types";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [currentUser, setCurrentUser] = useState<UsuarioResponse | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const user = authService.getCurrentUser();
    setCurrentUser(user);
  }, []);

  // Register patient mutation
  const registerPatientMutation = useMutation({
    mutationFn: async (data: Omit<UsuarioCreate, "tipo_usuario">) => {
      // Register user (now returns Token with usuario included)
      const tokenResponse = await authService.register({
        ...data,
        tipo_usuario: "paciente", // minúscula
      });

      return tokenResponse;
    },
    onSuccess: (response) => {
      setCurrentUser(response.usuario);

      toast({
        title: "¡Registro exitoso!",
        description: "Tu cuenta ha sido creada correctamente.",
      });
      router.push("/user");
    },
    onError: (error: Error) => {
      toast({
        title: "Error en el registro",
        description: error.message || "No se pudo completar el registro.",
        variant: "destructive",
      });
    },
  });

  // Register doctor mutation (two-step process)
  const registerDoctorMutation = useMutation({
    mutationFn: async (data: {
      usuario: Omit<UsuarioCreate, "tipo_usuario">;
      doctor: Omit<DoctorCreate, "usuario_id">;
    }) => {
      // Step 1: Register user as doctor (returns Token with usuario)
      const tokenResponse = await authService.register({
        ...data.usuario,
        tipo_usuario: "doctor",
      });

      // Step 2: Create doctor profile
      const doctorProfile = await doctorService.create({
        ...data.doctor,
        usuario_id: tokenResponse.usuario.id,
      });

      return { tokenResponse, doctorProfile };
    },
    onSuccess: ({ tokenResponse }) => {
      setCurrentUser(tokenResponse.usuario);

      toast({
        title: "¡Registro exitoso!",
        description: "Tu cuenta profesional ha sido creada.",
      });
      router.push("/doctor");
    },
    onError: (error: Error) => {
      toast({
        title: "Error en el registro",
        description: error.message || "No se pudo completar el registro.",
        variant: "destructive",
      });
    },
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (credentials: UsuarioLogin) => {
      // Login now returns Token with usuario included
      const response = await authService.login(credentials);
      return response;
    },
    onSuccess: (response) => {
      setCurrentUser(response.usuario);

      toast({
        title: "Inicio de sesión exitoso",
        description: `Bienvenido ${response.usuario.nombre}`,
      });

      // Redirect based on user role
      const redirectPath =
        response.usuario.tipo_usuario === "doctor" ? "/doctor" : "/user";
      router.push(redirectPath);
    },
    onError: (error: Error) => {
      toast({
        title: "Error al iniciar sesión",
        description: error.message || "Credenciales inválidas.",
        variant: "destructive",
      });
    },
  });

  // Logout function
  const logout = () => {
    authService.logout();
    setCurrentUser(null);
    queryClient.clear();

    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente.",
    });
    router.push("/login");
  };

  return {
    // User data
    user: currentUser,
    isAuthenticated: authService.isAuthenticated() && !!currentUser,

    // Mutations
    registerPatient: registerPatientMutation.mutate,
    registerDoctor: registerDoctorMutation.mutate,
    login: loginMutation.mutate,
    logout,

    // Mutation states
    isRegisteringPatient: registerPatientMutation.isPending,
    isRegisteringDoctor: registerDoctorMutation.isPending,
    isLoggingIn: loginMutation.isPending,

    // Errors
    registerPatientError: registerPatientMutation.error,
    registerDoctorError: registerDoctorMutation.error,
    loginError: loginMutation.error,
  };
}
