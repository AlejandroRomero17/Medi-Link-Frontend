"use client";

import { Search, UserCheck, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Busca tu especialidad",
    description:
      "Explora nuestra amplia red de profesionales certificados por especialidad y ubicación.",
  },
  {
    icon: UserCheck,
    title: "Elige tu profesional",
    description:
      "Revisa perfiles, calificaciones y experiencia para encontrar al especialista ideal.",
  },
  {
    icon: Calendar,
    title: "Agenda tu cita fácilmente",
    description:
      "Reserva tu consulta en línea de forma rápida y segura en minutos.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-16 sm:py-20 md:py-28 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Cómo{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              funciona
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tres simples pasos para conectar con tu especialista.
          </p>
        </motion.div>

        {/* Grid de pasos */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative flex flex-col items-center text-center bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-xl"
            >
              {/* Círculo principal con ícono */}
              <div className="mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500 text-white shadow-lg">
                <step.icon className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>

              {/* Número decorativo */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 dark:bg-blue-600 text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Texto */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
