import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutHero = () => (
  <section className="relative bg-gradient-to-br from-business-800 via-business-900 to-business-700 text-white py-24 overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" aria-hidden="true" />
    <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
      <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">About ICIC Associates London LTD</h1>
      <p className="text-2xl max-w-2xl mb-8 text-white/90">
        Learn more about our commitment to delivering high-quality building and maintenance services across Greater London.
      </p>
      <Button asChild size="lg" className="bg-white text-business-800 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg">
        <Link href="/contact">Contact Us</Link>
      </Button>
    </div>
  </section>
);

export default AboutHero; 