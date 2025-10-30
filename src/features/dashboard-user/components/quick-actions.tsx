"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  FileText,
  MessageCircle,
  Video,
  Clock,
  MapPin,
  Phone,
  Ambulance,
} from "lucide-react";
import { motion } from "framer-motion";

const quickActions = [
  {
    title: "Agendar Cita",
    description: "Programa tu próxima consulta",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    action: "/user/appointments/new",
  },
  {
    title: "Teleconsulta",
    description: "Video llamada con doctor",
    icon: Video,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    action: "/user/teleconsultation",
    badge: "Popular",
  },
  {
    title: "Mi Expediente",
    description: "Ver historial médico",
    icon: FileText,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
    action: "/user/medical-records",
  },
  {
    title: "Chat Médico",
    description: "Consulta por mensaje",
    icon: MessageCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950",
    action: "/user/messages",
    badge: "2",
  },
];

export function QuickActionsSection() {
  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Acciones Rápidas
          </h3>

          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="w-full h-auto p-4 justify-start hover:shadow-md transition-all"
                  asChild
                >
                  <a href={action.action}>
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className={`p-3 rounded-lg ${action.bgColor} flex-shrink-0`}
                      >
                        <action.icon className={`h-5 w-5 ${action.color}`} />
                      </div>
                      <div className="text-left flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-gray-900 dark:text-white">
                            {action.title}
                          </p>
                          {action.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {action.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>

      {/* Emergencias */}
      <Card className="p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border-red-200 dark:border-red-800">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-red-600 rounded-lg">
            <Ambulance className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900 dark:text-white text-sm">
              ¿Emergencia Médica?
            </p>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
              Llama inmediatamente al servicio de emergencias
            </p>
            <Button variant="destructive" size="sm" className="w-full mt-3">
              <Phone className="h-4 w-4 mr-2" />
              Llamar 911
            </Button>
          </div>
        </div>
      </Card>

      {/* Información de ubicación */}
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950 dark:to-emerald-950 border-none">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-white dark:bg-slate-900 rounded-lg">
            <MapPin className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900 dark:text-white text-sm">
              Tu ubicación
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Huauchinango, Puebla, México
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Button variant="link" className="h-auto p-0 text-xs">
                Cambiar ubicación
              </Button>
              <span className="text-xs text-gray-400">•</span>
              <Button variant="link" className="h-auto p-0 text-xs">
                Usar GPS
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Horario de atención */}
      <Card className="p-4 bg-gray-50 dark:bg-slate-900 border-none">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-white dark:bg-slate-800 rounded-lg">
            <Clock className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900 dark:text-white text-sm">
              Horarios de Atención
            </p>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600 dark:text-gray-400">
                  Lun - Vie
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  7:00 AM - 9:00 PM
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600 dark:text-gray-400">Sábado</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  8:00 AM - 2:00 PM
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600 dark:text-gray-400">
                  Domingo
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  Cerrado
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
