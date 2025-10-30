// src/types/auth.types.ts

import { UsuarioResponse } from "./api.types";

/**
 * Datos para login
 */
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Datos para registro de paciente
 */
export interface PatientRegisterData {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: string;
}

/**
 * Datos para registro de doctor
 */
export interface DoctorRegisterData {
  usuario: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    telefono: string;
  };
  doctor: {
    especialidad: string;
    cedula_profesional: string;
    consultorio?: string;
    horario_atencion?: string;
    costo_consulta?: number;
  };
}

/**
 * Estado de autenticación
 */
export interface AuthState {
  user: UsuarioResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

/**
 * Contexto de autenticación
 */
export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  registerPatient: (data: PatientRegisterData) => Promise<void>;
  registerDoctor: (data: DoctorRegisterData) => Promise<void>;
}

/**
 * Props para componentes protegidos
 */
export interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "paciente" | "doctor" | "admin";
  redirectTo?: string;
}
