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

const imageVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
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
    className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-indigo-200/30 dark:border-indigo-500/20 hover:border-indigo-300 dark:hover:border-indigo-400/40 transition-all duration-300"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          {number}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">{label}</p>
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
      className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50/50 via-white to-indigo-50/50 dark:from-black dark:via-gray-950 dark:to-indigo-950/30 overflow-hidden"
    >
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob gradiente índigo-púrpura */}
        <motion.div
          className="absolute top-20 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400/40 via-purple-400/30 to-pink-400/20 dark:from-indigo-600/30 dark:via-purple-600/20 dark:to-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blob gradiente rosa-naranja */}
        <motion.div
          className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/40 via-orange-400/30 to-lime-400/20 dark:from-pink-600/30 dark:via-orange-600/20 dark:to-lime-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Grid pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f112_1px,transparent_1px),linear-gradient(to_bottom,#6366f112_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#818cf815_1px,transparent_1px),linear-gradient(to_bottom,#818cf815_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Efecto de luz superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-200/30 via-transparent to-transparent dark:from-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Contenido de texto */}
          <div className="text-left space-y-8 order-2 lg:order-1">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-full border border-indigo-300/50 dark:border-indigo-500/30 shadow-lg shadow-indigo-500/10"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse shadow-lg shadow-indigo-500/50" />
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Plataforma de Contratación Médica
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Conecta con los{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  mejores profesionistas
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-indigo-500/50"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>{" "}
              de salud
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl"
            >
              Encuentra y contrata médicos, enfermeras, terapeutas y
              especialistas verificados. La forma más{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                rápida y segura
              </span>{" "}
              de construir tu equipo de salud.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 dark:hover:from-indigo-600 dark:hover:via-purple-600 dark:hover:to-pink-600 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-2xl shadow-indigo-500/40 dark:shadow-indigo-400/30 transition-all duration-300 overflow-hidden border-0"
                asChild
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center"
                >
                  Contratar Profesionistas
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-900 dark:text-white text-lg font-bold rounded-xl border-2 border-indigo-200 dark:border-indigo-500/30 hover:border-indigo-400 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all duration-300 shadow-lg"
                asChild
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center"
                >
                  <Search className="mr-2 w-5 h-5" />
                  Buscar Profesionales
                </motion.div>
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
                label="Profesionistas"
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
            variants={imageVariants}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative w-full max-w-[220px] sm:max-w-[300px] md:max-w-md lg:max-w-[600px]"
            >
              {/* Imagen principal */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 dark:border-gray-800/80 backdrop-blur-sm">
                <Image
                  src="/assets/landing/img_profesionistas.png"
                  alt="Profesionistas de salud"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-purple-900/20 to-transparent dark:from-black/80 dark:via-indigo-950/40" />
              </div>

              {/* Tarjeta flotante 1 - Índigo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -left-2 sm:-left-4 top-1/4 lg:top-1/3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl p-3 sm:p-4 shadow-2xl border border-indigo-200/50 dark:border-indigo-500/30 w-[180px] sm:w-[200px] hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                    <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                      Dra. María López
                    </p>
                    <p className="text-[10px] sm:text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                      Cardióloga
                    </p>
                    <div className="flex items-center gap-1">
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

              {/* Tarjeta flotante 2 - Rosa/Púrpura */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="absolute -right-4 bottom-1/4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-pink-200/50 dark:border-pink-500/30 max-w-[200px] hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-orange-500 to-lime-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      Dr. Juan Pérez
                    </p>
                    <p className="text-xs text-pink-600 dark:text-pink-400 font-medium">
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

              {/* Glow effect con nuevos colores */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 via-purple-400/20 to-pink-400/30 dark:from-indigo-600/20 dark:via-purple-600/10 dark:to-pink-600/20 rounded-3xl blur-3xl -z-10 animate-pulse" />

              {/* Ring decorativo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 rounded-3xl opacity-20 dark:opacity-10 blur-2xl -z-20" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
