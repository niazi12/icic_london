"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Wrench, Settings, Hammer, Construction, Building2 } from "lucide-react";


const Services = () => {
  return (
   
      <main>
        {/* Hero Section */}
        <section className="bg-business-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl">
              We offer a comprehensive range of professional services for both domestic 
              and commercial clients throughout Greater London.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="bg-business-50 p-2 inline-block rounded-md mb-4">
                  <Wrench className="w-6 h-6 text-business-700" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
                <p className="text-gray-700 mb-4">
                  Our team of qualified electricians holds 18th Edition certification and provides 
                  comprehensive electrical installation and maintenance services for both domestic 
                  and commercial properties.
                </p>
                <h3 className="font-semibold text-lg mb-2">Our electrical services include:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Full electrical installations</li>
                  <li>Electrical safety inspections</li>
                  <li>Rewiring</li>
                  <li>Fault finding and repairs</li>
                  <li>Emergency electrical repairs</li>
                  <li>Lighting installations</li>
                  <li>Consumer unit upgrades</li>
                  <li>Commercial electrical work</li>
                </ul>
                <Button asChild className="bg-business-700 hover:bg-business-800">
                  <Link href="/contact">Request an Electrical Service</Link>
                </Button>
              </div>
              <div>
                <div className="bg-business-50 p-2 inline-block rounded-md mb-4">
                  <Hammer className="w-6 h-6 text-business-700" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Plumbing Services</h2>
                <p className="text-gray-700 mb-4">
                  Our experienced plumbers deliver reliable and efficient solutions for all your 
                  plumbing needs, from minor repairs to complete installations for both residential 
                  and commercial properties.
                </p>
                <h3 className="font-semibold text-lg mb-2">Our plumbing services include:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Pipe installation and repairs</li>
                  <li>Tap and toilet repairs</li>
                  <li>Bathroom and kitchen installations</li>
                  <li>Water heater installation and repair</li>
                  <li>Drain cleaning</li>
                  <li>Leak detection and repair</li>
                  <li>Boiler servicing and repairs</li>
                  <li>Emergency plumbing services</li>
                </ul>
                <Button asChild className="bg-business-700 hover:bg-business-800">
                  <Link href="/contact">Request a Plumbing Service</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="bg-business-50 p-2 inline-block rounded-md mb-4">
                  <Building2 className="w-6 h-6 text-business-700" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Lift Installation & Maintenance</h2>
                <p className="text-gray-700 mb-4">
                  We specialize in lift installation and maintenance services, ensuring safe and 
                  efficient operation of lifts in various buildings and facilities across Greater London.
                </p>
                <h3 className="font-semibold text-lg mb-2">Our lift services include:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Passenger lift installation</li>
                  <li>Goods lift installation</li>
                  <li>Platform lifts</li>
                  <li>Lift modernization</li>
                  <li>Routine maintenance</li>
                  <li>Emergency repairs</li>
                  <li>Safety inspections and testing</li>
                  <li>Custom lift solutions</li>
                </ul>
                <Button asChild className="bg-business-700 hover:bg-business-800">
                  <Link href="/contact">Request a Lift Service</Link>
                </Button>
              </div>
              <div>
                <div className="bg-business-50 p-2 inline-block rounded-md mb-4">
                  <Settings className="w-6 h-6 text-business-700" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Plastering & Joinery</h2>
                <p className="text-gray-700 mb-4">
                  Our skilled craftsmen provide exceptional plastering and joinery services, 
                  delivering beautiful finishes and custom woodwork for both domestic and 
                  commercial properties.
                </p>
                <h3 className="font-semibold text-lg mb-2">Our services include:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  <li>Plastering and skimming</li>
                  <li>Dry lining</li>
                  <li>Rendering</li>
                  <li>Custom carpentry</li>
                  <li>Door installation and repair</li>
                  <li>Fitted furniture</li>
                  <li>Kitchen installations</li>
                  <li>Timber flooring</li>
                </ul>
                <Button asChild className="bg-business-700 hover:bg-business-800">
                  <Link href="/contact">Request Plastering or Joinery</Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="bg-business-50 p-2 inline-block rounded-md mb-4">
                <Construction className="w-6 h-6 text-business-700" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Building & Construction</h2>
              <p className="text-gray-700 mb-4">
                From renovations to new builds, our construction team has the knowledge and 
                expertise to handle projects of all sizes with precision and quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Residential Services:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Home extensions</li>
                    <li>Loft conversions</li>
                    <li>Renovations and refurbishments</li>
                    <li>Kitchen and bathroom installations</li>
                    <li>Structural alterations</li>
                    <li>Property maintenance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Commercial Services:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Office fit-outs</li>
                    <li>Shop front installations</li>
                    <li>Commercial renovations</li>
                    <li>Industrial building works</li>
                    <li>Building maintenance</li>
                    <li>Project management</li>
                  </ul>
                </div>
              </div>
              <Button asChild className="bg-business-700 hover:bg-business-800">
                <Link href="/contact">Discuss Your Construction Project</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-16 bg-business-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">24/7 Emergency Services</h2>
                  <p className="text-gray-700 mb-6">
                    We understand that emergencies don't happen on schedule. That's why our team 
                    is available 24 hours a day, 7 days a week to address urgent maintenance issues 
                    and breakdowns throughout Greater London.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="bg-business-700 hover:bg-business-800">
                      <a href="tel:02035760727">Call Our Emergency Line</a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/contact">Contact Us Online</Link>
                    </Button>
                  </div>
                </div>
                <div className="bg-business-50 p-6 rounded-lg text-center min-w-[250px]">
                  <p className="text-lg font-medium mb-2">Emergency Hotline</p>
                  <p className="text-2xl font-bold text-business-700 mb-2">020 3576 0727</p>
                  <p className="text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Coverage Area</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We provide services throughout Greater London, including all boroughs and surrounding areas.
            </p>
            <div className="bg-gray-100 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Serving All London Boroughs</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-left">
                <div>Central London</div>
                <div>North London</div>
                <div>East London</div>
                <div>South London</div>
                <div>West London</div>
                <div>North West London</div>
                <div>South East London</div>
                <div>South West London</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-business-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote on your project or to schedule a service call.
              Our team is ready to assist you with all your needs.
            </p>
            <Button asChild size="lg" className="bg-white text-business-700 hover:bg-gray-100">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </section>
      </main>


  );
};

export default Services;
