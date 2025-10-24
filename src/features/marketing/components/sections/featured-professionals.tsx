"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    image: "/assets/landing/female-pediatrician-professional-portrait.jpg",
  },
];

export function FeaturedProfessionals() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Blob decorativo */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-950 rounded-full border border-blue-300 dark:border-blue-700 mb-6">
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Los Mejores Profesionales
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Especialistas{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              destacados
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Profesionales verificados con las mejores calificaciones
          </p>
        </motion.div>

        {/* Grid de profesionales */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {professionals.map((professional, index) => (
            <motion.div
              key={professional.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 group h-full flex flex-col">
                {/* Imagen */}
                <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-slate-900">
                  <Image
                    src={professional.image}
                    alt={professional.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge de rating flotante */}
                  <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-bold text-sm text-gray-900 dark:text-white">
                      {professional.rating}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <CardContent className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {professional.name}
                    </h3>
                    <Badge className="bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900 border border-emerald-300 dark:border-emerald-700">
                      {professional.specialty}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {professional.rating}
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">
                      ({professional.reviews} reseñas)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-auto">
                    <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{professional.location}</span>
                  </div>
                </CardContent>

                {/* Footer con botón */}
                <CardFooter className="p-5 sm:p-6 pt-0">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold">
                    Ver perfil completo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 font-semibold text-lg"
          >
            Ver todos los profesionales
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
