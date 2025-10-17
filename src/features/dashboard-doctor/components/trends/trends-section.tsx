"use client";

import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface PatientTrendData {
  day: string;
  heartRate: number;
  sleep: number;
  activity: number;
}

const patientTrendData: PatientTrendData[] = [
  { day: "Lun", heartRate: 82, sleep: 6.2, activity: 68 },
  { day: "Mar", heartRate: 85, sleep: 5.8, activity: 72 },
  { day: "Mié", heartRate: 87, sleep: 6.0, activity: 70 },
  { day: "Jue", heartRate: 84, sleep: 6.5, activity: 65 },
  { day: "Vie", heartRate: 86, sleep: 5.5, activity: 75 },
  { day: "Sáb", heartRate: 83, sleep: 7.2, activity: 60 },
  { day: "Dom", heartRate: 85, sleep: 6.8, activity: 65 },
];

interface TooltipPayload {
  color: string;
  name: string;
  value: number;
  payload: PatientTrendData;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-lg p-4 shadow-sm">
        <p className="font-medium text-foreground">{label}</p>
        <div className="space-y-1 mt-2">
          {payload.map((entry, index) => (
            <div key={`tooltip-${index}`} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-muted-foreground">
                {entry.name === "heartRate"
                  ? "Ritmo cardíaco"
                  : entry.name === "sleep"
                  ? "Sueño"
                  : "Actividad"}
                :{" "}
                <span className="font-medium text-foreground">
                  {entry.value}{" "}
                  {entry.name === "activity"
                    ? "puntos"
                    : entry.name === "sleep"
                    ? "hrs"
                    : "lpm"}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function TrendsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-500" />
          Tendencias del Paciente - Juan Pérez
        </CardTitle>
        <CardDescription>Resumen semanal de métricas de salud</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={patientTrendData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                opacity={0.3}
              />
              <XAxis
                dataKey="day"
                tick={{ fill: "white" }}
                tickLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis
                tick={{ fill: "white" }}
                tickLine={{ stroke: "hsl(var(--border))" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                formatter={(value) => {
                  switch (value) {
                    case "heartRate":
                      return "Ritmo cardíaco";
                    case "sleep":
                      return "Sueño";
                    case "activity":
                      return "Actividad";
                    default:
                      return value;
                  }
                }}
              />
              <Line
                type="monotone"
                dataKey="heartRate"
                name="Ritmo cardíaco"
                stroke="#8b5cf6"
                strokeWidth={2}
                activeDot={{ r: 6 }}
                dot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="sleep"
                name="Sueño"
                stroke="#ec4899"
                strokeWidth={2}
                activeDot={{ r: 6 }}
                dot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="activity"
                name="Actividad"
                stroke="#14b8a6"
                strokeWidth={2}
                activeDot={{ r: 6 }}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
