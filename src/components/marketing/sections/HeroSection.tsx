import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Animaciones configuradas con tipos correctos
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const backgroundVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 0.8,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

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
      className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-400 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[110px] opacity-80 dark:opacity-70 animate-blob"
          initial="hidden"
          animate={controls}
          variants={backgroundVariants}
        />

        <motion.div
          className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-400 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[110px] opacity-80 dark:opacity-70 animate-blob animation-delay-2000"
          initial="hidden"
          animate={controls}
          variants={backgroundVariants}
          custom={0.5} // Delay personalizado
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/50 via-white/20 to-transparent dark:hidden" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center"
        >
          {/* Contenido de texto */}
          <div className="text-left order-2 lg:order-1">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
            >
              Previene enfermedades crónicas con{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
                monitoreo inteligente
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-10 leading-relaxed sm:text-2xl"
            >
              Potencia tu salud con tecnología predictiva. Detectamos señales
              tempranas de diabetes, hipertensión y riesgos cardiovasculares.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-2xl md:text-xl transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-lg shadow-emerald-500/20 dark:shadow-emerald-400/20"
                asChild
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Comenzar Monitoreo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-gray-800 px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-2xl md:text-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  Ver Demo
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Imagen */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[220px] sm:max-w-[300px] md:max-w-md lg:max-w-[600px]">
              <div className="relative">
                <Image
                  src="/assets/landing/smartwatch.png"
                  alt="Smartwatch de monitoreo de salud"
                  width={600}
                  height={600}
                  className="object-contain z-10 relative animate-float"
                  priority
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-emerald-400/30 via-transparent to-transparent dark:from-emerald-400/20 rounded-full blur-xl -z-10 animate-pulse" />
              </div>
              <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 lg:-inset-12 bg-gradient-to-br from-emerald-300/20 to-blue-300/20 dark:from-emerald-400/10 dark:to-blue-400/10 rounded-full blur-xl sm:blur-2xl -z-20" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
