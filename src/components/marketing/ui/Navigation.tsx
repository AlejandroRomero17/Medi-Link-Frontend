"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/shared/ModeToggle";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Barra de navegación principal */}
      <nav className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Activity className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300">
                CliniData
              </span>
            </div>

            {/* Menú desktop (oculto en móvil) */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLinks />
              <div className="flex items-center space-x-4 ml-4">
                <ModeToggle />
                <LoginButton />
              </div>
            </div>

            {/* Botón hamburguesa (solo móvil) */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil (aparece como sidebar) */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white dark:bg-gray-950 shadow-lg transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <NavLinks vertical />
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <ModeToggle />
              <LoginButton className="w-full mt-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay (solo móvil) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

// Componente reutilizable para los links
const NavLinks = ({ vertical = false }: { vertical?: boolean }) => (
  <>
    <a
      href="#features"
      className={`${
        vertical
          ? "text-lg py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
          : "text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
      } transition-colors duration-200 font-medium`}
    >
      Características
    </a>
    <a
      href="#how-it-works"
      className={`${
        vertical
          ? "text-lg py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
          : "text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
      } transition-colors duration-200 font-medium`}
    >
      Cómo Funciona
    </a>
    <a
      href="#testimonials"
      className={`${
        vertical
          ? "text-lg py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
          : "text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
      } transition-colors duration-200 font-medium`}
    >
      Testimonios
    </a>
  </>
);

// Componente reutilizable para el botón de login
const LoginButton = ({ className = "" }: { className?: string }) => (
  <Button
    variant="outline"
    className={`border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-gray-800 transition-colors duration-200 ${className}`}
  >
    Iniciar Sesión
  </Button>
);
