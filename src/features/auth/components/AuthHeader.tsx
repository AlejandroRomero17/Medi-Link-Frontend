import { Activity, Home } from "lucide-react";
import { ModeToggle } from "@/components/shared/ModeToggle";
import Link from "next/link";

export const AuthHeader = () => (
  <div className="flex items-center justify-between mb-8">
    {/* Logo */}
    <Link href="/" className="flex items-center gap-3 group">
      <Activity className="h-10 w-10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Medi
          <span className="text-emerald-600 dark:text-emerald-400">Link</span>
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Tu salud primero
        </p>
      </div>
    </Link>

    {/* Right Actions */}
    <div className="flex items-center gap-3">
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
      >
        <Home className="h-4 w-4" />
        <span className="hidden sm:inline">Inicio</span>
      </Link>
      <ModeToggle />
    </div>
  </div>
);
