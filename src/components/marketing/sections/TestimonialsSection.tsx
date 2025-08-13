import { TestimonialCard } from "@/components/marketing/ui/cards/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants/testimonials";

export const TestimonialsSection = () => (
  <section
    id="testimonios"
    className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-200"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Recomendado por profesionales de salud en México
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Descubre cómo CliniData está ayudando a médicos y pacientes a
          prevenir enfermedades crónicas en nuestro país.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);
