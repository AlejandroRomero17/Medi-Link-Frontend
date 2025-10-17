"use client";

import { AlertTriangle, Activity } from "lucide-react";

type AlertCardProps = {
  patient: string;
  type: "critical" | "warning" | "info";
  message: string;
  timestamp: string;
  details: string;
};

export function AlertCard({
  patient,
  type,
  message,
  timestamp,
  details,
}: AlertCardProps) {
  const alertStyles = {
    critical: "bg-red-50 border-red-200 dark:bg-red-900/30 dark:border-red-800",
    warning:
      "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-800",
    info: "bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800",
  };

  const icon = {
    critical: <AlertTriangle className="h-4 w-4 text-red-500" />,
    warning: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
    info: <Activity className="h-4 w-4 text-blue-500" />,
  };

  return (
    <div className={`p-4 rounded-lg border ${alertStyles[type]}`}>
      <div className="flex items-start gap-3">
        {icon[type]}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-foreground">{patient}</h3>
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          <p className="text-sm text-foreground mb-2">{message}</p>
          <p className="text-xs text-muted-foreground">{details}</p>
        </div>
      </div>
    </div>
  );
}
