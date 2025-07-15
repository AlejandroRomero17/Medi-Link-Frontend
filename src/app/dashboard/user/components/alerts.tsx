import { AlertTriangle, Moon, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const aiAlerts = [
  {
    type: "warning",
    title: "Estrés elevado detectado",
    description:
      "Tus niveles de estrés han estado altos durante los últimos 3 días",
    severity: "medium",
    icon: AlertTriangle,
  },
  {
    type: "info",
    title: "Cambio en el patrón de sueño",
    description: "Tu duración de sueño ha disminuido 1.2 horas esta semana",
    severity: "low",
    icon: Moon,
  },
  {
    type: "success",
    title: "Mejora en ritmo cardíaco",
    description: "Tu frecuencia cardíaca en reposo ha mejorado 3 lpm este mes",
    severity: "positive",
    icon: Heart,
  },
];

export function AlertsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
          Alertas de Salud (IA)
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Riesgos y patrones detectados recientemente
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {aiAlerts.map((alert, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              alert.severity === "medium"
                ? "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-800"
                : alert.severity === "low"
                ? "bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800"
                : "bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-800"
            }`}
          >
            <div className="flex items-start gap-3">
              <alert.icon
                className={`h-5 w-5 mt-0.5 ${
                  alert.severity === "medium"
                    ? "text-yellow-600 dark:text-yellow-400"
                    : alert.severity === "low"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-green-600 dark:text-green-400"
                }`}
              />
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{alert.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {alert.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
