import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react"; // Cambié el icono a uno más relacionado con salud predictiva
import { ModeToggle } from "@/components/shared/ModeToggle";

export const Navigation = () => (
  <nav className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <Activity className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" />
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300">
            PredictHealth
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors duration-200 font-medium"
          >
            Características
          </a>
          <a
            href="#how-it-works"
            className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors duration-200 font-medium"
          >
            Cómo Funciona
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors duration-200 font-medium"
          >
            Testimonios
          </a>

          <div className="flex items-center space-x-4 ml-4">
            <ModeToggle />
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
