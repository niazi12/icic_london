"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="py-16 bg-business-800 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
        Contact us today for a free quote on your next project or to schedule a service call.
        We're available 24/7 for emergency services.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" className="bg-white text-business-800 hover:bg-gray-100">
          <Link href="/contact">Contact Us</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-business-700 border-white text-white hover:bg-white hover:text-business-800">
          <a href="tel:02035760727">Call: 02035760727</a>
        </Button>
      </div>
    </div>
  </section>
  );
};