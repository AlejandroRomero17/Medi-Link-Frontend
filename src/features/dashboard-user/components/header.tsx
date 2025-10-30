"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  PanelLeftIcon,
  Bell,
  User,
  Settings,
  LogOut,
  MapPin,
} from "lucide-react";
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
import { Badge } from "@/components/ui/badge";

export function UserHeader() {
  return (
    <header className="bg-card border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="lg:hidden">
            <PanelLeftIcon className="h-5 w-5" />
          </SidebarTrigger>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Encuentra tu Doctor Ideal
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Huauchinango, Puebla, México
              </p>
              <Badge variant="outline" className="ml-2 text-xs">
                12 doctores cerca
              </Badge>
            </div>
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
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center bg-destructive rounded-full text-[10px] text-white font-medium">
              3
            </span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-3 hover:bg-accent hover:text-accent-foreground"
                aria-label="Menú de usuario"
              >
                <Avatar className="h-8 w-8 border-2 border-blue-500">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Alejandro Romero"
                  />
                  <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 font-semibold">
                    AR
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:block text-sm font-medium">
                  Alejandro Romero
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-popover text-popover-foreground border"
            >
              <DropdownMenuLabel>
                <div>
                  <p className="font-semibold">Alejandro Romero</p>
                  <p className="text-xs text-muted-foreground font-normal">
                    alejandro@email.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="focus:bg-accent focus:text-accent-foreground">
                <User className="mr-2 h-4 w-4" />
                Mi Perfil
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
