"use client"
import { Button } from "../ui/button";
import Link from "next/link";
import ServiceCard from "../custom/ServiceCard";
import servicesData from "../data/services.json";
import { ArrowRight, Sparkles } from "lucide-react";

export const ServiceSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-business-50 text-business-700 font-semibold text-sm shadow-sm">
            <Sparkles className="w-4 h-4 text-business-600" />
            What We Offer
          </span>
          <h2 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-business-800 to-business-600 drop-shadow-lg">
            Our Services
          </h2>
          <div className="h-1 w-20 bg-business-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            We provide comprehensive building and maintenance services for both domestic 
            and commercial clients throughout Greater London.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div key={service.id} className="animate-fadeIn" style={{ animationDelay: `${idx * 80}ms` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button 
            asChild 
            className="bg-business-700 hover:bg-business-800 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-lg font-semibold"
            size="lg"
          >
            <Link href="/services" className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                View All Services
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};