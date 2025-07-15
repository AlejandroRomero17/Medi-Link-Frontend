"use client";

import { Eye, Heart, Activity } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Patient {
  id: number;
  name: string;
  age: number;
  avatar: string;
  lastHeartRate: number;
  spo2: number;
  stressLevel: number;
  alertStatus: "high" | "medium" | "low";
  lastSync: string;
  riskFactors: string[];
}

const patients: Patient[] = [
  {
    id: 1,
    name: "Juan Pérez",
    age: 45,
    avatar: "JP",
    lastHeartRate: 85,
    spo2: 96,
    stressLevel: 65,
    alertStatus: "high",
    lastSync: "Hace 2 minutos",
    riskFactors: ["Hipertensión", "Estrés elevado"],
  },
  {
    id: 2,
    name: "María González",
    age: 38,
    avatar: "MG",
    lastHeartRate: 72,
    spo2: 98,
    stressLevel: 35,
    alertStatus: "medium",
    lastSync: "Hace 5 minutos",
    riskFactors: ["Problemas de sueño"],
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    age: 52,
    avatar: "CR",
    lastHeartRate: 78,
    spo2: 97,
    stressLevel: 28,
    alertStatus: "low",
    lastSync: "Hace 1 minuto",
    riskFactors: [],
  },
];

function getAlertStatusColor(status: "high" | "medium" | "low"): string {
  const statusClasses = {
    high: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-800",
    medium:
      "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-800",
    low: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800",
  };
  return (
    statusClasses[status] ||
    "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
  );
}

function getStressLevelColor(level: number): string {
  if (level > 60) return "bg-red-500";
  if (level > 40) return "bg-yellow-500";
  return "bg-green-500";
}

export function PatientsTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Paciente</TableHead>
            <TableHead>Edad</TableHead>
            <TableHead>Ritmo Cardíaco</TableHead>
            <TableHead>SpO2</TableHead>
            <TableHead>Nivel de Estrés</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Últ. Sincronización</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.length > 0 ? (
            patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{patient.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">
                        {patient.name}
                      </p>
                      {patient.riskFactors.length > 0 && (
                        <p className="text-xs text-muted-foreground">
                          {patient.riskFactors.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    {patient.lastHeartRate} lpm
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Activity className="h-4 w-4 text-blue-500" />
                    {patient.spo2}%
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div
                        className={`h-2 rounded-full ${getStressLevelColor(
                          patient.stressLevel
                        )}`}
                        style={{ width: `${patient.stressLevel}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {patient.stressLevel}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={getAlertStatusColor(patient.alertStatus)}
                  >
                    {patient.alertStatus === "high"
                      ? "ALTO"
                      : patient.alertStatus === "medium"
                      ? "MEDIO"
                      : "BAJO"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-muted-foreground">
                    {patient.lastSync}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    Ver Detalles
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={8}
                className="text-center py-4 text-muted-foreground"
              >
                No hay pacientes registrados
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
