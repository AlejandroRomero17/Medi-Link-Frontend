import { UsuarioResponse, PacienteBase, DoctorBase } from "./api.types";

/**
 * Datos para login
 */
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Datos para registro COMBINADO de paciente (NUEVO)
 */
export interface PatientRegisterData {
  usuario: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    telefono: string;
    tipo_usuario: "paciente";
  };
  paciente: PacienteBase;
}

/**
 * Datos para registro COMBINADO de doctor (NUEVO)
 */
export interface DoctorRegisterData {
  usuario: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    telefono: string;
    tipo_usuario: "doctor";
  };
  doctor: DoctorBase;
}

/**
 * Datos para registro LEGACY (solo usuario)
 */
export interface LegacyRegisterData {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: string;
  tipo_usuario: "paciente" | "doctor" | "admin";
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
  registerLegacy: (data: LegacyRegisterData) => Promise<void>; // Para compatibilidad
}

/**
 * Props para componentes protegidos
 */
export interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "paciente" | "doctor" | "admin";
  redirectTo?: string;
}
