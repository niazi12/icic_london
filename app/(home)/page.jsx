import { AboutSection } from "@/components/landing/About";
import { CTA } from "@/components/landing/CTA";
import { HeroSections } from "@/components/landing/HeroSection";
import { ServiceSection } from "@/components/landing/Service";
import { TestinomialsSection } from "@/components/landing/Testinomials";

export default async function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-business-50 overflow-x-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none z-0" aria-hidden="true" />
      <div className="relative z-10 flex flex-col gap-0">
        <HeroSections />
        <div className="py-4" />
        <ServiceSection />
        <div className="py-4" />
        <AboutSection />
        <div className="py-4" />
        <TestinomialsSection />
        <div className="py-4" />
        <CTA />
      </div>
    </div>
  );
}
