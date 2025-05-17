"use client"

import Image from "next/image";
import Link from "next/link";
import { Wrench, Settings, Hammer, Construction, Building2, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceArea from "./ServiceArea";
import { cn } from "@/lib/utils";


// Service data constants
const SERVICES_DATA = [
  {
    id: "lift",
    title: "Lift Installation & Maintenance",
    description: "We specialize in lift installation and maintenance services, ensuring safe and efficient operation of lifts in various buildings and facilities across Greater London.",
    icon: Building2,
    items: [
      "Passenger lift installation",
      "Goods lift installation",
      "Platform lifts",
      "Lift modernization",
      "Routine maintenance",
      "Emergency repairs",
      "Safety inspections and testing",
      "Custom lift solutions"
    ],
    cta: "Request a Lift Service",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "electrical",
    title: "Electrical Services",
    description: "Our team of qualified electricians holds 18th Edition certification and provides comprehensive electrical installation and maintenance services for both domestic and commercial properties.",
    icon: Wrench,
    items: [
      "Full electrical installations",
      "Electrical safety inspections",
      "Rewiring",
      "Fault finding and repairs",
      "Emergency electrical repairs",
      "Lighting installations",
      "Consumer unit upgrades",
      "Commercial electrical work"
    ],
    cta: "Request an Electrical Service",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "plumbing",
    title: "Plumbing and Joinery Services",
    description: "Our skilled plumbers and joiners provide reliable, efficient solutions for all your plumbing and woodworking needs, from minor repairs to full installations for residential and commercial properties.",
    icon: Hammer,
    items: [
      // Plumbing services
      "Pipe installation and repairs",
      "Tap and toilet repairs",
      "Bathroom and kitchen installations",
      "Water heater installation and repair",
      "Drain cleaning",
      "Leak detection and repair",
      "Boiler servicing and repairs",
      "Emergency plumbing services",
      // Joinery services
      "Custom furniture and cabinetry",
      "Door and window fitting",
      "Wooden staircases and railings",
      "Skirting boards and architraves",
      "Wood repairs and restoration",
      "Bespoke shelving and storage solutions",
      "Workshop joinery and site installations"
    ],
    cta: "Request a Plumbing Service",
    image: "/images/plumber.png"

  },
  
];

const AREAS = [
  "Central London",
  "North London",
  "East London",
  "South London",
  "West London",
  "North West London",
  "South East London",
  "South West London"
];

// Components
const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  
  return (
    <Card className="h-full overflow-hidden group transition-all duration-300 hover:shadow-xl">
      {service.image && (
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-business-900/20 z-10" />
          <div className="absolute top-4 left-4 bg-business-50 p-2 rounded-md z-20">
            <Icon className="w-6 h-6 text-business-700" />
          </div>
          <Image 
            src={service.image} 
            alt={service.title} 
            width={600} 
            height={400} 
            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
        <CardDescription className="text-gray-600 mt-2">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <h3 className="font-semibold text-lg mb-2">Our services include:</h3>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          {service.items?.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full bg-business-700 hover:bg-business-800">
          <Link href="/contact">{service.cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};


          // src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" 

const Services = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-business-900/90 to-business-800/80 z-10" />
        <div className="relative h-[50vh] min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
            alt="Property Lifts Services"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  We offer a comprehensive range of professional services for both domestic 
                  and commercial clients throughout Greater London.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-gradient-to-r from-business-50 to-business-100">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-none shadow-xl">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-lg">
                <h2 className="text-3xl font-bold mb-4 text-business-900">24/7 Emergency Services</h2>
                <p className="text-gray-700 mb-6">
                  We understand that emergencies don't happen on schedule. That's why our team
                  is available 24 hours a day, 7 days a week to address urgent maintenance issues
                  and breakdowns throughout Greater London.  We're here for you, whenever you need us.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white border-none shadow-md"
                  >
                    <a
                      href="tel:02035760727"
                      className="flex items-center gap-2 font-semibold"
                    >
                      <Phone className="w-5 h-5" />
                      Call Our Emergency Line
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-business-500 text-business-800 hover:bg-business-50/50">
                    <Link href="/contact" className="font-medium">Contact Us Online</Link>
                  </Button>
                </div>
              </div>
              <div
                className={cn(
                  "p-6 rounded-xl text-center min-w-[280px] shadow-lg",
                  "bg-white/90 backdrop-blur-md border border-business-100", // Refined style
                  "transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl", // Add hover effect
                )}
              >
                <p className="text-lg font-semibold mb-2 text-business-700">Emergency Hotline</p>
                <p className="text-4xl font-bold text-red-600 mb-3">020 3576 0727</p>
                <p
                  className={cn(
                    "text-sm text-gray-600 flex items-center justify-center gap-1.5",
                    "font-medium", // Make the text a bit bolder
                  )}
                >
                  <span
                    className={cn(
                      "relative inline-flex h-3 w-3",
                      "animate-pulse", // Keep the pulse for visual emphasis
                    )}
                  >
                    <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  Available 24/7
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

      {/* Coverage Area */}
      <ServiceArea />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-business-800 to-business-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote on your project or to schedule a service call.
            Our team is ready to assist you with all your needs.
          </p>
          <Button asChild size="lg" className="bg-white text-business-700 hover:bg-gray-100 hover:text-business-800 px-8 py-6 text-lg">
            <Link href="/contact">Request a Free Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
