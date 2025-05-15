"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-business-800">ICIC</span>
          <span className="hidden sm:inline text-lg text-business-700">Associates London LTD</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 font-medium hover:text-business-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 font-medium hover:text-business-600 transition-colors">
            About Us
          </Link>
          <Link href="/services" className="text-gray-700 font-medium hover:text-business-600 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 font-medium hover:text-business-600 transition-colors">
            Contact
          </Link>
          <Button asChild className="bg-business-700 hover:bg-business-800">
            <a href="tel:02035760727">Call Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              href="/" 
              className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button 
              asChild 
              className="bg-business-700 hover:bg-business-800 w-full"
            >
              <a href="tel:02035760727">Call Us Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};


