"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Clock, Phone, Calendar, List, Map } from "lucide-react";
import { motion } from "framer-motion";
import { LeafletMap } from "./leaflet-map";

// Datos de ejemplo - Más tarde los traerás de tu API
const nearbyDoctors = [
  {
    id: 1,
    name: "Dra. María González",
    specialty: "Cardiología",
    avatar: "/avatars/doctor1.jpg",
    rating: 4.8,
    reviews: 124,
    distance: "1.2 km",
    consultationFee: "$800",
    available: true,
    nextAvailable: "Hoy 15:00",
    address: "Av. Principal 123",
    phone: "771-123-4567",
  },
  {
    id: 2,
    name: "Dr. Carlos Rodríguez",
    specialty: "Pediatría",
    avatar: "/avatars/doctor2.jpg",
    rating: 4.9,
    reviews: 201,
    distance: "2.5 km",
    consultationFee: "$700",
    available: true,
    nextAvailable: "Mañana 10:00",
    address: "Calle Juárez 456",
    phone: "771-123-4568",
  },
  {
    id: 3,
    name: "Dra. Ana Martínez",
    specialty: "Dermatología",
    avatar: "/avatars/doctor3.jpg",
    rating: 4.7,
    reviews: 89,
    distance: "3.1 km",
    consultationFee: "$900",
    available: false,
    nextAvailable: "Lunes 09:00",
    address: "Col. Centro 789",
    phone: "771-123-4569",
  },
  {
    id: 4,
    name: "Dr. Luis López",
    specialty: "Medicina General",
    avatar: "/avatars/doctor4.jpg",
    rating: 4.6,
    reviews: 156,
    distance: "4.2 km",
    consultationFee: "$600",
    available: true,
    nextAvailable: "Hoy 16:30",
    address: "Plaza Principal 321",
    phone: "771-123-4570",
  },
];

export function NearbyDoctorsMap() {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");

  return (
    <Card className="overflow-hidden">
      {/* Tabs para cambiar entre Mapa y Lista */}
      <div className="border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Doctores cerca de ti
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {nearbyDoctors.filter((d) => d.available).length} disponibles
              ahora
            </p>
          </div>

          <Tabs
            value={viewMode}
            onValueChange={(v) => setViewMode(v as "map" | "list")}
          >
            <TabsList className="grid w-[200px] grid-cols-2">
              <TabsTrigger value="map" className="gap-2">
                <Map className="h-4 w-4" />
                Mapa
              </TabsTrigger>
              <TabsTrigger value="list" className="gap-2">
                <List className="h-4 w-4" />
                Lista
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Contenido según el modo de vista */}
      {viewMode === "map" ? (
        <LeafletMap />
      ) : (
        <div className="p-6 space-y-4">
          {nearbyDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex gap-4">
                  {/* Avatar del doctor */}
                  <Avatar className="h-16 w-16 border-2 border-blue-500">
                    <AvatarImage src={doctor.avatar} alt={doctor.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  {/* Información del doctor */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {doctor.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {doctor.specialty}
                        </p>
                      </div>
                      {doctor.available && (
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          Disponible
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{doctor.rating}</span>
                        <span>({doctor.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{doctor.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{doctor.nextAvailable}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {doctor.address}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {doctor.consultationFee}
                      </span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4 mr-2" />
                          Llamar
                        </Button>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          Agendar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </Card>
  );
}
