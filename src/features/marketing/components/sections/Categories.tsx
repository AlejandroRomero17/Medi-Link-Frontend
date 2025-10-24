"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Brain,
  Stethoscope,
  Baby,
  Sparkles,
  Activity,
  Eye,
  Pill,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    name: "Cardiología",
    icon: Heart,
    color: "emerald", // Verde salud
  },
  {
    name: "Psicología",
    icon: Brain,
    color: "blue", // Azul corporativo
  },
  {
    name: "Medicina General",
    icon: Stethoscope,
    color: "teal", // Verde azulado
  },
  {
    name: "Pediatría",
    icon: Baby,
    color: "sky", // Azul cielo
  },
  {
    name: "Dermatología",
    icon: Sparkles,
    color: "cyan", // Cian
  },
  {
    name: "Neurología",
    icon: Activity,
    color: "emerald", // Verde
  },
  {
    name: "Oftalmología",
    icon: Eye,
    color: "blue", // Azul
  },
  {
    name: "Odontología",
    icon: Pill,
    color: "teal", // Verde azulado
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const getColorClasses = (color: string) => {
  const colors: Record<
    string,
    {
      bg: string;
      bgDark: string;
      text: string;
      textDark: string;
      hover: string;
      hoverDark: string;
      border: string;
      borderDark: string;
    }
  > = {
    emerald: {
      bg: "bg-emerald-100",
      bgDark: "dark:bg-emerald-950",
      text: "text-emerald-600",
      textDark: "dark:text-emerald-400",
      hover: "hover:bg-emerald-600",
      hoverDark: "dark:hover:bg-emerald-500",
      border: "border-emerald-200",
      borderDark: "dark:border-emerald-800",
    },
    blue: {
      bg: "bg-blue-100",
      bgDark: "dark:bg-blue-950",
      text: "text-blue-600",
      textDark: "dark:text-blue-400",
      hover: "hover:bg-blue-600",
      hoverDark: "dark:hover:bg-blue-500",
      border: "border-blue-200",
      borderDark: "dark:border-blue-800",
    },
    teal: {
      bg: "bg-teal-100",
      bgDark: "dark:bg-teal-950",
      text: "text-teal-600",
      textDark: "dark:text-teal-400",
      hover: "hover:bg-teal-600",
      hoverDark: "dark:hover:bg-teal-500",
      border: "border-teal-200",
      borderDark: "dark:border-teal-800",
    },
    sky: {
      bg: "bg-sky-100",
      bgDark: "dark:bg-sky-950",
      text: "text-sky-600",
      textDark: "dark:text-sky-400",
      hover: "hover:bg-sky-600",
      hoverDark: "dark:hover:bg-sky-500",
      border: "border-sky-200",
      borderDark: "dark:border-sky-800",
    },
    cyan: {
      bg: "bg-cyan-100",
      bgDark: "dark:bg-cyan-950",
      text: "text-cyan-600",
      textDark: "dark:text-cyan-400",
      hover: "hover:bg-cyan-600",
      hoverDark: "dark:hover:bg-cyan-500",
      border: "border-cyan-200",
      borderDark: "dark:border-cyan-800",
    },
  };
  return colors[color];
};

export function Categories() {
  return (
    <section
      id="especialistas"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gray-50 dark:bg-slate-900"
    >
      {/* Blob decorativo */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-950 rounded-full border border-emerald-300 dark:border-emerald-700 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              Especialidades Médicas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Explora por{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              especialidad
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Encuentra al profesional de la salud que necesitas en minutos
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group relative overflow-hidden border-2 border-gray-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 bg-white dark:bg-slate-800 h-full">
                  <CardContent className="relative flex flex-col items-center gap-4 p-6">
                    {/* Icono */}
                    <div className="relative">
                      <div
                        className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl ${colors.bg} ${colors.bgDark} group-hover:scale-110 transition-all duration-300 border ${colors.border} ${colors.borderDark}`}
                      >
                        <category.icon
                          className={`h-8 w-8 sm:h-10 sm:w-10 ${colors.text} ${colors.textDark} transition-all duration-300`}
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-center text-gray-900 dark:text-white transition-all duration-300">
                      {category.name}
                    </h3>

                    <Button
                      variant="ghost"
                      size="sm"
                      className={`w-full border border-gray-300 dark:border-slate-600 ${colors.hover} ${colors.hoverDark} hover:text-white transition-all duration-300 font-semibold text-gray-700 dark:text-gray-300`}
                    >
                      Ver especialistas
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="px-6 sm:px-8 py-5 sm:py-6 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg"
          >
            <Sparkles className="mr-2 w-5 h-5" />
            Ver todas las especialidades
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
