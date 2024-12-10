const MissionVision = () => {
  const sections = [
    {
      title: "Our Mission",
      content: [
        "Our mission is to create the finest nut butters and spreads by combining high-quality ingredients, advanced manufacturing practices, and a commitment to customer satisfaction. We aim to foster long-term relationships with our clients by providing customized solutions, private labeling, and innovative flavors that appeal to a diverse, global market.",
        "We are dedicated to growing our global presence by expanding into new markets and continuously improving our processes to deliver the best value to our customers."
      ]
    },
    {
      title: " Our Vision",
      content: [
        "At Indian Foodtech, our vision is to become the global leader in nut butter manufacturing by providing innovative, high-quality, and tailored solutions to our partners worldwide. We aim to set new standards in the industry by consistently delivering excellence in product development, customer service, and operational efficiency."
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-16 mt-20">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white rounded-lg border-2 border-yellow-800 shadow-lg p-8 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="md:w-1/3 flex-shrink-0 flex items-center justify-center bg-amber-100 rounded-lg p-4">
            <h3 className="text-3xl font-bold text-amber-700 text-center">
              {section.title}
            </h3>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 md:ml-6">
            {section.content.map((paragraph, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MissionVision;