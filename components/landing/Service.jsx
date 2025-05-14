"use client"
import { 
  Wrench,
  Hammer,
  Building2,
  Settings2,
  Construction,
  Phone
} from "lucide-react";
import ServiceCard from "../custom/ServiceCard";
import { Button } from "../ui/button";
import Link from "next/link";



export const ServiceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive building and maintenance services for both domestic 
          and commercial clients throughout Greater London.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          title="Electrical Services" 
          description="Professional installation and maintenance for all electrical systems with 18th Edition certification." 
          icon={Wrench} 
        />
        <ServiceCard 
          title="Plumbing Services" 
          description="Expert plumbing installation and repairs for residential and commercial properties." 
          icon={Hammer} 
        />
        <ServiceCard 
          title="Lift Installation" 
          description="Specialized lift installation and maintenance services for buildings of all sizes." 
          icon={Building2} 
        />
        <ServiceCard 
          title="Plastering & Joinery" 
          description="High-quality plastering and joinery services delivered by skilled craftsmen." 
          icon={Settings2} 
        />
        <ServiceCard 
          title="Building & Construction" 
          description="Comprehensive building and construction services for new builds and renovations." 
          icon={Construction} 
        />
        <div className="bg-business-700 rounded-lg shadow-lg p-6 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
            <p className="mb-4">Available around the clock for urgent maintenance and repairs.</p>
          </div>
          <Button asChild variant="secondary" className="w-full">
            <a href="tel:02035760727">
              <Phone className="mr-2 h-5 w-5" />
              Call: 02035760727
            </a>
          </Button>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button asChild className="bg-business-700 hover:bg-business-800">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </div>
  </section>
  );
};