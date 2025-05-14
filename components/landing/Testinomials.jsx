import React from "react";

import TestimonialCard from "../custom/TestimonialCard";

export const TestinomialsSection = () => {

  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't take our word for it—here's what our satisfied clients have to say about our services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard 
          quote="ICIC Associates did an excellent job with our electrical installation. Professional, punctual, and high-quality work."
          author="Sarah Johnson"
          role="Homeowner, East London"
        />
        <TestimonialCard 
          quote="The team at ICIC Associates went above and beyond to ensure our lift maintenance was completed efficiently and with minimal disruption."
          author="Michael Chen"
          role="Building Manager, Central London"
        />
        <TestimonialCard 
          quote="Fantastic plumbing service! They identified and fixed the issue quickly. Would definitely recommend their services."
          author="James Wilson"
          role="Restaurant Owner, North London"
        />
      </div>
    </div>
  </section>
  );
};
