// src/services/patient-service.ts
import { apiClient } from "@/lib/api/client";
import {
  PacienteCreate,
  PacienteResponse,
  PacienteCompleto,
} from "@/types/api.types";

// Nota: Los endpoints de pacientes no están en tu router actual
// Si los agregas más tarde, ajusta estas rutas
const PATIENT_ENDPOINTS = {
  CREATE: "/api/pacientes",
  LIST: "/api/pacientes",
  GET: (id: string) => `/api/pacientes/${id}`,
  BY_USER: (userId: string) => `/api/pacientes/usuario/${userId}`,
  UPDATE: (id: string) => `/api/pacientes/${id}`,
};

export const patientService = {
  /**
   * Create patient profile
   */
  async create(data: PacienteCreate): Promise<PacienteResponse> {
    return await apiClient.post<PacienteResponse>(
      PATIENT_ENDPOINTS.CREATE,
      data
    );
  },

  /**
   * Get all patients
   */
  async getAll(params?: {
    skip?: number;
    limit?: number;
  }): Promise<PacienteCompleto[]> {
    const queryParams = new URLSearchParams();

    if (params?.skip !== undefined) {
      queryParams.append("skip", params.skip.toString());
    }
    if (params?.limit !== undefined) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${PATIENT_ENDPOINTS.LIST}${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;
    return await apiClient.get<PacienteCompleto[]>(url);
  },

  /**
   * Get patient by ID
   */
  async getById(id: number): Promise<PacienteCompleto> {
    return await apiClient.get<PacienteCompleto>(
      PATIENT_ENDPOINTS.GET(id.toString())
    );
  },

  /**
   * Get patient by user ID
   */
  async getByUserId(userId: number): Promise<PacienteCompleto> {
    return await apiClient.get<PacienteCompleto>(
      PATIENT_ENDPOINTS.BY_USER(userId.toString())
    );
  },

  /**
   * Update patient profile
   */
  async update(
    id: number,
    data: Partial<PacienteCreate>
  ): Promise<PacienteResponse> {
    return await apiClient.put<PacienteResponse>(
      PATIENT_ENDPOINTS.UPDATE(id.toString()),
      data
    );
  },
};
