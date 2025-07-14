export const PATIENT_ALERTS = [
  {
    variant: "destructive" as const,
    name: "Juan Pérez",
    description: "Presión arterial alta detectada - 145/92 mmHg",
  },
  {
    variant: "warning" as const,
    name: "María González",
    description: "Patrones de sueño irregulares detectados",
  },
  {
    variant: "success" as const,
    name: "Carlos Rodríguez",
    description: "Todas las métricas dentro del rango normal",
  },
] as const;
