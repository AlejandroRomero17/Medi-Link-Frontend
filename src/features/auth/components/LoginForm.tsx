"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

interface LoginFormProps {
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
  onForgotPassword: () => void;
}

export const LoginForm = ({ onSubmit, onForgotPassword }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData.email, formData.password, rememberMe);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-6xl grid lg:grid-cols-2 min-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 mx-auto border border-gray-200 dark:border-slate-800">
      <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-emerald-600 to-blue-600 dark:from-emerald-700 dark:to-blue-700">
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
          <div className="flex items-center space-x-3 mb-8">
            <Activity className="h-12 w-12 text-white" />
            <span className="text-3xl font-bold text-white">
              Medi<span className="text-emerald-200">Link</span>
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Bienvenido de vuelta
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Gestiona tu salud de manera inteligente. Conecta con especialistas
            verificados y accede a tu historial médico en un solo lugar.
          </p>

          <div className="pt-8 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold">5K+</div>
              <div className="text-sm text-white/80">Especialistas</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-white/80">Satisfacción</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-white/80">Disponible</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 lg:p-12 bg-gray-50 dark:bg-slate-950">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Iniciar sesión
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-gray-900 dark:text-gray-200 font-medium"
              >
                Correo electrónico
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-12 h-12 rounded-xl border-gray-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-gray-900 dark:text-gray-200 font-medium"
              >
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="pl-12 pr-12 h-12 rounded-xl border-gray-300 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                  className="border-gray-300 dark:border-slate-700"
                />
                <Label
                  htmlFor="rememberMe"
                  className="text-gray-700 dark:text-gray-300 cursor-pointer select-none"
                >
                  Recordarme
                </Label>
              </div>
              <button
                type="button"
                onClick={onForgotPassword}
                className="font-medium text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              Iniciar sesión
            </Button>
          </form>

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

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 h-12 border-2 border-gray-300 dark:border-slate-700 rounded-xl hover:bg-white dark:hover:bg-slate-900 hover:border-gray-400 dark:hover:border-slate-600 transition-all duration-200 font-medium text-gray-900 dark:text-white"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-medium">Continuar con Google</span>
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            ¿No tienes cuenta?{" "}
            <a
              href="/register"
              className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
