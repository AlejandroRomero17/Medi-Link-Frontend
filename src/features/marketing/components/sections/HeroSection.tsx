"use client";

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Stethoscope, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

interface StatCardProps {
  icon: React.ElementType;
  number: string;
  label: string;
  delay: number;
}

const StatCard = ({ icon: Icon, number, label, delay }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-lg border border-emerald-100 dark:border-emerald-900/50"
  >
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="p-2 bg-emerald-500 dark:bg-emerald-600 rounded-lg">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </div>
      <div>
        <p className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">
          {number}
        </p>
        <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
          {label}
        </p>
      </div>
    </div>
  </motion.div>
);

export const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950 overflow-hidden"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob esmeralda */}
        <motion.div
          className="absolute top-20 -left-40 w-[400px] h-[400px] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blob azul */}
        <motion.div
          className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Contenido de texto */}
          <div className="text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-950 rounded-full border border-emerald-300 dark:border-emerald-700"
            >
              <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                Plataforma de Reservación Médica
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Conecta con los{" "}
              <span className="relative inline-block">
                <span className="text-emerald-600 dark:text-emerald-400">
                  mejores especialistas
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>{" "}
              de salud
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl"
            >
              Encuentra y agenda citas con médicos, enfermeras, terapeutas y
              especialistas verificados. La forma más{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                rápida y segura
              </span>{" "}
              de cuidar tu salud.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg"
                asChild
              >
                <motion.a
                  href="/register"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center"
                >
                  Agendar Cita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-8 py-6 text-lg font-semibold rounded-xl border-2 border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700"
                asChild
              >
                <motion.a
                  href="/search"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center"
                >
                  <Search className="mr-2 w-5 h-5" />
                  Buscar Especialistas
                </motion.a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 pt-4"
            >
              <StatCard
                icon={Users}
                number="5K+"
                label="Especialistas"
                delay={0.8}
              />
              <StatCard
                icon={Stethoscope}
                number="50+"
                label="Especialidades"
                delay={1}
              />
              <StatCard
                icon={Users}
                number="98%"
                label="Satisfacción"
                delay={1.2}
              />
            </motion.div>
          </div>

          {/* Imagen y tarjetas flotantes */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[550px]"
            >
              {/* Imagen principal */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <Image
                  src="/assets/landing/img_profesionistas.png"
                  alt="Especialistas de salud"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent dark:from-black/60" />
              </div>

              {/* Tarjeta flotante 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -left-4 top-1/3 bg-white dark:bg-slate-800 rounded-2xl p-3 sm:p-4 shadow-2xl border-2 border-emerald-100 dark:border-emerald-900/50 w-[160px] sm:w-[200px]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 dark:bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                      Dra. María López
                    </p>
                    <p className="text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      Cardióloga
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-500 text-sm">★</span>
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        4.9
                      </span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400">
                        (234)
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tarjeta flotante 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="absolute -right-4 bottom-1/4 bg-white dark:bg-slate-800 rounded-2xl p-3 sm:p-4 shadow-2xl border-2 border-blue-100 dark:border-blue-900/50 w-[160px] sm:w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      Dr. Juan Pérez
                    </p>
                    <p className="text-[10px] sm:text-xs text-blue-600 dark:text-blue-400 font-medium">
                      Cirujano
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-500 text-sm">★</span>
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        5.0
                      </span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400">
                        (189)
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-3xl blur-3xl -z-10" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
