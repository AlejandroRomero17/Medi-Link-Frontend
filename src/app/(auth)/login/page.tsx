"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { LoginForm, AuthHeader, AuthFooter } from "@/features/auth/components";
import { toast } from "@/hooks/use-toast";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast({
          title: "Error",
          description: "Credenciales inválidas",
          variant: "destructive",
        });
        return;
      }

      // TODO: Obtener el rol del usuario desde la sesión
      // Por ahora redirigimos a /user por defecto
      // En producción deberías hacer:
      // const session = await getSession();
      // const role = session?.user?.role;
      // router.push(role === 'doctor' ? '/doctor' : '/user');

      router.push("/user"); // Cambiar según el rol real
      router.refresh();
    } catch {
      toast({
        title: "Error",
        description: "Ocurrió un error al iniciar sesión",
        variant: "destructive",
      });
    }
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  return (
    <div className="space-y-6 w-full">
      <AuthHeader />
      <div className="flex justify-center w-full">
        <LoginForm
          onSubmit={handleSubmit}
          onForgotPassword={handleForgotPassword}
        />
      </div>
      <AuthFooter />
    </div>
  );
}
