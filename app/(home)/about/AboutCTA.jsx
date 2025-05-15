import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThumbsUp } from "lucide-react";

const AboutCTA = () => (
  <section className="py-20 bg-business-700 text-white">
    <div className="container mx-auto px-4 text-center flex flex-col items-center">
      <div className="flex items-center gap-3 mb-6 bg-business-800 px-6 py-3 rounded-full shadow-lg">
        <ThumbsUp className="w-6 h-6 text-business-400" />
        <span className="font-semibold text-lg">Trusted by clients across Greater London</span>
      </div>
      <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Whether you need emergency repairs or are planning a major construction project, we're here to help. Contact us today to discuss how we can meet your needs.
      </p>
      <Button asChild size="lg" className="bg-white text-business-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
        <Link href="/contact">Contact Us Now</Link>
      </Button>
    </div>
  </section>
);

export default AboutCTA; 