import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

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

const ServiceArea = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-7 h-7 text-business-700" />
            <h2 className="text-3xl font-bold">Our Coverage Area</h2>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl">
            We provide services throughout Greater London, including all boroughs and surrounding areas.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {AREAS.map((area, index) => (
            <Card key={index} className="p-6 flex items-center justify-center bg-business-50/80 border-business-100 shadow-sm hover:shadow-md transition-all font-semibold text-business-800 text-lg">
              {area}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea; 