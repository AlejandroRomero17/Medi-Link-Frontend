import { ArrowRight } from "lucide-react";
import { DATA_FLOW_STEPS } from "@/lib/constants/data-flow-steps";

export const DataFlowSection = () => (
  <section
    id="como-funciona"
    className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-200"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          Flujo Seguro de tus Datos
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Desde tu Galaxy Watch 7 hasta análisis con IA, tus datos siguen un
          camino cifrado para ofrecerte recomendaciones personalizadas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-center">
        {DATA_FLOW_STEPS.map((step, index) => (
          <div key={`paso-${index}`} className="contents">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div
                className={`w-16 h-16 bg-${step.color}-100 dark:bg-${step.color}-900/20 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <step.icon
                  className={`h-8 w-8 text-${step.color}-600 dark:text-${step.color}-400`}
                />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>

            {index < DATA_FLOW_STEPS.length - 1 && (
              <div className="hidden lg:flex justify-center">
                <ArrowRight className="h-6 w-6 text-gray-400 dark:text-gray-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
