import { Search, UserCheck, Calendar } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Busca tu especialidad",
    description:
      "Explora nuestra amplia red de profesionales certificados por especialidad y ubicación.",
  },
  {
    icon: UserCheck,
    title: "Elige tu profesional",
    description:
      "Revisa perfiles, calificaciones y experiencia para encontrar al especialista ideal.",
  },
  {
    icon: Calendar,
    title: "Agenda tu cita fácilmente",
    description:
      "Reserva tu consulta en línea de forma rápida y segura en minutos.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 md:py-28 bg-muted/40 dark:bg-muted/10 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tres simples pasos para conectar con tu especialista.
          </p>
        </div>

        {/* Grid de pasos */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center bg-card/60 dark:bg-card/30 border border-border rounded-2xl p-8 shadow-sm hover:shadow-glow transition-all duration-300"
            >
              {/* Círculo principal con ícono */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-lg">
                <step.icon className="h-10 w-10" />
              </div>

              {/* Número decorativo */}
              <div className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                {index + 1}
              </div>

              {/* Texto */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
