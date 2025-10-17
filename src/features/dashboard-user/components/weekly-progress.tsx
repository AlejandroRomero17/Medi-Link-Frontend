"use client";

import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  TooltipProps,
} from "recharts";

const weeklyData = [
  { day: "Lun", heartRate: 68, sleep: 7.2, steps: 7.5 },
  { day: "Mar", heartRate: 70, sleep: 6.8, steps: 8.2 },
  { day: "Mié", heartRate: 72, sleep: 7.5, steps: 9.1 },
  { day: "Jue", heartRate: 69, sleep: 7.0, steps: 8.8 },
  { day: "Vie", heartRate: 71, sleep: 6.5, steps: 7.2 },
  { day: "Sáb", heartRate: 67, sleep: 8.2, steps: 10.5 },
  { day: "Dom", heartRate: 72, sleep: 7.8, steps: 8.2 },
];

// Función para personalizar el tooltip
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <p className="font-medium text-gray-900 dark:text-white">{label}</p>
        <div className="space-y-1">
          {payload.map((entry, index) => (
            <div key={`tooltip-${index}`} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {entry.name === "heartRate"
                  ? "Ritmo cardíaco"
                  : entry.name === "sleep"
                  ? "Sueño"
                  : "Pasos"}
                :{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {entry.value}{" "}
                  {entry.name === "steps"
                    ? "k"
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

export function WeeklyProgressSection() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Progreso Semanal</CardTitle>
            <CardDescription>
              Tus métricas de salud durante la última semana
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Ver historial completo
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={weeklyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis
                dataKey="day"
                tick={{ fill: "#6b7280" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                tick={{ fill: "#6b7280" }}
                tickLine={{ stroke: "#e5e7eb" }}
                domain={[60, 80]}
                label={{
                  value: "lpm",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#6b7280",
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: "#6b7280" }}
                tickLine={{ stroke: "#e5e7eb" }}
                domain={[0, 12]}
                label={{
                  value: "Horas / k pasos",
                  angle: 90,
                  position: "insideRight",
                  fill: "#6b7280",
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                formatter={(value) =>
                  value === "heartRate"
                    ? "Ritmo cardíaco"
                    : value === "sleep"
                    ? "Sueño"
                    : "Pasos (k)"
                }
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="heartRate"
                name="Ritmo cardíaco"
                stroke="#8b5cf6"
                strokeWidth={2}
                activeDot={{ r: 6 }}
                dot={{ r: 3 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="sleep"
                name="Sueño"
                stroke="#ec4899"
                strokeWidth={2}
                activeDot={{ r: 6 }}
                dot={{ r: 3 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="steps"
                name="Pasos"
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
