// src/features/dashboard-user/components/upcoming-appointments.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  Phone,
  MoreVertical,
  X,
  Edit,
  Navigation,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";
import { UserAppointment, statusConfig } from "@/types/appointments.types";

// Datos de ejemplo (después los reemplazarás con datos de la API)
const upcomingAppointments: UserAppointment[] = [
  {
    id: 1,
    doctor: "Dra. María González",
    specialty: "Cardiología",
    avatar: "/avatars/doctor1.jpg",
    date: "Hoy",
    fullDate: "27 Oct 2024",
    time: "15:00",
    type: "presencial",
    location: "Consultorio 101 - Av. Principal 123",
    status: "confirmed",
    reminderSent: true,
  },
  {
    id: 2,
    doctor: "Dr. Carlos Rodríguez",
    specialty: "Pediatría",
    avatar: "/avatars/doctor2.jpg",
    date: "Mañana",
    fullDate: "28 Oct 2024",
    time: "10:00",
    type: "virtual",
    location: "Video consulta por Zoom",
    status: "pending",
    reminderSent: false,
  },
  {
    id: 3,
    doctor: "Dra. Ana Martínez",
    specialty: "Dermatología",
    avatar: "/avatars/doctor3.jpg",
    date: "Lunes",
    fullDate: "30 Oct 2024",
    time: "09:00",
    type: "presencial",
    location: "Consultorio 103 - Col. Centro 789",
    status: "confirmed",
    reminderSent: true,
  },
];

export function UpcomingAppointmentsSection() {
  const handleCancelAppointment = (id: number) => {
    console.log("Cancelar cita:", id);
    // TODO: Implementar lógica para cancelar cita
    // Llamar a: PATCH /api/citas/{id} con estado: "cancelada"
  };

  const handleReschedule = (id: number) => {
    console.log("Reagendar cita:", id);
    // TODO: Implementar lógica para reagendar
    // Llamar a: PATCH /api/citas/{id} con nueva fecha_hora
  };

  const handleGetDirections = (location: string) => {
    console.log("Obtener direcciones:", location);
    // Abrir Google Maps con la dirección
    const encodedLocation = encodeURIComponent(location);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`,
      "_blank"
    );
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Próximas Citas
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {upcomingAppointments.length} citas programadas
            </p>
          </div>
          <Button variant="link" className="text-blue-600 text-sm">
            Ver todas
          </Button>
        </div>

        <div className="space-y-3">
          {upcomingAppointments.map((appointment, index) => (
            <motion.div
              key={appointment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                <div className="space-y-3">
                  {/* Header con estado y opciones */}
                  <div className="flex items-center justify-between">
                    <Badge className={statusConfig[appointment.status].color}>
                      {statusConfig[appointment.status].label}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleReschedule(appointment.id)}
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Reagendar
                        </DropdownMenuItem>
                        {appointment.type === "presencial" && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleGetDirections(appointment.location)
                            }
                          >
                            <Navigation className="h-4 w-4 mr-2" />
                            Cómo llegar
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem
                          onClick={() =>
                            handleCancelAppointment(appointment.id)
                          }
                          className="text-red-600 dark:text-red-400"
                        >
                          <X className="h-4 w-4 mr-2" />
                          Cancelar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Información del doctor */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-blue-500">
                      <AvatarImage
                        src={appointment.avatar}
                        alt={appointment.doctor}
                      />
                      <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                        {appointment.doctor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {appointment.doctor}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {appointment.specialty}
                      </p>
                    </div>
                  </div>

                  {/* Detalles de la cita */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="font-medium">{appointment.date}</span>
                      <span className="text-gray-400">•</span>
                      <span>{appointment.fullDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 flex-shrink-0" />
                      <span>{appointment.time}</span>
                      {appointment.reminderSent && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span className="text-xs text-green-600 dark:text-green-400">
                            Recordatorio enviado
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      {appointment.type === "virtual" ? (
                        <Video className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      ) : (
                        <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-xs">{appointment.location}</span>
                    </div>
                  </div>

                  {/* Acciones principales */}
                  <div className="flex gap-2 pt-2">
                    {appointment.type === "virtual" ? (
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <Video className="h-4 w-4 mr-2" />
                        Unirse ahora
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() =>
                          handleGetDirections(appointment.location)
                        }
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Cómo llegar
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Botón para agendar nueva cita */}
        <Button variant="outline" className="w-full mt-2">
          <Plus className="h-4 w-4 mr-2" />
          Agendar nueva cita
        </Button>

        {/* Resumen rápido */}
        <Card className="p-3 bg-blue-50 dark:bg-blue-950 border-none">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-gray-700 dark:text-gray-300">
                Próxima cita
              </span>
            </div>
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Hoy a las 15:00
            </span>
          </div>
        </Card>
      </div>
    </Card>
  );
}
