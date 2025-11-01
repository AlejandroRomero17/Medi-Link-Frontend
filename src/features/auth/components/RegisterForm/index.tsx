// src/features/auth/components/RegisterForm/index.tsx
"use client";

import { useState } from "react";
import { Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { BasicInfoStep } from "./steps/BasicInfoStep";
import { MedicalInfoStep } from "./steps/MedicalInfoStep";
import { SocialAuthButtons } from "../SocialAuthButtons";
import type { RegisterFormData, RegisterSubmitData } from "./types";

interface RegisterFormProps {
  onSubmit: (data: RegisterSubmitData) => void;
  isLoading?: boolean;
}

export const RegisterForm = ({ onSubmit, isLoading }: RegisterFormProps) => {
  const [step, setStep] = useState(1);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
    fecha_nacimiento: "",
    genero: "",
    direccion: "",
    ciudad: "",
    estado: "",
    codigo_postal: "",
    numero_seguro: "",
    alergias: "",
    tipo_sangre: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Step actual:", step);
    console.log("Datos del formulario:", formData);
    console.log("Términos aceptados:", acceptTerms);

    if (step === 1) {
      // Validaciones del paso 1
      if (formData.password !== formData.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      if (!acceptTerms) {
        alert("Debes aceptar los términos y condiciones");
        return;
      }

      console.log("Pasando al step 2...");
      setStep(2);
      return;
    }

    // Validar datos del paso 2
    if (!formData.fecha_nacimiento || !formData.genero) {
      alert("Por favor completa los datos requeridos del perfil médico");
      return;
    }

    // Enviar datos en el formato requerido
    const submitData: RegisterSubmitData = {
      usuario: {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        telefono: formData.telefono,
        password: formData.password,
        tipo_usuario: "paciente",
      },
      paciente: {
        fecha_nacimiento: formData.fecha_nacimiento,
        genero: formData.genero as "masculino" | "femenino" | "otro",
        direccion: formData.direccion || undefined,
        ciudad: formData.ciudad || undefined,
        estado: formData.estado || undefined,
        codigo_postal: formData.codigo_postal || undefined,
        numero_seguro: formData.numero_seguro || undefined,
        alergias: formData.alergias || undefined,
        tipo_sangre: formData.tipo_sangre || undefined,
      },
    };

    onSubmit(submitData);
  };

  const handleInputChange = (field: keyof RegisterFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isStep1Valid = () => {
    const isValid =
      formData.nombre.length >= 2 &&
      formData.apellido.length >= 2 &&
      formData.email.includes("@") &&
      formData.telefono.length >= 10 &&
      formData.password.length >= 8 &&
      formData.password === formData.confirmPassword &&
      acceptTerms;

    console.log("Validación paso 1:", {
      nombre: formData.nombre.length >= 2,
      apellido: formData.apellido.length >= 2,
      email: formData.email.includes("@"),
      telefono: formData.telefono.length >= 10,
      password: formData.password.length >= 8,
      confirmPassword: formData.password === formData.confirmPassword,
      acceptTerms,
      overall: isValid,
    });

    return isValid;
  };

  return (
    <div className="w-full max-w-6xl grid lg:grid-cols-2 min-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 mx-auto border border-gray-200 dark:border-slate-800">
      {/* Lado izquierdo - Info visual */}
      <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-emerald-600 to-blue-600 dark:from-emerald-700 dark:to-blue-700">
        <div className="absolute inset-0">
          <Image
            src="/assets/landing/img_profesionistas.png"
            alt="Profesionales de la salud"
            fill
            sizes="(max-width: 1024px) 0vw, 50vw"
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 text-white p-12 space-y-6 max-w-lg">
          <div className="flex items-center space-x-3 mb-8">
            <Activity className="h-12 w-12 text-white" />
            <span className="text-3xl font-bold text-white">
              Medi<span className="text-emerald-200">Link</span>
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Únete a nuestra comunidad
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Crea tu cuenta y comienza a gestionar tu salud de manera
            inteligente. Accede a miles de especialistas verificados.
          </p>

          <div className="pt-8 space-y-4">
            {[
              {
                title: "Historial médico digital",
                desc: "Accede a tu información desde cualquier lugar",
              },
              {
                title: "Agenda citas fácilmente",
                desc: "Reserva con especialistas en segundos",
              },
              {
                title: "Seguimiento personalizado",
                desc: "Recibe recomendaciones según tu perfil",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lado derecho - Formulario */}
      <div className="flex items-center justify-center p-8 lg:p-12 bg-gray-50 dark:bg-slate-950">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {step === 1 ? "Crear cuenta" : "Completa tu perfil médico"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {step === 1
                ? "Completa tus datos para comenzar"
                : "Información importante para tu historial médico"}
            </p>

            {/* Progress indicator */}
            <div className="flex justify-center lg:justify-start space-x-2 mt-4">
              <div
                className={`w-3 h-3 rounded-full transition-colors ${
                  step === 1
                    ? "bg-emerald-500"
                    : "bg-gray-300 dark:bg-slate-700"
                }`}
              />
              <div
                className={`w-3 h-3 rounded-full transition-colors ${
                  step === 2
                    ? "bg-emerald-500"
                    : "bg-gray-300 dark:bg-slate-700"
                }`}
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 ? (
              <BasicInfoStep
                formData={formData}
                onInputChange={handleInputChange}
                isLoading={isLoading}
              />
            ) : (
              <MedicalInfoStep
                formData={formData}
                onInputChange={handleInputChange}
                isLoading={isLoading}
              />
            )}

            {/* Términos y condiciones (solo en paso 1) */}
            {step === 1 && (
              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) =>
                    setAcceptTerms(checked as boolean)
                  }
                  className="border-gray-300 dark:border-slate-700 mt-1"
                  disabled={isLoading}
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                >
                  Acepto los{" "}
                  <a
                    href="/terms"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                  >
                    términos y condiciones
                  </a>{" "}
                  y la{" "}
                  <a
                    href="/privacy"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                  >
                    política de privacidad
                  </a>
                </Label>
              </div>
            )}

            {/* Botones de navegación */}
            <div className="flex gap-3">
              {step === 2 && (
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1 h-12 rounded-xl border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800"
                  disabled={isLoading}
                >
                  Atrás
                </Button>
              )}

              <Button
                type="submit"
                disabled={isLoading || (step === 1 && !isStep1Valid())}
                className={`${
                  step === 2 ? "flex-1" : "w-full"
                } h-12 text-base font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {isLoading
                  ? "Creando cuenta..."
                  : step === 1
                  ? "Continuar"
                  : "Completar registro"}
              </Button>
            </div>
          </form>

          {/* Debug info - solo en desarrollo */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 rounded text-xs">
              <p>
                <strong>Debug Info:</strong>
              </p>
              <p>Step: {step}</p>
              <p>isStep1Valid: {isStep1Valid() ? "true" : "false"}</p>
              <p>Accept Terms: {acceptTerms ? "true" : "false"}</p>
            </div>
          )}

          {/* Social auth y links (solo en paso 1) */}
          {step === 1 && (
            <>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-slate-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-50 dark:bg-slate-950 px-4 text-gray-600 dark:text-gray-400">
                    o continúa con
                  </span>
                </div>
              </div>

              <SocialAuthButtons isLoading={isLoading} />

              <div className="space-y-3 text-center text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  ¿Ya tienes cuenta?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Inicia sesión
                  </Link>
                </p>
                <div className="pt-2 border-t border-gray-200 dark:border-slate-800">
                  <Link
                    href="/register/professional"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    <Activity className="h-4 w-4" />
                    ¿Eres profesional de salud? Regístrate aquí
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
