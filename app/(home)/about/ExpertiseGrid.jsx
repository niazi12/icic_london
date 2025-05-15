import { Wrench, Hammer, Building2, Settings, Construction, AlertTriangle } from "lucide-react";

const EXPERTISE = [
  {
    icon: Wrench,
    title: "Electrical Services",
    desc: "Certified electricians providing comprehensive installation and maintenance for residential and commercial properties."
  },
  {
    icon: Hammer,
    title: "Plumbing Services",
    desc: "From minor repairs to complete installations, our plumbers deliver reliable and efficient solutions."
  },
  {
    icon: Building2,
    title: "Lift Installation",
    desc: "Specialists in lift installation and maintenance, ensuring safe and efficient operation in all facilities."
  },
  {
    icon: Settings,
    title: "Plastering & Joinery",
    desc: "Skilled craftsmen delivering beautiful finishes and custom woodwork for your property."
  },
  {
    icon: Construction,
    title: "Building & Construction",
    desc: "From renovations to new builds, our team handles projects of all sizes with precision and quality."
  },
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Services",
    desc: "Our emergency team is ready to respond quickly to urgent maintenance issues and breakdowns."
  }
];

const ExpertiseGrid = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-business-800">Our Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EXPERTISE.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white p-8 rounded-2xl shadow-md border border-business-100 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <span className="mb-4 bg-business-50 p-4 rounded-full flex items-center justify-center">
              <Icon className="w-8 h-8 text-business-700" />
            </span>
            <h3 className="text-xl font-bold mb-2 text-business-700">{title}</h3>
            <p className="text-gray-700 text-base">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseGrid; 