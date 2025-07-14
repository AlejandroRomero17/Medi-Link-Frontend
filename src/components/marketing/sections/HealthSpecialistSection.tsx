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
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          Panel de Profesionales de la Salud
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Monitorea múltiples pacientes con alertas impulsadas por IA y análisis
          integrales para proporcionar atención proactiva y prevenir
          enfermedades crónicas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-blue-200 dark:border-blue-800/50 bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-50">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Resumen de Pacientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {PATIENT_ALERTS.map((alert, index) => (
                <PatientAlertCard key={index} {...alert} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 dark:border-green-800/50 bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-50">
              <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
              Información de IA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-300 mb-2`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
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
