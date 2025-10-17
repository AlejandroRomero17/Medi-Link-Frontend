"use client";

import { AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCard } from "./alert-card";

interface Alert {
  id: number;
  patient: string;
  type: "critical" | "warning" | "info";
  message: string;
  timestamp: string;
  details: string;
}

const aiAlerts: Alert[] = [
  {
    id: 1,
    patient: "Juan Pérez",
    type: "critical",
    message: "Alto riesgo de hipertensión detectado",
    timestamp: "Hace 5 minutos",
    details:
      "Ritmo cardíaco consistentemente elevado (>85 lpm) y altos niveles de estrés por 3 días",
  },
  {
    id: 2,
    patient: "Ana Martínez",
    type: "warning",
    message: "Indicadores de riesgo cardiovascular presentes",
    timestamp: "Hace 12 minutos",
    details:
      "Ritmo cardíaco elevado combinado con patrones de mala calidad de sueño",
  },
  {
    id: 3,
    patient: "María González",
    type: "info",
    message: "Irregularidades en patrones de sueño detectadas",
    timestamp: "Hace 1 hora",
    details:
      "Duración promedio de sueño disminuyó 1.5 horas en la última semana",
  },
];

export function AlertsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Alertas de Salud (IA)
        </CardTitle>
        <CardDescription>
          {aiAlerts.length} patrones críticos detectados por IA
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {aiAlerts.length > 0 ? (
          aiAlerts.map((alert) => (
            <AlertCard
              key={alert.id}
              patient={alert.patient}
              type={alert.type}
              message={alert.message}
              timestamp={alert.timestamp}
              details={alert.details}
            />
          ))
        ) : (
          <div className="text-center py-4 text-muted-foreground">
            No hay alertas recientes
          </div>
        )}
      </CardContent>
    </Card>
  );
}
