"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { PanelLeftIcon, Bell, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/shared/ModeToggle";

export function DoctorHeader() {
  return (
    <header className="bg-card border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="lg:hidden">
            <PanelLeftIcon className="h-5 w-5" />
          </SidebarTrigger>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Panel Médico</h1>
            <p className="text-sm text-muted-foreground">
              Monitoreo de pacientes y gestión de tratamientos
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />

          <Button
            variant="ghost"
            size="sm"
            className="relative hover:bg-accent hover:text-accent-foreground"
            aria-label="Notificaciones"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs text-white"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-3 hover:bg-accent hover:text-accent-foreground"
                aria-label="Menú del doctor"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Dr. Sarah Wilson"
                  />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <span className="hidden md:block text-sm font-medium">
                  Dr. Sarah Wilson
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-popover text-popover-foreground border"
            >
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="focus:bg-accent focus:text-accent-foreground">
                <User className="mr-2 h-4 w-4" />
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-accent focus:text-accent-foreground">
                <Settings className="mr-2 h-4 w-4" />
                Configuración
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
