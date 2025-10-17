// src/features/marketing/components/sections/professional-cta.tsx

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, TrendingUp } from "lucide-react";

export function ProfessionalCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-6">
              ¿Eres profesionista de la salud?
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty mb-8">
              Únete a MediLink y haz crecer tu consulta. Conecta con miles de
              pacientes que buscan tus servicios profesionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" variant="secondary" className="gap-2">
                Registrarme como profesional
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Más información
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div>
                <Users className="h-8 w-8 mb-2 text-primary-foreground/90" />
                <p className="text-2xl font-bold">10,000+</p>
                <p className="text-sm text-primary-foreground/80">
                  Pacientes activos
                </p>
              </div>
              <div>
                <Calendar className="h-8 w-8 mb-2 text-primary-foreground/90" />
                <p className="text-2xl font-bold">50,000+</p>
                <p className="text-sm text-primary-foreground/80">
                  Citas agendadas
                </p>
              </div>
              <div>
                <TrendingUp className="h-8 w-8 mb-2 text-primary-foreground/90" />
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-primary-foreground/80">
                  Satisfacción
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img
              src="/assets/landing/healthcare-professional-using-tablet-modern-clinic.jpg"
              alt="Profesional de la salud"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
