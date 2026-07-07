
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ICIC Associates London LTD</h3>
            <address className="not-italic">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="flex-shrink-0" />
                <span>277A, Second floor, Green street, Damini's Mall, London. E7 8LJ</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:02035760727" className="hover:text-business-300 transition-colors">02035760727</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:iciclondon8@gmail.com" className="hover:text-business-300 transition-colors">iciclondon8@gmail.com</a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-business-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-business-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-business-300 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-business-300 transition-colors">Career</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-business-300 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Lift Installation & Maintenance</li>
              <li>Electrical Installation & Maintenance</li>
              <li>Plumbing and Joinery Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ICIC Associates London LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
