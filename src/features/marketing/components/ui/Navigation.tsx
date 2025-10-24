"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/shared/ModeToggle";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Barra de navegación principal */}
      <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-3 group"
            >
              <Activity className="h-8 w-8 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Medi
                <span className="text-emerald-600 dark:text-emerald-400">
                  Link
                </span>
              </span>
            </button>

            {/* Menú desktop (oculto en móvil) */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks scrollToSection={scrollToSection} />
              <div className="flex items-center space-x-4 ml-4 border-l border-gray-300 dark:border-slate-700 pl-6">
                <div className="[&_button]:text-gray-700 dark:[&_button]:text-gray-300">
                  <ModeToggle />
                </div>
                <LoginButton />
              </div>
            </div>

            {/* Botón hamburguesa (solo móvil) */}
            <div className="flex items-center gap-2 md:hidden">
              <ModeToggle />
              <button
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menú móvil (aparece como sidebar) */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-72 bg-white dark:bg-slate-900 shadow-2xl transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden border-l border-gray-200 dark:border-slate-800`}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú móvil */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-slate-800">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Menú
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Links del menú móvil */}
          <div className="flex flex-col p-6 space-y-2">
            <NavLinks vertical scrollToSection={scrollToSection} />
          </div>

          {/* Footer del menú móvil */}
          <div className="mt-auto p-6 border-t border-gray-200 dark:border-slate-800">
            <LoginButton className="w-full" />
          </div>
        </div>
      </div>

      {/* Overlay (solo móvil) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

// Componente reutilizable para los links
const NavLinks = ({
  vertical = false,
  scrollToSection,
}: {
  vertical?: boolean;
  scrollToSection: (sectionId: string) => void;
}) => {
  const links = [
    { href: "especialistas", label: "Especialistas" },
    { href: "como-funciona", label: "Cómo Funciona" },
    { href: "testimonios", label: "Testimonios" },
    { href: "profesionales", label: "Para Profesionales" },
  ];

  return (
    <>
      {links.map((link) => (
        <button
          key={link.href}
          onClick={() => scrollToSection(link.href)}
          className={`${
            vertical
              ? "text-left w-full px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400"
              : "text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
          } transition-colors duration-200 font-medium`}
        >
          {link.label}
        </button>
      ))}
    </>
  );
};

// Componente reutilizable para el botón de login
const LoginButton = ({ className = "" }: { className?: string }) => (
  <Button
    variant="outline"
    className={`border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-200 font-semibold ${className}`}
    asChild
  >
    <a href="/login">Iniciar Sesión</a>
  </Button>
);
