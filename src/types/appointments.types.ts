// src/types/appointments.types.ts

import { EstadoCita, DoctorCompleto } from "./api.types";

/**
 * Estado de una cita (versión frontend)
 */
export type AppointmentStatus =
  | "confirmed"
  | "pending"
  | "cancelled"
  | "completed";

/**
 * Tipo de cita
 */
export type AppointmentType = "presencial" | "virtual";

/**
 * Interfaz para cita en el dashboard de usuario
 */
export interface UserAppointment {
  id: number;
  doctor: string;
  specialty: string;
  avatar?: string;
  date: string; // Formato relativo: "Hoy", "Mañana", etc.
  fullDate: string; // Formato completo: "27 Oct 2024"
  time: string; // HH:mm
  type: AppointmentType;
  location: string;
  status: AppointmentStatus;
  reminderSent: boolean;
}

/**
 * Mapeo de estados de API a estados de frontend
 */
export const mapApiStatusToAppointmentStatus = (
  apiStatus: EstadoCita
): AppointmentStatus => {
  const statusMap: Record<EstadoCita, AppointmentStatus> = {
    pendiente: "pending",
    confirmada: "confirmed",
    cancelada: "cancelled",
    completada: "completed",
  };
  return statusMap[apiStatus];
};

/**
 * Mapeo de estados de frontend a estados de API
 */
export const mapAppointmentStatusToApiStatus = (
  status: AppointmentStatus
): EstadoCita => {
  const statusMap: Record<AppointmentStatus, EstadoCita> = {
    pending: "pendiente",
    confirmed: "confirmada",
    cancelled: "cancelada",
    completed: "completada",
  };
  return statusMap[status];
};

/**
 * Configuración de estilos para cada estado
 */
export const statusConfig: Record<
  AppointmentStatus,
  { label: string; color: string }
> = {
  confirmed: {
    label: "Confirmada",
    color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  },
  pending: {
    label: "Pendiente",
    color:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  },
  cancelled: {
    label: "Cancelada",
    color: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  },
  completed: {
    label: "Completada",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
};

/**
 * Transforma una cita de la API a formato del dashboard de usuario
 */
export const transformApiAppointmentToUser = (apiAppointment: {
  id: number;
  fecha_hora: string;
  motivo: string;
  estado: EstadoCita;
  doctor: DoctorCompleto;
  notas?: string;
}): UserAppointment => {
  const appointmentDate = new Date(apiAppointment.fecha_hora);
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Calcular fecha relativa
  let relativeDate = "";
  if (appointmentDate.toDateString() === now.toDateString()) {
    relativeDate = "Hoy";
  } else if (appointmentDate.toDateString() === tomorrow.toDateString()) {
    relativeDate = "Mañana";
  } else {
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    relativeDate = days[appointmentDate.getDay()];
  }

  // Formatear fecha completa
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const fullDate = `${appointmentDate.getDate()} ${
    months[appointmentDate.getMonth()]
  } ${appointmentDate.getFullYear()}`;

  // Formatear hora
  const time = appointmentDate.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return {
    id: apiAppointment.id,
    doctor: `${apiAppointment.doctor.usuario.nombre} ${apiAppointment.doctor.usuario.apellido}`,
    specialty: apiAppointment.doctor.especialidad
      .replace("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (l) => l.toUpperCase()),
    avatar: undefined, // TODO: agregar avatar del doctor cuando esté disponible
    date: relativeDate,
    fullDate,
    time,
    type: "presencial", // TODO: determinar tipo de cita desde API
    location:
      apiAppointment.doctor.consultorio || "Consultorio no especificado",
    status: mapApiStatusToAppointmentStatus(apiAppointment.estado),
    reminderSent: false, // TODO: implementar sistema de recordatorios
  };
};
