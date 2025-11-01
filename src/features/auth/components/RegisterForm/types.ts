// src/features/auth/components/RegisterForm/types.ts

export interface RegisterFormData {
  // Datos básicos
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  password: string;
  confirmPassword: string;

  // Datos médicos
  fecha_nacimiento: string;
  genero: string;
  direccion: string;
  ciudad: string;
  estado: string;
  codigo_postal: string;
  numero_seguro: string;
  alergias: string;
  tipo_sangre: string;
}

export interface RegisterSubmitData {
  usuario: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    telefono: string;
    tipo_usuario: "paciente";
  };
  paciente: {
    fecha_nacimiento: string;
    genero: "masculino" | "femenino" | "otro";
    direccion?: string;
    ciudad?: string;
    estado?: string;
    codigo_postal?: string;
    numero_seguro?: string;
    alergias?: string;
    tipo_sangre?: string;
  };
}

export interface StepProps {
  formData: RegisterFormData;
  onInputChange: (field: keyof RegisterFormData, value: string) => void;
  isLoading?: boolean;
}
