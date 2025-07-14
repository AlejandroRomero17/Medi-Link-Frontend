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

const colorMap = {
  destructive: "red",
  warning: "yellow",
  success: "green",
};

export const PatientAlertCard = ({
  variant,
  name,
  description,
}: PatientAlertCardProps) => {
  const Icon = iconMap[variant];
  const color = colorMap[variant];

  return (
    <div
      className={`flex items-center justify-between p-4 bg-${color}-50 dark:bg-${color}-900/20 border border-${color}-200 dark:border-${color}-800 rounded-lg transition-colors duration-200`}
    >
      <div className="flex items-center gap-3">
        <Icon className={`h-5 w-5 text-${color}-500 dark:text-${color}-400`} />
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-100">{name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
      <Badge
        variant={variant === "destructive" ? "destructive" : "secondary"}
        className={
          variant !== "destructive"
            ? `bg-${color}-100 dark:bg-${color}-900/30 text-${color}-700 dark:text-${color}-200`
            : ""
        }
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
