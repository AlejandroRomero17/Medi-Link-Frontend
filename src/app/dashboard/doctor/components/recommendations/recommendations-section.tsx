"use client";

import { Brain } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecommendationCard } from "./recommendation-card";

interface AIRecommendation {
  id: number;
  patient: string;
  recommendation: string;
  confidence: number;
  priority: "high" | "medium" | "low";
  status: "pending" | "accepted" | "rejected";
}

const aiRecommendations: AIRecommendation[] = [
  {
    id: 1,
    patient: "Juan Pérez",
    recommendation:
      "Recomendar monitoreo inmediato de presión arterial y técnicas de manejo del estrés",
    confidence: 92,
    priority: "high",
    status: "pending",
  },
  {
    id: 2,
    patient: "Ana Martínez",
    recommendation:
      "Sugerir consulta con cardiología y modificaciones de estilo de vida",
    confidence: 87,
    priority: "high",
    status: "pending",
  },
  {
    id: 3,
    patient: "María González",
    recommendation:
      "Recomendar mejoras en higiene de sueño y posible estudio del sueño",
    confidence: 78,
    priority: "medium",
    status: "pending",
  },
];

export function RecommendationsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-secondary" />
          Recomendaciones de IA
        </CardTitle>
        <CardDescription>
          Sugerencias de tratamiento generadas por IA
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {aiRecommendations.length > 0 ? (
          aiRecommendations.map((rec) => (
            <RecommendationCard
              key={rec.id}
              patient={rec.patient}
              recommendation={rec.recommendation}
              confidence={rec.confidence}
              priority={rec.priority}
              status={rec.status}
            />
          ))
        ) : (
          <div className="text-center py-4 text-muted-foreground">
            No hay recomendaciones disponibles
          </div>
        )}
      </CardContent>
    </Card>
  );
}
