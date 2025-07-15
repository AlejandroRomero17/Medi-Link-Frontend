import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Shield } from "lucide-react";
import { PatientAlertCard } from "@/components/marketing/ui/cards/PatientAlertCard";
import { PATIENT_ALERTS } from "@/lib/constants/patient-alerts";

const stats = [
  { value: "94%", label: "Tasa de detección temprana", color: "green" },
  { value: "127", label: "Pacientes monitoreados", color: "blue" },
  { value: "23", label: "Alertas esta semana", color: "purple" },
];

export const HealthSpecialistSection = () => (
  <section
    className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-200"
    data-aos="fade-up"
  >
    <div className="max-w-7xl mx-auto">
      <div
        className="text-center mb-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Panel de Profesionales de la Salud
        </h2>
        <p
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Monitorea múltiples pacientes con alertas impulsadas por IA y análisis
          integrales para proporcionar atención proactiva y prevenir
          enfermedades crónicas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tarjeta principal (izquierda) */}
        <Card
          className="lg:col-span-2 border-blue-200 dark:border-blue-800/50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-none"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          <CardHeader>
            <CardTitle
              className="flex items-center gap-2 text-gray-900 dark:text-white"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <Users
                className="h-5 w-5 text-blue-600 dark:text-blue-400"
                data-aos="zoom-in"
                data-aos-delay="350"
              />
              Resumen de Pacientes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-800 dark:text-gray-200">
            <div className="space-y-4">
              {PATIENT_ALERTS.map((alert, index) => (
                <PatientAlertCard
                  key={index}
                  {...alert}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tarjeta de estadísticas (derecha) */}
        <Card
          className="border-green-200 dark:border-green-800/50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-none"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <CardHeader>
            <CardTitle
              className="flex items-center gap-2 text-gray-900 dark:text-white"
              data-aos="fade-down"
              data-aos-delay="350"
            >
              <Shield
                className="h-5 w-5 text-green-600 dark:text-green-400"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
              Información de IA
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-800 dark:text-gray-200">
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100}
                >
                  <div
                    className={`text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
