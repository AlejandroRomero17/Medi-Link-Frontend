export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000",
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
} as const;

export const API_ENDPOINTS = {
  // Registro combinado (NUEVO - RECOMENDADO)
  REGISTRO: {
    PACIENTE: "/api/registro/paciente",
    DOCTOR: "/api/registro/doctor",
    ADMIN: "/api/registro/admin",
  },

  // Auth endpoints (usuarios) - LEGACY
  AUTH: {
    REGISTER: "/api/usuarios/registro",
    LOGIN: "/api/usuarios/login",
    ME: "/api/usuarios/me",
    GET_USERS: "/api/usuarios",
    GET_USER: (id: string) => `/api/usuarios/${id}`,
    UPDATE_USER: (id: string) => `/api/usuarios/${id}`,
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

  // Patient endpoints
  PATIENTS: {
    CREATE: "/api/pacientes",
    LIST: "/api/pacientes",
    GET: (id: string) => `/api/pacientes/${id}`,
    UPDATE: (id: string) => `/api/pacientes/${id}`,
    BY_USER: (userId: string) => `/api/pacientes/usuario/${userId}`,
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

  // Búsqueda y disponibilidad
  SEARCH: {
    DOCTORS: "/api/busqueda/doctores",
    NEARBY_DOCTORS: "/api/busqueda/doctores/cercanos",
    POPULAR_SPECIALTIES: "/api/busqueda/especialidades/populares",
    TOP_RATED_DOCTORS: "/api/busqueda/doctores/mejor-valorados",
  },

  AVAILABILITY: {
    DOCTOR_AVAILABILITY: (doctorId: string) =>
      `/api/disponibilidad/doctor/${doctorId}`,
    UPCOMING_AVAILABILITY: (doctorId: string) =>
      `/api/disponibilidad/doctor/${doctorId}/proximos-disponibles`,
    MY_SCHEDULE: "/api/disponibilidad/mis-horarios",
    STATISTICS: (doctorId: string) =>
      `/api/disponibilidad/estadisticas/doctor/${doctorId}`,
  },

  HEALTH: "/health",
} as const;
