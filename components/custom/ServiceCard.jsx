

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="w-12 h-12 bg-business-50 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-business-700" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
