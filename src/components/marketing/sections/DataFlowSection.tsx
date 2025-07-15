"use client";

import { ArrowRight } from "lucide-react";
import { DATA_FLOW_STEPS } from "@/lib/constants/data-flow-steps";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const DataFlowSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generador de partículas con posiciones fijas pero aleatorias
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: `${Math.sin(i * 0.5) * 40 + 50}%`,
    left: `${Math.cos(i * 0.3) * 40 + 50}%`,
    size: `${Math.sin(i) * 5 + 10}px`,
    delay: `${i * 0.2}s`,
    duration: `${Math.sin(i) * 5 + 10}s`,
  }));

  return (
    <section
      id="como-funciona"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-200 overflow-hidden relative"
    >
      {/* Efecto de partículas futuristas con movimiento orbital */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-blue-400/20 dark:bg-blue-500/20"
              style={{
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                x: [0, Math.sin(particle.id * 0.5) * 40, 0],
                y: [0, Math.cos(particle.id * 0.5) * 40, 0],
              }}
              transition={{
                duration: Number(particle.duration),
                repeat: Infinity,
                ease: "easeInOut",
                delay: Number(particle.delay),
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-text-shine">
              Flujo Seguro de tus Datos
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Desde tu Galaxy Watch 7 hasta análisis con IA, tus datos siguen un
            camino cifrado para ofrecerte recomendaciones personalizadas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-center">
          {DATA_FLOW_STEPS.map((step, index) => (
            <div key={`paso-${index}`} className="contents">
              {/* Tarjeta de paso con efecto holográfico */}
              <motion.div
                className="text-center p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-2xl hover:shadow-glow transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)",
                }}
              >
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`w-20 h-20 bg-${step.color}-100 dark:bg-${step.color}-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg relative`}
                >
                  {/* Anillo animado */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon
                      className={`h-10 w-10 text-${step.color}-600 dark:text-${step.color}-400 transition-all duration-300`}
                    />
                  </motion.div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-lg">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>

              {/* Flecha conectiva con efecto de energía */}
              {index < DATA_FLOW_STEPS.length - 1 && (
                <motion.div
                  className="hidden lg:flex justify-center items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-blue-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <ArrowRight className="h-8 w-8 text-blue-500 dark:text-blue-400 relative z-10" />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Efecto de conexión entre tarjetas con animación */}
      {isMounted && (
        <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">
          {DATA_FLOW_STEPS.slice(0, -1).map((_, index) => (
            <motion.line
              key={index}
              x1={`${index * 16.66 + 8.33}%`}
              y1="50%"
              x2={`${(index + 1) * 16.66 + 8.33}%`}
              y2="50%"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="10 5"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )}

      <style jsx global>{`
        .animate-text-shine {
          background-size: 200% auto;
          animation: textShine 3s ease-in-out infinite alternate;
        }
        @keyframes textShine {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 100% center;
          }
        }
        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  );
};
