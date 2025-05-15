"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, ArrowRight, AlertTriangle } from "lucide-react";
import {
  Wrench,
  Hammer,
  Building2,
  Settings2,
  Construction,
  Phone as PhoneIcon
} from "lucide-react";

const iconComponents = {
  Wrench,
  Hammer,
  Building2,
  Settings2,
  Construction,
  Phone: PhoneIcon
};

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, description, icon, isEmergency, phone, details } = service;
  const IconComponent = iconComponents[icon];

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col justify-between shadow-lg border border-business-100 bg-white group hover:-translate-y-2 hover:shadow-2xl focus-within:shadow-2xl relative ${
        isEmergency ? "bg-gradient-to-br from-business-700 to-business-800 text-white border-0" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      aria-label={title}
    >
      {/* Emergency badge */}
      {isEmergency && (
        <span className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
          <AlertTriangle className="w-4 h-4 mr-1" /> Emergency
        </span>
      )}
      <div className="p-8">
        <div className={`p-4 inline-flex rounded-2xl mb-5 shadow-md transition-all duration-300 ${
          isEmergency
            ? "bg-white/20 backdrop-blur-sm border border-white/30"
            : "bg-business-50 group-hover:bg-business-100"
        }`}>
          <IconComponent className={`h-8 w-8 ${isEmergency ? "text-white" : "text-business-700"}`} />
        </div>
        <h3 className={`text-2xl font-bold mb-3 ${isEmergency ? "text-white" : "text-gray-900"}`}>{title}</h3>
        <p className={`mb-5 ${isEmergency ? "text-white/90" : "text-gray-600"} line-clamp-3`}>{description}</p>
        {/* Details on hover/focus */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            (isHovered || isEmergency) ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {details && (
            <div className="animate-fadeIn">
              <p className={`font-semibold mb-2 ${isEmergency ? "text-white" : "text-business-700"}`}>Services include:</p>
              <ul className="space-y-2 text-sm">
                {details.slice(0, 4).map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`mr-2 mt-1.5 inline-block h-1.5 w-1.5 rounded-full ${isEmergency ? "bg-white" : "bg-business-700"}`}></span>
                    <span className={isEmergency ? "text-white/90" : "text-gray-700"}>{detail}</span>
                  </li>
                ))}
                {details.length > 4 && (
                  <li className={`italic text-sm ${isEmergency ? "text-white/80" : "text-gray-500"}`}>And more...</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={`px-8 pb-8 transition-all duration-300 ${isHovered || isEmergency ? "block" : "hidden"}`}>
        {isEmergency ? (
          <Button asChild className="w-full bg-white hover:bg-gray-100 text-business-800 font-bold py-6 rounded-xl group shadow-md">
            <a href={`tel:${phone}`} className="py-6 flex items-center justify-center" aria-label={`Call ${phone}`}>
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Call: {phone}
            </a>
          </Button>
        ) : (
          <Button asChild className="w-full bg-business-700 hover:bg-business-800 py-6 rounded-xl group font-semibold shadow-md">
            <Link href="/services" className="flex items-center justify-center" aria-label={`Learn more about ${title}`}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;