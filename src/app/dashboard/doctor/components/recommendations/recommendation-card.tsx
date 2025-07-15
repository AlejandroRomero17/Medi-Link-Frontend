"use client";

import { Check, Edit, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type RecommendationCardProps = {
  patient: string;
  recommendation: string;
  confidence: number;
  priority: "high" | "medium" | "low";
  status: "pending" | "accepted" | "rejected";
};

export function RecommendationCard({
  patient,
  recommendation,
  confidence,
  priority,
}: RecommendationCardProps) {
  return (
    <div className="p-4 bg-accent/50 rounded-lg border border-border">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-foreground">{patient}</h3>
            <Badge
              variant="outline"
              className={
                priority === "high"
                  ? "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-800"
                  : "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-800"
              }
            >
              Prioridad {priority === "high" ? "alta" : "media"}
            </Badge>
          </div>
          <p className="text-sm text-foreground mb-2">{recommendation}</p>
          <p className="text-xs text-muted-foreground">
            Confianza: {confidence}%
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          <Check className="h-3 w-3 mr-1" />
          Aceptar
        </Button>
        <Button size="sm" variant="outline">
          <Edit className="h-3 w-3 mr-1" />
          Modificar
        </Button>
        <Button size="sm" variant="outline">
          <Send className="h-3 w-3 mr-1" />
          Enviar al Paciente
        </Button>
        <Button size="sm" variant="ghost">
          <X className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
