import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { METRIC_CARDS } from "@/lib/constants";

export const UserDashboardSection = () => (
  <section
    id="metricas"
    className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Tu Panel de Salud Personalizado
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Monitorea tus signos vitales en tiempo real y recibe análisis
          personalizados para prevenir enfermedades crónicas antes de que se
          desarrollen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRIC_CARDS.map((card) => (
          <Card
            key={card.title}
            className="border border-gray-200 dark:border-gray-800 hover:shadow-lg dark:hover:shadow-gray-800/50 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${card.iconBgClass}`}>
                  <card.icon className={`h-6 w-6 ${card.iconClass}`} />
                </div>
                <Badge variant="secondary" className={card.badgeClass}>
                  {card.status}
                </Badge>
              </div>
              <CardTitle className="text-lg text-gray-900 dark:text-gray-100 mt-3">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {card.value}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {card.description}
              </p>
              <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
                <div className={`h-2 rounded-full ${card.progressClass}`}></div>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                <span>Bajo</span>
                <span>Óptimo</span>
                <span>Alto</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
