import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";

interface PatientAlertCardProps {
  variant: "destructive" | "warning" | "success";
  name: string;
  description: string;
}

const iconMap = {
  destructive: AlertTriangle,
  warning: TrendingUp,
  success: CheckCircle,
};

export const PatientAlertCard = ({
  variant,
  name,
  description,
}: PatientAlertCardProps) => {
  const Icon = iconMap[variant];

  // Definimos clases completas para evitar problemas con PurgeCSS
  const bgClasses = {
    destructive: "bg-red-50 dark:bg-red-900/20",
    warning: "bg-yellow-50 dark:bg-yellow-900/20",
    success: "bg-green-50 dark:bg-green-900/20",
  };

  const borderClasses = {
    destructive: "border-red-200 dark:border-red-800",
    warning: "border-yellow-200 dark:border-yellow-800",
    success: "border-green-200 dark:border-green-800",
  };

  const iconClasses = {
    destructive: "text-red-500 dark:text-red-400",
    warning: "text-yellow-500 dark:text-yellow-400",
    success: "text-green-500 dark:text-green-400",
  };

  const badgeClasses = {
    destructive: "", // Usa el variant="destructive" por defecto
    warning:
      "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-200",
    success:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-200",
  };

  return (
    <div
      className={`flex items-center justify-between p-4 ${bgClasses[variant]} ${borderClasses[variant]} rounded-lg transition-all duration-200 hover:shadow-sm dark:hover:shadow-none`}
      data-aos="fade-up"
    >
      <div className="flex items-center gap-3">
        <Icon className={`h-5 w-5 flex-shrink-0 ${iconClasses[variant]}`} />
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-50">{name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
      <Badge
        variant={variant === "destructive" ? "destructive" : "secondary"}
        className={badgeClasses[variant]}
      >
        {variant === "destructive"
          ? "Alto Riesgo"
          : variant === "warning"
          ? "Riesgo Medio"
          : "Bajo Riesgo"}
      </Badge>
    </div>
  );
};
