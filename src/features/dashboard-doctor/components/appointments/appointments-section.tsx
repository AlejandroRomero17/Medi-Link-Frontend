"use client";

import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppointmentCard } from "./appointment-card";

interface Appointment {
  id: number;
  patient: string;
  time: string;
  date: string;
  type: string;
  status: "confirmed" | "pending" | "cancelled";
}

const upcomingAppointments: Appointment[] = [
  {
    id: 1,
    patient: "Juan Pérez",
    time: "10:00 AM",
    date: "Hoy",
    type: "Seguimiento",
    status: "confirmed",
  },
  {
    id: 2,
    patient: "Carlos Rodríguez",
    time: "2:30 PM",
    date: "Hoy",
    type: "Chequeo rutinario",
    status: "confirmed",
  },
  {
    id: 3,
    patient: "María González",
    time: "9:00 AM",
    date: "Mañana",
    type: "Consulta",
    status: "pending",
  },
];

export function AppointmentsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Próximas Citas
        </CardTitle>
        <CardDescription>Tus citas programadas con pacientes</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingAppointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            patient={appointment.patient}
            time={appointment.time}
            date={appointment.date}
            type={appointment.type}
            status={appointment.status}
          />
        ))}
      </CardContent>
    </Card>
  );
}
