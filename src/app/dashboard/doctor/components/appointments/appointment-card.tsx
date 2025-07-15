"use client";

import { Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type AppointmentCardProps = {
  patient: string;
  time: string;
  date: string;
  type: string;
  status: "confirmed" | "pending" | "cancelled";
};

export function AppointmentCard({
  patient,
  time,
  date,
  type,
  status,
}: AppointmentCardProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-card border rounded-lg">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent rounded-lg">
          <Clock className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="font-medium text-foreground">{patient}</p>
          <p className="text-sm text-muted-foreground">
            {type} • {date} a las {time}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge
          variant="outline"
          className={
            status === "confirmed"
              ? "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800"
              : "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-800"
          }
        >
          {status === "confirmed" ? "Confirmada" : "Pendiente"}
        </Badge>
        <Button variant="ghost" size="sm">
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Mail className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
