"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const HeroSections = () => {



  return (
    <section className="relative bg-business-900 text-white py-20">
    <div className="absolute inset-0 bg-gradient-to-r from-business-950 to-business-900 opacity-90"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Building & Maintenance Services
        </h1>
        <p className="text-xl mb-8 text-gray-100">
          Delivering quality electrical, plumbing, lift installation and building 
          services across Greater London for domestic and commercial clients.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-business-500 hover:bg-business-600">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-business-900">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
  );
};
