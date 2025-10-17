import { Heart, Footprints, Brain, Moon } from "lucide-react";

export const METRIC_CARDS = [
  {
    title: "Ritmo Cardíaco",
    value: "72 LPM",
    description: "En reposo: 68-76 LPM",
    status: "Normal",
    icon: Heart,
    iconClass: "text-red-600 dark:text-red-400",
    badgeClass:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    progressClass: "bg-green-500 dark:bg-green-400 w-3/4",
    iconBgClass: "bg-red-100 dark:bg-red-900/30",
    color: "red",
  },
  {
    title: "Pasos Diarios",
    value: "8,247",
    description: "Meta: 10,000 pasos",
    status: "Activo",
    icon: Footprints,
    iconClass: "text-blue-600 dark:text-blue-400",
    badgeClass:
      "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
    progressClass: "bg-blue-500 dark:bg-blue-400 w-3/4",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/30",
    color: "blue",
  },
  {
    title: "Nivel de Estrés",
    value: "42",
    description: "Escala: 0-100",
    status: "Moderado",
    icon: Brain,
    iconClass: "text-purple-600 dark:text-purple-400",
    badgeClass:
      "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
    progressClass: "bg-yellow-500 dark:bg-yellow-400 w-2/5",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/30",
    color: "purple",
  },
  {
    title: "Calidad de Sueño",
    value: "7.5h",
    description: "Profundo: 2.1h, REM: 1.8h",
    status: "Bueno",
    icon: Moon,
    iconClass: "text-indigo-600 dark:text-indigo-400",
    badgeClass:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    progressClass: "bg-indigo-500 dark:bg-indigo-400 w-4/5",
    iconBgClass: "bg-indigo-100 dark:bg-indigo-900/30",
    color: "indigo",
  },
] as const;
