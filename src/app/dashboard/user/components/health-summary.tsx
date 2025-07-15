import { Heart, Activity, Footprints, Brain, Flame, Moon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const healthMetrics = [
  {
    title: "Ritmo cardíaco",
    value: "72",
    unit: "lpm",
    status: "normal",
    icon: Heart,
    color: "text-red-500 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-900/30",
    borderColor: "border-red-200 dark:border-red-800",
    change: "+2%",
    trend: "up",
  },
  {
    title: "SpO2",
    value: "98",
    unit: "%",
    status: "normal",
    icon: Activity,
    color: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    change: "0%",
    trend: "neutral",
  },
  {
    title: "Pasos",
    value: "8,247",
    unit: "pasos",
    status: "excelente",
    icon: Footprints,
    color: "text-green-500 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/30",
    borderColor: "border-green-200 dark:border-green-800",
    change: "+15%",
    trend: "up",
  },
  {
    title: "Estrés",
    value: "42",
    unit: "/100",
    status: "moderado",
    icon: Brain,
    color: "text-yellow-500 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/30",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    change: "+8%",
    trend: "up",
  },
  {
    title: "Calorías",
    value: "1,847",
    unit: "kcal",
    status: "excelente",
    icon: Flame,
    color: "text-orange-500 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-900/30",
    borderColor: "border-orange-200 dark:border-orange-800",
    change: "+5%",
    trend: "up",
  },
  {
    title: "Sueño",
    value: "7.5",
    unit: "horas",
    status: "excelente",
    icon: Moon,
    color: "text-purple-500 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    borderColor: "border-purple-200 dark:border-purple-800",
    change: "+12%",
    trend: "up",
  },
];

export function HealthSummarySection() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">
        Resumen de Salud
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {healthMetrics.map((metric) => (
          <Card
            key={metric.title}
            className={`${metric.borderColor} hover:shadow-md transition-shadow`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                </div>
                <Badge
                  variant={
                    metric.status === "normal"
                      ? "secondary"
                      : metric.status === "excelente"
                      ? "default"
                      : "outline"
                  }
                  className={
                    metric.status === "normal"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                      : metric.status === "excelente"
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
                  }
                >
                  {metric.status.charAt(0).toUpperCase() +
                    metric.status.slice(1)}
                </Badge>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {metric.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {metric.unit}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {metric.title}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500 dark:text-green-400" />
                  ) : metric.trend === "down" ? (
                    <TrendingDown className="h-3 w-3 text-red-500 dark:text-red-400" />
                  ) : null}
                  <span
                    className={`text-xs ${
                      metric.trend === "up"
                        ? "text-green-600 dark:text-green-400"
                        : metric.trend === "down"
                        ? "text-red-600 dark:text-red-400"
                        : "text-muted-foreground"
                    }`}
                  >
                    {metric.change !== "0%" && metric.change}
                    {metric.change === "0%"
                      ? "Sin cambios"
                      : " desde la semana pasada"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
