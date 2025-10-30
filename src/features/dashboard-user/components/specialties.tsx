"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Baby,
  Eye,
  Brain,
  Bone,
  Stethoscope,
  Paintbrush,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

const specialties = [
  {
    name: "Cardiología",
    icon: Heart,
    count: 12,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950",
  },
  {
    name: "Pediatría",
    icon: Baby,
    count: 18,
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950",
  },
  {
    name: "Oftalmología",
    icon: Eye,
    count: 8,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950",
  },
  {
    name: "Neurología",
    icon: Brain,
    count: 6,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950",
  },
  {
    name: "Traumatología",
    icon: Bone,
    count: 15,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950",
  },
  {
    name: "Medicina General",
    icon: Stethoscope,
    count: 24,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
  },
  {
    name: "Dermatología",
    icon: Paintbrush,
    count: 10,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950",
  },
  {
    name: "Ginecología",
    icon: Activity,
    count: 14,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-950",
  },
];

export function SpecialtiesSection() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Especialidades Médicas
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Encuentra doctores por especialidad
            </p>
          </div>
          <Button variant="link" className="text-blue-600">
            Ver todas
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex-col gap-2 hover:shadow-md transition-all"
              >
                <div className={`p-3 rounded-full ${specialty.bgColor}`}>
                  <specialty.icon className={`h-6 w-6 ${specialty.color}`} />
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm text-gray-900 dark:text-white">
                    {specialty.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {specialty.count} doctores
                  </p>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}
