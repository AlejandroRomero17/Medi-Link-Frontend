// src/services/doctor-service.ts
import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/config/env";
import {
  DoctorCreate,
  DoctorResponse,
  DoctorCompleto,
  Especialidad,
} from "@/types/api.types";

export const doctorService = {
  /**
   * Create doctor profile
   */
  async create(data: DoctorCreate): Promise<DoctorResponse> {
    return await apiClient.post<DoctorResponse>(
      API_ENDPOINTS.DOCTORS.CREATE,
      data
    );
  },

  /**
   * Get all doctors with optional specialty filter
   */
  async getAll(params?: {
    skip?: number;
    limit?: number;
    especialidad?: Especialidad;
  }): Promise<DoctorCompleto[]> {
    const queryParams = new URLSearchParams();

    if (params?.skip !== undefined) {
      queryParams.append("skip", params.skip.toString());
    }
    if (params?.limit !== undefined) {
      queryParams.append("limit", params.limit.toString());
    }
    if (params?.especialidad) {
      queryParams.append("especialidad", params.especialidad);
    }

    const url = `${API_ENDPOINTS.DOCTORS.LIST}${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;
    return await apiClient.get<DoctorCompleto[]>(url);
  },

  /**
   * Get doctor by ID
   */
  async getById(id: number): Promise<DoctorCompleto> {
    return await apiClient.get<DoctorCompleto>(
      API_ENDPOINTS.DOCTORS.GET(id.toString())
    );
  },

  /**
   * Get doctor by user ID
   */
  async getByUserId(userId: number): Promise<DoctorCompleto> {
    return await apiClient.get<DoctorCompleto>(
      API_ENDPOINTS.DOCTORS.BY_USER(userId.toString())
    );
  },

  /**
   * Get doctors by specialty
   */
  async getBySpecialty(especialidad: Especialidad): Promise<DoctorCompleto[]> {
    return await apiClient.get<DoctorCompleto[]>(
      API_ENDPOINTS.DOCTORS.BY_SPECIALTY(especialidad)
    );
  },

  /**
   * Update doctor profile
   */
  async update(
    id: number,
    data: Partial<DoctorCreate>
  ): Promise<DoctorResponse> {
    return await apiClient.put<DoctorResponse>(
      API_ENDPOINTS.DOCTORS.UPDATE(id.toString()),
      data
    );
  },
};
