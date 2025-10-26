"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Heart,
  History,
  LayoutDashboard,
  Settings,
  TrendingUp,
} from "lucide-react";

// Animaciones corregidas con tipos explícitos
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const logoVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
  },
};

const navigationItems = [
  {
    title: "Panel",
    icon: LayoutDashboard,
    href: "/user",
    active: true,
  },
  {
    title: "Historial Médico",
    icon: History,
    href: "/user/history",
    badge: "Nuevo",
  },
  {
    title: "Recomendaciones",
    icon: TrendingUp,
    href: "/user/recommendations",
  },
  {
    title: "Citas",
    icon: Calendar,
    href: "/user/appointments",
    badge: "3",
  },
  {
    title: "Configuración",
    icon: Settings,
    href: "/user/settings",
  },
];

export function UserSidebar() {
  return (
    <Sidebar className="border-r border-gray-200 bg-gradient-to-b from-white to-gray-50 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      {/* Header con animación mejorada */}
      <SidebarHeader className="border-b border-gray-200 dark:border-slate-800 p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="flex items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: -8, scale: 1.05 }}
            className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 rounded-lg flex items-center justify-center shadow-md"
          >
            <Heart className="h-5 w-5 text-white" />
          </motion.div>
          <div>
            <h2 className="font-bold text-gray-900 dark:text-white text-lg">
              MediLink
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              Mi Salud
            </p>
          </div>
        </motion.div>
      </SidebarHeader>

      {/* Contenido con animaciones escalonadas */}
      <SidebarContent className="px-2 py-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <SidebarMenu>
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={itemVariants}
              >
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={item.active}
                    className={cn(
                      "w-full justify-between px-3 py-3 text-sm font-medium",
                      "transition-all duration-200 hover:bg-blue-50 hover:text-blue-600",
                      "dark:hover:bg-blue-950 dark:hover:text-blue-400",
                      "rounded-lg group",
                      item.active
                        ? "bg-blue-50 text-blue-600 shadow-sm dark:bg-blue-950 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300"
                    )}
                  >
                    <a href={item.href}>
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={cn(
                            "p-1.5 rounded-md",
                            item.active
                              ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                              : "bg-gray-100 text-gray-600 group-hover:bg-blue-100/50 dark:bg-slate-800 dark:text-gray-400 dark:group-hover:bg-blue-900/50"
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                        </motion.div>
                        <span>{item.title}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {item.badge && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className={cn(
                              "text-xs px-2 py-0.5 rounded-full",
                              item.active
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : "bg-gray-100 text-gray-800 dark:bg-slate-800 dark:text-gray-300"
                            )}
                          >
                            {item.badge}
                          </motion.span>
                        )}
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-600" />
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </motion.div>
            ))}
          </SidebarMenu>
        </motion.div>
      </SidebarContent>

      {/* Footer con animación mejorada */}
      <SidebarFooter className="border-t border-gray-200 dark:border-slate-800 p-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <Avatar className="h-10 w-10 border-2 border-blue-500 dark:border-blue-400">
            <AvatarImage src="/avatars/user.jpg" alt="Usuario" />
            <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
              John Doe
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              Paciente • Ver perfil
            </p>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-600 flex-shrink-0" />
        </motion.div>
      </SidebarFooter>
    </Sidebar>
  );
}
