import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura Sánchez",
    comment:
      "Encontré al cardiólogo perfecto para mi tratamiento. La plataforma es muy fácil de usar y los profesionales son excelentes.",
    rating: 5,
    image: "/assets/landing/happy-female-patient-portrait.jpg",
  },
  {
    name: "Roberto Díaz",
    comment:
      "Excelente servicio. Pude agendar mi cita con un psicólogo en minutos. Muy recomendado para encontrar especialistas de confianza.",
    rating: 5,
    image: "/assets/landing/happy-male-patient-portrait.jpg",
  },
  {
    name: "Patricia Morales",
    comment:
      "La mejor plataforma para encontrar pediatras. Mi hija recibió atención de primera calidad. Totalmente satisfecha con el servicio.",
    rating: 5,
    image: "/assets/landing/satisfied-female-patient-portrait.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Miles de personas confían en MediLink para su salud
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Paciente verificado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
