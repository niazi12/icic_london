
import { AboutSection } from "@/components/landing/About";
import { CTA } from "@/components/landing/CTA";
import { HeroSections } from "@/components/landing/HeroSection";
import { ServiceSection } from "@/components/landing/Service";
import { TestinomialsSection } from "@/components/landing/Testinomials";

export default async function LandingPage() {
  return (
    <div className=" ">
     
      <div className="">
        <HeroSections   />
        <ServiceSection />
        <AboutSection />
        <TestinomialsSection />
        <CTA />

      </div>
    </div>
  );
}
