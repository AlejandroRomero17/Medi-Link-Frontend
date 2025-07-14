import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => (
  <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
    {/* Efectos de fondo - Versión optimizada */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Efecto verde - visible en ambos modos */}
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-400 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[110px] opacity-80 dark:opacity-70 animate-blob"></div>

      {/* Efecto azul - visible en ambos modos */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-400 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[110px] opacity-80 dark:opacity-70 animate-blob animation-delay-2000"></div>

      {/* Refuerzo para light mode */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/50 via-white/20 to-transparent dark:hidden"></div>
    </div>

    <div className="max-w-7xl mx-auto w-full relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="text-left order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Previene enfermedades crónicas con{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
              monitoreo inteligente
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Potencia tu salud con tecnología predictiva. Detectamos señales
            tempranas de diabetes, hipertensión y riesgos cardiovasculares antes
            de que se conviertan en problemas graves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-lg shadow-emerald-500/20 dark:shadow-emerald-400/20"
            >
              Comenzar Monitoreo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-gray-800 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              Ver Demo
            </Button>
          </div>
        </div>

        {/* Imagen del smartwatch */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-none">
            <div className="relative">
              <Image
                src="/assets/landing/smartwatch.png"
                alt="Smartwatch de monitoreo de salud"
                width={600}
                height={600}
                className="object-contain z-10 relative animate-float"
                priority
              />
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-emerald-400/30 via-transparent to-transparent dark:from-emerald-400/20 rounded-full blur-xl -z-10 animate-pulse"></div>
            </div>
            {/* Halo exterior */}
            <div className="absolute -inset-12 bg-gradient-to-br from-emerald-300/20 to-blue-300/20 dark:from-emerald-400/10 dark:to-blue-400/10 rounded-full blur-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
