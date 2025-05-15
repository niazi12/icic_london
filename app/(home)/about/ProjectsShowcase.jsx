import { Building2, Wrench, Hammer } from "lucide-react";

const PROJECTS = [
  {
    icon: Building2,
    title: "Lifts Modernization",
    client: "London Dockland Light Railways",
    desc: "Comprehensive modernization of lift systems throughout the DLR network, improving accessibility and passenger experience."
  },
  {
    icon: Wrench,
    title: "Electrical & Lift Installation",
    client: "McCain Foods Factory",
    desc: "Installed electrical systems and lifts at the McCain Foods production facility, enhancing safety and operational efficiency."
  },
  {
    icon: Hammer,
    title: "Plumbing & Joinery Services",
    client: "Luxury Hotels across London",
    desc: "Provided comprehensive plumbing and joinery services for several luxury hotels, contributing to their premium guest experience."
  }
];

const ProjectsShowcase = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-business-800">Our Flagship Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map(({ icon: Icon, title, client, desc }) => (
          <div key={title} className="bg-business-50 p-8 rounded-2xl shadow-md border border-business-100 hover:shadow-lg transition-all flex flex-col items-center text-center group">
            <span className="mb-4 bg-white p-4 rounded-full flex items-center justify-center border border-business-100 group-hover:bg-business-100">
              <Icon className="w-8 h-8 text-business-700" />
            </span>
            <h3 className="text-xl font-bold mb-2 text-business-800">{title}</h3>
            <p className="text-business-700 font-medium mb-1">{client}</p>
            <p className="text-gray-700 text-base">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsShowcase; 