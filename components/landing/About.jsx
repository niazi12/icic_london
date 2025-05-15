import React from "react";
import { CheckCircle2, Award, Users, Clock, Wrench, MapPin, Star } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const reasons = [
  { icon: Award, text: "Experienced & certified professionals" },
  { icon: Clock, text: "24/7 emergency service availability" },
  { icon: Wrench, text: "Comprehensive service offerings" },
  { icon: MapPin, text: "Coverage throughout Greater London" },
  { icon: Star, text: "Proven track record with major projects" },
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/geometry.png')] pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-business-50 text-business-700 font-semibold text-sm shadow-sm">
            <Users className="w-4 h-4 text-business-600" />
            Who We Are
          </span>
          <h2 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-business-800 to-business-600 drop-shadow-lg">
            About ICIC Associates London
          </h2>
          <div className="h-1 w-20 bg-business-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 text-lg">
            We are a team of professionals offering comprehensive services for both domestic and commercial clients. Our expertise spans electrical maintenance, plumbing, joinery, lift installation, and building services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-business-800">Our Commitment</h3>
            <p className="text-gray-700 mb-4 text-lg">
              With a focus on quality and customer satisfaction, our friendly team ensures every project is completed to the highest standards. We're proud to have worked on flagship projects including lift modernization for London Dockland Light Railways and installations at McCain Foods factory.
            </p>
            <Button asChild className="bg-business-700 hover:bg-business-800 mt-4 text-lg font-semibold px-8 py-6 rounded-xl shadow-md">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="bg-business-50 p-10 rounded-2xl shadow-lg border border-business-100">
            <h3 className="text-xl font-bold mb-6 text-business-700 text-center">Why Choose Us?</h3>
            <ul className="space-y-5">
              {reasons.map(({ icon: Icon, text }, idx) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="bg-business-100 rounded-full p-3 flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-business-700" />
                  </span>
                  <span className="text-business-800 text-base font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
