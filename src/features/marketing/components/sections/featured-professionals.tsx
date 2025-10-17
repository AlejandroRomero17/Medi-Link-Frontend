import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

const professionals = [
  {
    name: "Dra. María González",
    specialty: "Cardiología",
    rating: 4.9,
    reviews: 127,
    location: "Ciudad de México",
    image: "/assets/landing/female-doctor-portrait.png",
  },
  {
    name: "Dr. Carlos Ramírez",
    specialty: "Psicología",
    rating: 4.8,
    reviews: 94,
    location: "Guadalajara",
    image: "/assets/landing/male-psychologist-professional-portrait.jpg",
  },
  {
    name: "Dra. Ana Martínez",
    specialty: "Pediatría",
    rating: 5.0,
    reviews: 156,
    location: "Monterrey",
    image:
      "/assets/landing/female-pediatrician-professional-portrait.jpg",
  },
];

export function FeaturedProfessionals() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
            Profesionales recomendados
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Especialistas destacados con las mejores calificaciones
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {professionals.map((professional) => (
            <Card
              key={professional.name}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={professional.image || "/placeholder.svg"}
                  alt={professional.name}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold mb-1">
                    {professional.name}
                  </h3>
                  <Badge variant="secondary">{professional.specialty}</Badge>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{professional.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({professional.reviews} reseñas)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{professional.location}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">Ver perfil</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
