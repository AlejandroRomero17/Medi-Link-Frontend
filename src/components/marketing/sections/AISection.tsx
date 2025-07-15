"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  BrainCircuit,
  Activity,
  HeartPulse,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AISection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200 relative overflow-hidden">
      {/* Efecto de partículas de datos */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400/10 dark:bg-blue-500/10"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400">
                Inteligencia de Salud con IA
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Nuestro modelo avanzado de aprendizaje automático analiza tus
              métricas de salud continuas para identificar patrones y
              proporcionar alertas personalizadas sobre riesgos de diabetes,
              hipertensión y enfermedades cardiovasculares.
            </p>

            <div className="space-y-4">
              <FeatureItem
                icon={BrainCircuit}
                title="Detección Temprana"
                description="Identifica riesgos de salud 6-12 meses antes de que aparezcan síntomas"
                delay={0.1}
              />
              <FeatureItem
                icon={Activity}
                title="Información Personalizada"
                description="Recomendaciones adaptadas a tu perfil de salud único"
                delay={0.2}
              />
              <FeatureItem
                icon={HeartPulse}
                title="Aprendizaje Continuo"
                description="El modelo de IA mejora su precisión con más datos a lo largo del tiempo"
                delay={0.3}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-blue-200 dark:border-blue-800 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <Zap className="h-6 w-6 text-yellow-500 fill-yellow-400/20" />
                  </motion.div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400">
                    Evaluación de Riesgos por IA
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Análisis en tiempo real de tus métricas de salud
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RiskIndicator
                  label="Riesgo de Diabetes"
                  value="12%"
                  variant="low"
                  progress={12}
                />
                <RiskIndicator
                  label="Riesgo de Hipertensión"
                  value="34%"
                  variant="medium"
                  progress={34}
                />
                <RiskIndicator
                  label="Riesgo Cardiovascular"
                  value="18%"
                  variant="low"
                  progress={18}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}) => (
  <motion.div
    className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="relative">
      <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Icon className="h-6 w-6 text-blue-500 dark:text-blue-400 mt-1 relative z-10" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const RiskIndicator = ({
  label,
  value,
  variant,
  progress,
}: {
  label: string;
  value: string;
  variant: "low" | "medium" | "high";
  progress: number;
}) => {
  const variantClasses = {
    low: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300",
    medium:
      "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300",
    high: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
  };

  const progressColors = {
    low: "bg-gradient-to-r from-green-400 to-green-500",
    medium: "bg-gradient-to-r from-yellow-400 to-yellow-500",
    high: "bg-gradient-to-r from-red-400 to-red-500",
  };

  return (
    <motion.div
      className="space-y-2"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
          {label}
        </span>
        <Badge variant="secondary" className={variantClasses[variant]}>
          {variant === "low" ? "Bajo" : variant === "medium" ? "Medio" : "Alto"}{" "}
          ({value})
        </Badge>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-2 ${progressColors[variant]} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        />
      </div>
    </motion.div>
  );
};
