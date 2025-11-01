"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterFormData } from "../types";

interface MedicalInfoStepProps {
  formData: RegisterFormData;
  onInputChange: (field: keyof RegisterFormData, value: string) => void;
  isLoading?: boolean;
}

export const MedicalInfoStep = ({
  formData,
  onInputChange,
  isLoading,
}: MedicalInfoStepProps) => {
  return (
    <>
      {/* Fecha de nacimiento */}
      <div className="space-y-2">
        <Label
          htmlFor="fecha_nacimiento"
          className="text-gray-900 dark:text-gray-200 font-medium"
        >
          Fecha de nacimiento *
        </Label>
        <Input
          id="fecha_nacimiento"
          type="date"
          value={formData.fecha_nacimiento}
          onChange={(e) => onInputChange("fecha_nacimiento", e.target.value)}
          className="h-12 rounded-xl border-gray-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white"
          required
          disabled={isLoading}
        />
      </div>

      {/* Género */}
      <div className="space-y-2">
        <Label
          htmlFor="genero"
          className="text-gray-900 dark:text-gray-200 font-medium"
        >
          Género *
        </Label>
        <select
          id="genero"
          value={formData.genero}
          onChange={(e) => onInputChange("genero", e.target.value)}
          className="w-full h-12 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-gray-900 dark:text-white"
          required
          disabled={isLoading}
        >
          <option value="">Selecciona tu género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Tipo de sangre */}
      <div className="space-y-2">
        <Label
          htmlFor="tipo_sangre"
          className="text-gray-900 dark:text-gray-200 font-medium"
        >
          Tipo de sangre
        </Label>
        <select
          id="tipo_sangre"
          value={formData.tipo_sangre}
          onChange={(e) => onInputChange("tipo_sangre", e.target.value)}
          className="w-full h-12 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-gray-900 dark:text-white"
          disabled={isLoading}
        >
          <option value="">Selecciona tipo de sangre</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>

      {/* Alergias */}
      <div className="space-y-2">
        <Label
          htmlFor="alergias"
          className="text-gray-900 dark:text-gray-200 font-medium"
        >
          Alergias conocidas
        </Label>
        <Input
          id="alergias"
          type="text"
          placeholder="Penicilina, mariscos, etc."
          value={formData.alergias}
          onChange={(e) => onInputChange("alergias", e.target.value)}
          className="h-12 rounded-xl border-gray-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
          disabled={isLoading}
        />
      </div>

      {/* Número de seguro */}
      <div className="space-y-2">
        <Label
          htmlFor="numero_seguro"
          className="text-gray-900 dark:text-gray-200 font-medium"
        >
          Número de seguro médico
        </Label>
        <Input
          id="numero_seguro"
          type="text"
          placeholder="Número de póliza"
          value={formData.numero_seguro}
          onChange={(e) => onInputChange("numero_seguro", e.target.value)}
          className="h-12 rounded-xl border-gray-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
          disabled={isLoading}
        />
      </div>

      {/* Ciudad y Estado */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="ciudad"
            className="text-gray-900 dark:text-gray-200 font-medium"
          >
            Ciudad
          </Label>
          <Input
            id="ciudad"
            type="text"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={(e) => onInputChange("ciudad", e.target.value)}
            className="h-12 rounded-xl border-gray-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="estado"
            className="text-gray-900 dark:text-gray-200 font-medium"
          >
            Estado
          </Label>
          <Input
            id="estado"
            type="text"
            placeholder="Estado"
            value={formData.estado}
            onChange={(e) => onInputChange("estado", e.target.value)}
            className="h-12 rounded-xl border-gray-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Código Postal */}
      <div className="space-y-2">
        <Label
          htmlFor="codigo_postal"
          className="text-gray-900 dark:text-gray-200 font-medium"
        >
          Código Postal
        </Label>
        <Input
          id="codigo_postal"
          type="text"
          placeholder="Código postal"
          value={formData.codigo_postal}
          onChange={(e) => onInputChange("codigo_postal", e.target.value)}
          className="h-12 rounded-xl border-gray-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
          disabled={isLoading}
        />
      </div>

      {/* Dirección completa */}
      <div className="space-y-2">
        <Label
          htmlFor="direccion"
          className="text-gray-900 dark:text-gray-200 font-medium"
        >
          Dirección completa
        </Label>
        <Input
          id="direccion"
          type="text"
          placeholder="Calle, número, colonia"
          value={formData.direccion}
          onChange={(e) => onInputChange("direccion", e.target.value)}
          className="h-12 rounded-xl border-gray-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
          disabled={isLoading}
        />
      </div>
    </>
  );
};
