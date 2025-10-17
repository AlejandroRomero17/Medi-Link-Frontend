import { Footprints, Stethoscope, Moon, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    title: "Camina 15 minutos",
    description:
      "Ejercicio ligero puede ayudar a reducir tus niveles de estrés actuales",
    action: "Comenzar",
    priority: "high",
    icon: Footprints,
  },
  {
    title: "Programa un chequeo médico",
    description:
      "Considera consultar con tu médico sobre los patrones recientes",
    action: "Agendar cita",
    priority: "medium",
    icon: Stethoscope,
  },
  {
    title: "Mejora tu rutina de sueño",
    description: "Intenta acostarte 30 minutos más temprano esta noche",
    action: "Establecer recordatorio",
    priority: "medium",
    icon: Moon,
  },
];

export function RecommendationsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
          Recomendaciones Personalizadas
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Sugerencias basadas en IA para mejorar tu salud
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-4 bg-accent/50 rounded-lg border">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-background rounded-lg">
                  <rec.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{rec.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {rec.description}
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="ml-4 whitespace-nowrap"
              >
                {rec.action}
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
