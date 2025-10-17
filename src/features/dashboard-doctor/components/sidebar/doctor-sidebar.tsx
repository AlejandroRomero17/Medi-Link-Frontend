"use client";

import { DoctorAvatar } from "@/components/dashboard/header/doctor-avatar";
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
import { motion } from "framer-motion";
import {
  Brain,
  Calendar,
  ChevronRight,
  Heart,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

// Animaciones corregidas con tipos explícitos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
    },
  },
} as const;

const logoVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 10,
      stiffness: 150,
    },
  },
} as const;

const navigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/doctor/dashboard",
    active: true,
    badge: null,
  },
  {
    title: "Mis Pacientes",
    icon: Users,
    href: "/doctor/patients",
    badge: "12",
  },
  {
    title: "Recomendaciones IA",
    icon: Brain,
    href: "/doctor/recommendations",
    badge: "Nuevo",
  },
  {
    title: "Citas",
    icon: Calendar,
    href: "/doctor/appointments",
    badge: "3",
  },
  {
    title: "Configuración",
    icon: Settings,
    href: "/doctor/settings",
    badge: null,
  },
];

export function DoctorSidebar() {
  return (
    <Sidebar className="border-r border-gray-200 bg-gradient-to-b from-white to-gray-50">
      {/* Header actualizado con nuevo texto */}
      <SidebarHeader className="border-b border-gray-200 p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="flex items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: -8, scale: 1.05 }}
            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-md"
          >
            <Heart className="h-5 w-5 text-white" />
          </motion.div>
          <div>
            <h2 className="font-bold text-gray-900 dark:text-white text-lg">
              MediLink
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              ECNT Platform
            </p>
          </div>
        </motion.div>
      </SidebarHeader>

      {/* Contenido con animaciones */}
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
                      "rounded-lg group",
                      item.active
                        ? "bg-blue-50 text-blue-600 shadow-sm"
                        : "text-gray-700"
                    )}
                  >
                    <a href={item.href}>
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={cn(
                            "p-1.5 rounded-md",
                            item.active
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-600 group-hover:bg-blue-100/50"
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
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                            )}
                          >
                            {item.badge}
                          </motion.span>
                        )}
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </motion.div>
            ))}
          </SidebarMenu>
        </motion.div>
      </SidebarContent>

      {/* Footer con DoctorAvatar */}
      <SidebarFooter className="border-t border-gray-200 p-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <DoctorAvatar
            name="Dra. Sarah Wilson"
            specialty="Cardióloga"
            doctorId="45892"
          />
        </motion.div>
      </SidebarFooter>
    </Sidebar>
  );
}
