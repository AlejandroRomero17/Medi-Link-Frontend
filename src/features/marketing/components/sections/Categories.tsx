import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Brain,
  Stethoscope,
  Baby,
  Sparkles,
  Activity,
  Eye,
  Pill,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    name: "Cardiología",
    icon: Heart,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    bgGradient: "from-pink-500/10 via-rose-500/10 to-red-500/10",
    iconColor: "text-pink-500",
    shadow: "shadow-pink-500/25",
  },
  {
    name: "Psicología",
    icon: Brain,
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    bgGradient: "from-purple-500/10 via-violet-500/10 to-indigo-500/10",
    iconColor: "text-purple-500",
    shadow: "shadow-purple-500/25",
  },
  {
    name: "Medicina General",
    icon: Stethoscope,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    bgGradient: "from-indigo-500/10 via-blue-500/10 to-cyan-500/10",
    iconColor: "text-indigo-500",
    shadow: "shadow-indigo-500/25",
  },
  {
    name: "Pediatría",
    icon: Baby,
    gradient: "from-pink-500 via-fuchsia-500 to-purple-500",
    bgGradient: "from-pink-500/10 via-fuchsia-500/10 to-purple-500/10",
    iconColor: "text-fuchsia-500",
    shadow: "shadow-pink-500/25",
  },
  {
    name: "Dermatología",
    icon: Sparkles,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    bgGradient: "from-amber-500/10 via-orange-500/10 to-rose-500/10",
    iconColor: "text-orange-500",
    shadow: "shadow-amber-500/25",
  },
  {
    name: "Neurología",
    icon: Activity,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    bgGradient: "from-indigo-500/10 via-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500",
    shadow: "shadow-indigo-500/25",
  },
  {
    name: "Oftalmología",
    icon: Eye,
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    bgGradient: "from-cyan-500/10 via-teal-500/10 to-emerald-500/10",
    iconColor: "text-cyan-500",
    shadow: "shadow-cyan-500/25",
  },
  {
    name: "Odontología",
    icon: Pill,
    gradient: "from-lime-500 via-green-500 to-emerald-500",
    bgGradient: "from-lime-500/10 via-green-500/10 to-emerald-500/10",
    iconColor: "text-lime-500",
    shadow: "shadow-lime-500/25",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function Categories() {
  return (
    <section
      id="especialistas"
      className="py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent dark:via-indigo-950/10 pointer-events-none" />

      {/* Blob decorativo */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-400/10 via-purple-400/10 to-pink-400/10 dark:from-indigo-600/5 dark:via-purple-600/5 dark:to-pink-600/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-full border border-indigo-300/50 dark:border-indigo-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Especialidades Médicas
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
            Explora por{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              especialidad
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Encuentra al profesional de la salud que necesitas en minutos
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group relative overflow-hidden border-2 border-gray-200/50 dark:border-gray-800/50 hover:border-transparent transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-full">
                {/* Gradiente de fondo en hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Borde gradiente en hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl ${category.shadow}`}
                />

                <CardContent className="relative flex flex-col items-center gap-4 p-6">
                  {/* Icono con gradiente */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                    />
                    <div
                      className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${category.bgGradient} group-hover:scale-110 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-transparent`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}
                      />
                      <category.icon
                        className={`h-10 w-10 ${category.iconColor} dark:${category.iconColor} transition-all duration-300 group-hover:scale-110 relative z-10`}
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 dark:group-hover:from-indigo-400 dark:group-hover:via-purple-400 dark:group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {category.name}
                  </h3>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full relative overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-transparent hover:text-white transition-all duration-300 font-semibold group/btn"
                  >
                    <span className="relative z-10">Ver especialistas</span>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}
                    />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-indigo-200 dark:border-indigo-500/30 hover:border-indigo-400 dark:hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 font-bold text-lg group shadow-lg"
          >
            <Sparkles className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Ver todas las especialidades
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
