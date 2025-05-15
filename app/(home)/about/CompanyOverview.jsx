import { Building2, User, MapPin, BadgeCheck, Hash } from "lucide-react";

const details = [
  { icon: Building2, label: "Company Name", value: "ICIC Associates London LTD" },
  { icon: Hash, label: "Company Number", value: "12712638" },
  { icon: User, label: "Director", value: "Kamrul Islam Saikot" },
  { icon: MapPin, label: "Address", value: "277A, Second floor, Green street, Damini's Mall, London. E7 8LJ" },
  { icon: BadgeCheck, label: "Coverage Area", value: "Greater London" },
];

const CompanyOverview = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-business-800">Our Company</h2>
          <p className="text-gray-700 mb-4 text-lg">
            ICIC Associates London LTD is a professional service provider specializing in electrical, plumbing, lift installation, and building services for both domestic and commercial clients throughout Greater London.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Led by our director Kamrul Islam Saikot, our team of skilled professionals is committed to delivering exceptional service and customer satisfaction on every project.
          </p>
          <p className="text-gray-700 text-lg">
            We pride ourselves on our friendly approach, attention to detail, and ability to meet the specific demands of each client, ensuring every service visit exceeds expectations.
          </p>
        </div>
        <div className="bg-business-50 p-8 rounded-2xl shadow-lg border border-business-100">
          <h3 className="text-2xl font-bold mb-6 text-business-700 text-center">Company Details</h3>
          <ul className="space-y-5">
            {details.map(({ icon: Icon, label, value }, idx) => (
              <li key={label} className="flex items-start gap-4">
                <span className="bg-business-100 rounded-full p-2 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-business-700" />
                </span>
                <div>
                  <span className="block font-medium text-business-800">{label}:</span>
                  <span className="block text-gray-700 text-lg">{value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default CompanyOverview; 