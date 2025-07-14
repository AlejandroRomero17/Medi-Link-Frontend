import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-800 dark:to-green-800 transition-colors duration-300">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Empieza a prevenir enfermedades crónicas hoy
      </h2>
      <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
        Únete a miles de usuarios que están cuidando su salud con monitoreo
        impulsado por inteligencia artificial.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-white text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-200 px-8 py-3 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Comenzar monitoreo
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white/20 dark:hover:bg-white/30 px-8 py-3 bg-transparent backdrop-blur-sm transition-all duration-200"
        >
          Contactar a ventas
        </Button>
      </div>
    </div>
  </section>
);
