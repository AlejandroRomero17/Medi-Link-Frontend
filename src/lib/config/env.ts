// src/lib/config/env.ts

export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000",
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
} as const;

export const API_ENDPOINTS = {
  // Auth endpoints (usuarios)
  AUTH: {
    REGISTER: "/api/usuarios/registro",
    LOGIN: "/api/usuarios/login",
    GET_USERS: "/api/usuarios",
    GET_USER: (id: string) => `/api/usuarios/${id}`,
    DEACTIVATE_USER: (id: string) => `/api/usuarios/${id}`,
  },

  // Doctor endpoints
  DOCTORS: {
    CREATE: "/api/doctores",
    LIST: "/api/doctores",
    GET: (id: string) => `/api/doctores/${id}`,
    UPDATE: (id: string) => `/api/doctores/${id}`,
    BY_USER: (userId: string) => `/api/doctores/usuario/${userId}`,
    BY_SPECIALTY: (specialty: string) =>
      `/api/doctores/especialidad/${specialty}`,
  },

  // Appointments endpoints (citas)
  APPOINTMENTS: {
    CREATE: "/api/citas",
    LIST: "/api/citas",
    GET: (id: string) => `/api/citas/${id}`,
    UPDATE: (id: string) => `/api/citas/${id}`,
    CANCEL: (id: string) => `/api/citas/${id}`,
    BY_PATIENT: (patientId: string) => `/api/citas/paciente/${patientId}`,
    BY_DOCTOR: (doctorId: string) => `/api/citas/doctor/${doctorId}`,
    CONFIRM: (id: string) => `/api/citas/${id}/confirmar`,
    COMPLETE: (id: string) => `/api/citas/${id}/completar`,
  },

  // Health
  HEALTH: "/health",
} as const;
