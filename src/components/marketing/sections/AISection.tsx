import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle } from "lucide-react";
import { LucideIcon } from "lucide-react"; // Importamos el tipo LucideIcon

export const AISection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Inteligencia de Salud con IA
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Nuestro modelo avanzado de aprendizaje automático analiza tus
            métricas de salud continuas para identificar patrones y proporcionar
            alertas personalizadas sobre riesgos de diabetes, hipertensión y
            enfermedades cardiovasculares.
          </p>

          <div className="space-y-4">
            <FeatureItem
              icon={CheckCircle}
              title="Detección Temprana"
              description="Identifica riesgos de salud 6-12 meses antes de que aparezcan síntomas"
            />
            <FeatureItem
              icon={CheckCircle}
              title="Información Personalizada"
              description="Recomendaciones adaptadas a tu perfil de salud único"
            />
            <FeatureItem
              icon={CheckCircle}
              title="Aprendizaje Continuo"
              description="El modelo de IA mejora su precisión con más datos a lo largo del tiempo"
            />
          </div>
        </div>

        <Card className="border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Zap className="h-5 w-5 text-yellow-500" />
              Evaluación de Riesgos por IA
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Análisis en tiempo real de tus métricas de salud
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RiskIndicator
              label="Riesgo de Diabetes"
              value="12%"
              variant="low"
              progress="w-1/8"
            />
            <RiskIndicator
              label="Riesgo de Hipertensión"
              value="34%"
              variant="medium"
              progress="w-1/3"
            />
            <RiskIndicator
              label="Riesgo Cardiovascular"
              value="18%"
              variant="low"
              progress="w-1/5"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// Componente corregido con tipo adecuado para el icono
const FeatureItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon; // Tipo específico en lugar de 'any'
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-3">
    <Icon className="h-6 w-6 text-green-500 dark:text-green-400 mt-1" />
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

// Resto del código se mantiene igual...
const RiskIndicator = ({
  label,
  value,
  variant,
  progress,
}: {
  label: string;
  value: string;
  variant: "low" | "medium" | "high";
  progress: string;
}) => {
  const variantClasses = {
    low: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300",
    medium:
      "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300",
    high: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
  };

  const progressColors = {
    low: "bg-green-500 dark:bg-green-400",
    medium: "bg-yellow-500 dark:bg-yellow-400",
    high: "bg-red-500 dark:bg-red-400",
  };

  return (
    <div className="space-y-2 mb-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
          {label}
        </span>
        <Badge variant="secondary" className={variantClasses[variant]}>
          {variant === "low" ? "Bajo" : variant === "medium" ? "Medio" : "Alto"}{" "}
          ({value})
        </Badge>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className={`h-2 ${progressColors[variant]} rounded-full ${progress}`}
        ></div>
      </div>
    </div>
  );
};
