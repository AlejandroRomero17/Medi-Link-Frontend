"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Maximize2, Navigation, Loader2 } from "lucide-react";

// Importar Leaflet dinámicamente para evitar errores de SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Tipos
interface DoctorLocation {
  id: number;
  name: string;
  specialty: string;
  lat: number;
  lng: number;
  rating: number;
  available: boolean;
  consultationFee: string;
  address: string;
}

// Coordenadas de Huauchinango, Puebla
const HUAUCHINANGO_CENTER = {
  lat: 20.1797,
  lng: -98.0517,
};

// Datos de ejemplo con coordenadas reales cerca de Huauchinango
const doctorLocations: DoctorLocation[] = [
  {
    id: 1,
    name: "Dra. María González",
    specialty: "Cardiología",
    lat: 20.1807,
    lng: -98.0527,
    rating: 4.8,
    available: true,
    consultationFee: "$800",
    address: "Av. Principal 123",
  },
  {
    id: 2,
    name: "Dr. Carlos Rodríguez",
    specialty: "Pediatría",
    lat: 20.1787,
    lng: -98.0507,
    rating: 4.9,
    available: true,
    consultationFee: "$700",
    address: "Calle Juárez 456",
  },
  {
    id: 3,
    name: "Dra. Ana Martínez",
    specialty: "Dermatología",
    lat: 20.1817,
    lng: -98.0537,
    rating: 4.7,
    available: false,
    consultationFee: "$900",
    address: "Col. Centro 789",
  },
  {
    id: 4,
    name: "Dr. Luis López",
    specialty: "Medicina General",
    lat: 20.1777,
    lng: -98.0497,
    rating: 4.6,
    available: true,
    consultationFee: "$600",
    address: "Plaza Principal 321",
  },
];

export function LeafletMap() {
  const [isClient, setIsClient] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorLocation | null>(
    null
  );
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    setIsClient(true);

    // Obtener ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          // Si falla, usar ubicación por defecto
          setUserLocation(HUAUCHINANGO_CENTER);
        }
      );
    } else {
      setUserLocation(HUAUCHINANGO_CENTER);
    }
  }, []);

  const handleCenterMap = () => {
    if (userLocation) {
      // Aquí puedes implementar la lógica para centrar el mapa
      console.log("Centrar en:", userLocation);
    }
  };

  if (!isClient || !userLocation) {
    return (
      <Card className="h-[500px] flex items-center justify-center">
        <div className="text-center space-y-2">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
          <p className="text-gray-600 dark:text-gray-400">Cargando mapa...</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      {/* Controles del mapa */}
      <div className="absolute top-4 right-4 z-[1000] space-y-2">
        <Button
          size="icon"
          variant="secondary"
          className="bg-white dark:bg-slate-800 shadow-lg"
          onClick={handleCenterMap}
        >
          <Navigation className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="bg-white dark:bg-slate-800 shadow-lg"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Indicador de doctores disponibles */}
      <div className="absolute top-4 left-4 z-[1000]">
        <Badge className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-lg">
          {doctorLocations.filter((d) => d.available).length} doctores
          disponibles
        </Badge>
      </div>

      {/* Mapa de Leaflet */}
      <div className="h-[500px] w-full">
        <MapContainer
          center={[userLocation.lat, userLocation.lng]}
          zoom={14}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marcador de usuario */}
          {typeof window !== "undefined" && window.L && (
            <Marker
              position={[userLocation.lat, userLocation.lng]}
              icon={
                new window.L.Icon({
                  iconUrl:
                    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
                  shadowUrl:
                    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41],
                })
              }
            >
              <Popup>
                <div className="p-2">
                  <p className="font-semibold">Tu ubicación</p>
                  <p className="text-sm text-gray-600">Huauchinango, Puebla</p>
                </div>
              </Popup>
            </Marker>
          )}

          {/* Marcadores de doctores */}
          {typeof window !== "undefined" &&
            window.L &&
            doctorLocations.map((doctor) => (
              <Marker
                key={doctor.id}
                position={[doctor.lat, doctor.lng]}
                icon={
                  new window.L.Icon({
                    iconUrl: doctor.available
                      ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
                      : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
                    shadowUrl:
                      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41],
                  })
                }
                eventHandlers={{
                  click: () => setSelectedDoctor(doctor),
                }}
              >
                <Popup>
                  <div className="p-2 min-w-[200px]">
                    <h3 className="font-semibold text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600">{doctor.specialty}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <span className="text-yellow-500">★ {doctor.rating}</span>
                      <span className="text-blue-600 font-semibold">
                        {doctor.consultationFee}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {doctor.address}
                    </p>
                    <Button
                      size="sm"
                      className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
                    >
                      Agendar Cita
                    </Button>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>

      {/* Información del doctor seleccionado */}
      {selectedDoctor && (
        <div className="absolute bottom-4 left-4 right-4 z-[1000]">
          <Card className="p-4 bg-white dark:bg-slate-800 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {selectedDoctor.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedDoctor.specialty}
                </p>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Ver Perfil
              </Button>
            </div>
          </Card>
        </div>
      )}
    </Card>
  );
}
