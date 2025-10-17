import { Watch, Activity, Smartphone, Cloud } from "lucide-react";

export const DATA_FLOW_STEPS = [
  {
    icon: Watch,
    title: "Galaxy Watch 7",
    description: "Monitoreo continuo de salud",
    color: "blue",
  },
  {
    icon: Activity,
    title: "Samsung Health",
    description: "Agregación de datos",
    color: "green",
  },
  {
    icon: Smartphone,
    title: "App Móvil",
    description: "Integración con Health Connect",
    color: "purple",
  },
  {
    icon: Cloud,
    title: "Análisis de IA",
    description: "Evaluación de riesgos y alertas",
    color: "indigo",
  },
] as const;
