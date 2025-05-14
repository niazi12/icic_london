"use client"
import { ContactForm } from "@/components/landing/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (

      <main className="">
        {/* Hero Section */}
        <section className="bg-business-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              Get in touch with our team for inquiries, quotes, or to schedule a service.
              We're here to help with all your building and maintenance needs.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-700 mb-8">
                  Whether you need a quote, have a question about our services, or require emergency 
                  assistance, we're here to help. Fill out the form, call us directly, or visit our office.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-business-50 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-business-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600 mb-1">Landline: <a href="tel:02035760727" className="text-business-700 hover:underline">020 3576 0727</a></p>
                      <p className="text-gray-600">Mobile: <a href="tel:07904570606" className="text-business-700 hover:underline">07904 570 606</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-business-50 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-business-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600"><a href="mailto:kamrul@icic.london" className="text-business-700 hover:underline">kamrul@icic.london</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-business-50 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-business-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office Address</h3>
                      <p className="text-gray-600">
                        277A, Second floor, Green street,<br />
                        Damini's Mall, London. E7 8LJ
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-business-50 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-business-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600 mb-1">Sunday: Closed</p>
                      <p className="font-medium text-business-700">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Service Area</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              We provide services throughout Greater London for both domestic and commercial clients.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Areas We Cover</h3>
                <p className="text-gray-700 mb-4">
                  Our team of professionals is available across all London boroughs for regular 
                  services, maintenance, and 24/7 emergency call-outs.
                </p>
                <p className="font-medium">
                  For services outside Greater London, please contact us to discuss your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default Contact;
