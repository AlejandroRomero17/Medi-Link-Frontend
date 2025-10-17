import { Heart } from "lucide-react";

const links = [
  {
    title: "Producto",
    items: ["Características", "Precios", "Seguridad", "API"],
  },
  {
    title: "Compañía",
    items: ["Nosotros", "Carreras", "Prensa", "Contacto"],
  },
  {
    title: "Soporte",
    items: [
      "Centro de ayuda",
      "Política de privacidad",
      "Términos de servicio",
      "Cumplimiento HIPAA",
    ],
  },
];

export const Footer = () => (
  <footer className="bg-gray-900 text-white dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-400 dark:text-blue-500" />
            <span className="text-xl font-bold">MediLink</span>
          </div>
          <p className="text-gray-400 dark:text-gray-300">
            Prevención de enfermedades crónicas mediante monitoreo inteligente y
            análisis con IA.
          </p>
        </div>

        {/* Enlaces */}
        {links.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="font-semibold text-white dark:text-gray-100">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400 dark:text-gray-300">
          &copy; {new Date().getFullYear()} MediLinkico. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  </footer>
);
