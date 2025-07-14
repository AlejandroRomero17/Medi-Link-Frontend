"use client";
import { useEffect } from "react";
import { Navigation } from "@/components/marketing/ui/Navigation";
import { Footer } from "@/components/marketing/ui/Footer";
import { HeroSection } from "@/components/marketing/sections/HeroSection";
import { UserDashboardSection } from "@/components/marketing/sections/UserDashboardSection";
import { HealthSpecialistSection } from "@/components/marketing/sections/HealthSpecialistSection";
import { DataFlowSection } from "@/components/marketing/sections/DataFlowSection";
import { AISection } from "@/components/marketing/sections/AISection";
import { TestimonialsSection } from "@/components/marketing/sections/TestimonialsSection";
import { CTASection } from "@/components/marketing/sections/CTASection";

export default function LandingPage() {
  useEffect(() => {
    if (!document.body.className.includes("bg-")) {
      document.body.className +=
        " min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800";
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <HeroSection />
      <UserDashboardSection />
      <HealthSpecialistSection />
      <DataFlowSection />
      <AISection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
