const values = [
  {
    title: "Quality First",
    description:
      "Quality is at the core of everything we do. From sourcing the best ingredients to maintaining strict manufacturing standards, we ensure that every product meets the highest quality benchmarks.",
  },
  {
    title: "Health Focus",
    description:
      "We are dedicated to promoting health and wellness through our products. By carefully selecting ingredients that support a balanced lifestyle, we ensure that our offerings contribute to the well-being of our customers.",
  },
  {
    title: "Customer-Centric",
    description:
      "We believe in building long-term partnerships with our clients by understanding their needs and providing tailored solutions. Our flexible approach allows us to adapt to ever-changing market demands.",
  },
  {
    title: "Innovation",
    description:
      "We constantly strive to innovate, introducing new flavors and formulations to meet the dynamic needs of the food industry. Customization is our forte, and we work closely with our clients to develop new, exciting products.",
  },
  {
    title: "Integrity",
    description:
      "We operate with integrity, adhering to ethical business practices and transparent processes that build trust with our clients, employees, and partners.",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to environmentally friendly practices, from sourcing ingredients to minimizing waste during production, ensuring our business operations are sustainable for the long term.",
  },
];

const CompanyValues = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-center mb-8 text-amber-700">
        Our Values
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border-[1.5px] border-yellow-800 transform transition-all duration-300 hover:rotate-y-12 hover:shadow-2xl hover:scale-105"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <h4 className="text-xl font-semibold text-gray-800">
                {value.title}
              </h4>
            </div>
            <p className="text-gray-600 text-lg">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyValues;
