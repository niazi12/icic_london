"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  return (

      <main className="">
        {/* Hero Section */}
        <section className="bg-business-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl">
              Learn more about ICIC Associates London LTD and our commitment to delivering 
              high-quality building and maintenance services across Greater London.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Company</h2>
                <p className="text-gray-700 mb-4">
                  ICIC Associates London LTD is a professional service provider specializing in 
                  electrical, plumbing, lift installation, and building services for both domestic 
                  and commercial clients throughout Greater London.
                </p>
                <p className="text-gray-700 mb-4">
                  Led by our director Kamrul Islam Saikot, our team of skilled professionals is 
                  committed to delivering exceptional service and customer satisfaction on every project.
                </p>
                <p className="text-gray-700">
                  We pride ourselves on our friendly approach, attention to detail, and ability 
                  to meet the specific demands of each client, ensuring every service visit 
                  exceeds expectations.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Company Details</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <span className="font-medium">Company Name:</span>
                    <span>ICIC Associates London LTD</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Company Number:</span>
                    <span>12712638</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Director:</span>
                    <span>Kamrul Islam Saikot</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Address:</span>
                    <span>277A, Second floor, Green street, Damini's Mall, London. E7 8LJ</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Coverage Area:</span>
                    <span>Greater London</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-business-700">Electrical Services</h3>
                <p className="text-gray-700">
                  Our certified electricians hold 18th Edition qualifications and provide comprehensive 
                  electrical installation and maintenance services for both residential and commercial properties.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-business-700">Plumbing Services</h3>
                <p className="text-gray-700">
                  From minor repairs to complete plumbing installations, our experienced plumbers deliver 
                  reliable and efficient solutions for all your plumbing needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-business-700">Lift Installation</h3>
                <p className="text-gray-700">
                  Specializing in lift installation and maintenance, we ensure safe and efficient 
                  operation of lifts in various buildings and facilities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-business-700">Plastering & Joinery</h3>
                <p className="text-gray-700">
                  Our skilled craftsmen provide exceptional plastering and joinery services, 
                  delivering beautiful finishes and custom woodwork for your property.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-business-700">Building & Construction</h3>
                <p className="text-gray-700">
                  From renovations to new builds, our construction team has the knowledge and 
                  expertise to handle projects of all sizes with precision and quality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-business-700">24/7 Emergency Services</h3>
                <p className="text-gray-700">
                  Available round-the-clock, our emergency team is ready to respond quickly 
                  to urgent maintenance issues and breakdowns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Projects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Flagship Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Lifts Modernization</h3>
                <p className="text-gray-700 mb-2">London Dockland Light Railways</p>
                <p className="text-gray-600">
                  Completed a comprehensive modernization of lift systems throughout the DLR network, 
                  improving accessibility and passenger experience.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Electrical & Lift Installation</h3>
                <p className="text-gray-700 mb-2">McCain Foods Factory</p>
                <p className="text-gray-600">
                  Installed electrical systems and lifts at the McCain Foods production facility, 
                  enhancing safety and operational efficiency.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Plumbing & Joinery Services</h3>
                <p className="text-gray-700 mb-2">Luxury Hotels across London</p>
                <p className="text-gray-600">
                  Provided comprehensive plumbing and joinery services for several luxury hotels, 
                  contributing to their premium guest experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-business-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-business-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-business-700 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on the quality of our work, using only the best materials 
                  and techniques for every project.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-business-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-business-700 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Reliability</h3>
                <p className="text-gray-600">
                  Our clients can count on us to show up on time and complete projects as promised, 
                  every time.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-business-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-business-700 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Expertise</h3>
                <p className="text-gray-600">
                  Our team consists of certified professionals with extensive experience in their 
                  respective fields.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-business-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-business-700 text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  We prioritize client satisfaction, ensuring we meet and exceed expectations on 
                  every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-business-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you need emergency repairs or are planning a major construction project, 
              we're here to help. Contact us today to discuss how we can meet your needs.
            </p>
            <Button asChild size="lg" className="bg-white text-business-700 hover:bg-gray-100">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>

  );
};

export default About;
