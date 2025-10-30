// Declaración de tipos para Leaflet en window
import * as L from "leaflet";

declare global {
  interface Window {
    L: typeof L;
  }
}

export {};
