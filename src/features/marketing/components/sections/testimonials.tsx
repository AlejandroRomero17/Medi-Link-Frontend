"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <section
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden"
      id="testimonios"
    >
      {/* Blob decorativo */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />

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
            <Quote className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Testimonios Reales
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              pacientes
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Miles de personas confían en nosotros para su salud
          </p>
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-xl h-full">
                <CardContent className="p-5 sm:p-6 flex flex-col h-full">
                  {/* Icono de comillas decorativo */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-emerald-500 dark:text-emerald-400 opacity-50" />
                  </div>

                  {/* Estrellas */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Comentario */}
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
                    "{testimonial.comment}"
                  </p>

                  {/* Autor */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-slate-700">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200 dark:bg-slate-700 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        Paciente verificado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Estadística adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-gray-50 dark:bg-slate-800 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 border-2 border-gray-200 dark:border-slate-700">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                5,000+
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pacientes satisfechos
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-slate-700" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
                4.9/5
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Calificación promedio
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-slate-700" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                98%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tasa de satisfacción
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
