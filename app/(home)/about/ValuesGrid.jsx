import { Star, ShieldCheck, Award, Users } from "lucide-react";

const VALUES = [
  {
    icon: Star,
    title: "Quality",
    desc: "We never compromise on the quality of our work, using only the best materials and techniques for every project."
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Our clients can count on us to show up on time and complete projects as promised, every time."
  },
  {
    icon: Award,
    title: "Expertise",
    desc: "Our team consists of certified professionals with extensive experience in their respective fields."
  },
  {
    icon: Users,
    title: "Customer Focus",
    desc: "We prioritize client satisfaction, ensuring we meet and exceed expectations on every project we undertake."
  }
];

const ValuesGrid = () => (
  <section className="py-20 bg-business-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-business-800">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {VALUES.map(({ icon: Icon, title, desc }, idx) => (
          <div key={title} className="bg-white p-8 rounded-2xl shadow-sm border border-business-100 flex flex-col items-center text-center hover:shadow-md transition-all">
            <span className="mb-4 bg-business-100 p-4 rounded-full flex items-center justify-center">
              <Icon className="w-8 h-8 text-business-700" />
            </span>
            <span className="text-business-700 text-2xl font-bold mb-2">{idx + 1}</span>
            <h3 className="text-xl font-bold mb-2 text-business-800">{title}</h3>
            <p className="text-gray-600 text-base">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesGrid; 