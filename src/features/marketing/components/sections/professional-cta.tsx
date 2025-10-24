"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Calendar,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProfessionalCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-emerald-600 to-blue-600 dark:from-emerald-700 dark:to-blue-700 text-white relative overflow-hidden"
      id="profesionales">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Blobs decorativos */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Para Profesionales de la Salud
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ¿Eres profesionista de la salud?
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Únete a nuestra plataforma y haz crecer tu consulta. Conecta con
              miles de pacientes que buscan tus servicios profesionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-6 text-base sm:text-lg shadow-xl"
              >
                Registrarme como profesional
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base sm:text-lg"
              >
                Más información
              </Button>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/30">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Users className="h-6 w-6 sm:h-8 sm:w-8 mb-2 text-white/90" />
                <p className="text-xl sm:text-2xl font-bold">10,000+</p>
                <p className="text-xs sm:text-sm text-white/80">
                  Pacientes activos
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 mb-2 text-white/90" />
                <p className="text-xl sm:text-2xl font-bold">50,000+</p>
                <p className="text-xs sm:text-sm text-white/80">
                  Citas agendadas
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 mb-2 text-white/90" />
                <p className="text-xl sm:text-2xl font-bold">98%</p>
                <p className="text-xs sm:text-sm text-white/80">Satisfacción</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/assets/landing/healthcare-professional-using-tablet-modern-clinic.jpg"
                alt="Profesional de la salud"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
            </div>

            {/* Tarjeta flotante decorativa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    +45%
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Crecimiento mensual
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
