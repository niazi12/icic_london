"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSections = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
          alt="London city buildings"
          className="w-full h-full object-cover object-center"
          draggable="false"
        />
        {/* Lighter overlay for better contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-start justify-center min-h-[70vh]">
        <div className="max-w-2xl">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-white/90 font-semibold text-sm shadow backdrop-blur">
            Serving Greater London
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}>
            Professional Lift, Electrical & Plumbing Services
          </h1>
          <p className="text-xl mb-8 text-white/90" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            Specialising in lift installation, maintenance, and repairs, as well as quality electrical and plumbing services for domestic and commercial clients across Greater London.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-business-500 hover:bg-business-600 shadow-lg px-8 py-6 text-lg font-semibold">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-business-900 px-8 py-6 text-lg font-semibold">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center animate-bounce mb-1">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
        <span className="text-xs text-white/80 tracking-wide">Scroll Down</span>
      </div>
    </section>
  );
};
