"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Stethoscope,
  Award,
  Building,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";

interface ProfessionalRegisterFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    password: string;
    specialty: string;
    license: string;
    institution: string;
    experience: string;
  }) => void;
}

const specialties = [
  "Cardiología",
  "Dermatología",
  "Endocrinología",
  "Gastroenterología",
  "Geriatría",
  "Ginecología",
  "Medicina General",
  "Neurología",
  "Oftalmología",
  "Oncología",
  "Ortopedia",
  "Pediatría",
  "Psiquiatría",
  "Psicología",
  "Traumatología",
  "Urología",
  "Otra",
];

export const ProfessionalRegisterForm = ({
  onSubmit,
}: ProfessionalRegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialty: "",
    license: "",
    institution: "",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!acceptTerms) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    onSubmit({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      specialty: formData.specialty,
      license: formData.license,
      institution: formData.institution,
      experience: formData.experience,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-6xl grid lg:grid-cols-2 min-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 mx-auto border border-gray-200 dark:border-slate-800">
      <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
        <div className="absolute inset-0">
          <Image
            src="/assets/landing/img_profesionistas.png"
            alt="Profesionales de la salud"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 text-white p-12 space-y-6 max-w-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Stethoscope className="h-12 w-12 text-white" />
            <span className="text-3xl font-bold text-white">
              Medi<span className="text-blue-200">Link</span>
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Únete como profesional
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Expande tu práctica y conecta con miles de pacientes que buscan tus
            servicios profesionales.
          </p>

          <div className="pt-6 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold">Gestión de pacientes</p>
                <p className="text-sm text-white/80">
                  Administra tu consulta desde una sola plataforma
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold">Agenda inteligente</p>
                <p className="text-sm text-white/80">
                  Control total de tus citas y horarios
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold">Perfil verificado</p>
                <p className="text-sm text-white/80">
                  Aumenta tu credibilidad y confianza
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold">Sin comisiones</p>
                <p className="text-sm text-white/80">
                  Cobra directamente por tus servicios
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center p-6 lg:p-8 bg-gray-50 dark:bg-slate-950 overflow-y-auto">
        <div className="w-full max-w-md space-y-4 my-4">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Registro profesional
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Completa tus datos profesionales
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <Label
                htmlFor="name"
                className="text-gray-900 dark:text-gray-200 font-medium text-sm"
              >
                Nombre completo
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Dr. Juan Pérez"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="pl-10 h-11 rounded-xl border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="email"
                className="text-gray-900 dark:text-gray-200 font-medium text-sm"
              >
                Correo electrónico
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 h-11 rounded-xl border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="specialty"
                className="text-gray-900 dark:text-gray-200 font-medium text-sm"
              >
                Especialidad
              </Label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none z-10" />
                <select
                  id="specialty"
                  value={formData.specialty}
                  onChange={(e) =>
                    handleInputChange("specialty", e.target.value)
                  }
                  className="w-full pl-10 pr-4 h-11 rounded-xl border-2 border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white appearance-none cursor-pointer text-sm"
                  required
                >
                  <option value="">Selecciona una especialidad</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label
                  htmlFor="license"
                  className="text-gray-900 dark:text-gray-200 font-medium text-sm"
                >
                  Cédula profesional
                </Label>
                <div className="relative">
                  <Award className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    id="license"
                    type="text"
                    placeholder="1234567"
                    value={formData.license}
                    onChange={(e) =>
                      handleInputChange("license", e.target.value)
                    }
                    className="pl-10 h-11 rounded-xl border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="experience"
                  className="text-gray-900 dark:text-gray-200 font-medium text-sm"
                >
                  Años experiencia
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    id="experience"
                    type="number"
                    placeholder="5"
                    min="0"
                    max="60"
                    value={formData.experience}
                    onChange={(e) =>
                      handleInputChange("experience", e.target.value)
                    }
                    className="pl-10 h-11 rounded-xl border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="institution"
                className="text-gray-900 dark:text-gray-200 font-medium text-sm"
              >
                Institución/Hospital
              </Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  id="institution"
                  type="text"
                  placeholder="Hospital General"
                  value={formData.institution}
                  onChange={(e) =>
                    handleInputChange("institution", e.target.value)
                  }
                  className="pl-10 h-11 rounded-xl border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="password"
                className="text-gray-900 dark:text-gray-200 font-medium text-sm"
              >
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="pl-10 pr-10 h-11 rounded-xl border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 text-sm"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="confirmPassword"
                className="text-gray-900 dark:text-gray-200 font-medium text-sm"
              >
                Confirmar contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="pl-10 pr-10 h-11 rounded-xl border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 text-sm"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) =>
                  setAcceptTerms(checked as boolean)
                }
                className="border-gray-300 dark:border-slate-700 mt-0.5"
              />
              <Label
                htmlFor="terms"
                className="text-xs text-gray-700 dark:text-gray-300 cursor-pointer leading-relaxed"
              >
                Acepto los{" "}
                <a
                  href="/terms"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  términos y condiciones
                </a>{" "}
                para profesionales y certifico que mi información es verídica
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full h-11 text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              Crear cuenta profesional
            </Button>
          </form>

          <div className="space-y-2 text-center text-xs">
            <p className="text-gray-600 dark:text-gray-400">
              ¿Ya tienes cuenta?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Inicia sesión
              </Link>
            </p>
            <div className="pt-1 border-t border-gray-200 dark:border-slate-800">
              <Link
                href="/register"
                className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
              >
                ¿Eres paciente? Regístrate aquí
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
