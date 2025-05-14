import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const AboutSection = () => {

  return (
    <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About ICIC Associates London</h2>
          <p className="text-gray-700 mb-4">
            We are a team of professionals offering comprehensive services for both domestic 
            and commercial clients. Our expertise spans electrical maintenance, plumbing, joinery, 
            lift installation, and building services.
          </p>
          <p className="text-gray-700 mb-6">
            With a focus on quality and customer satisfaction, our friendly team ensures 
            every project is completed to the highest standards. We're proud to have worked 
            on flagship projects including lift modernization for London Dockland Light Railways 
            and installations at McCain Foods factory.
          </p>
          <Button asChild className="bg-business-700 hover:bg-business-800">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
          <h3 className="text-xl font-bold mb-4 text-business-800">Why Choose Us?</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-business-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-business-600"></div>
              </div>
              <span>Experienced & certified professionals</span>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-business-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-business-600"></div>
              </div>
              <span>24/7 emergency service availability</span>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-business-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-business-600"></div>
              </div>
              <span>Comprehensive service offerings</span>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-business-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-business-600"></div>
              </div>
              <span>Coverage throughout Greater London</span>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-business-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-business-600"></div>
              </div>
              <span>Proven track record with major projects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};
