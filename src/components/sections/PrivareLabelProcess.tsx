const values = [
    {
      title: 'Step - 1 : Consultation & Concept Development',
      description: 'We start with a detailed consultation to understand your brand\'s vision, market needs, and product requirements. Whether it’s creating a new flavor or replicating a specific recipe, our R&D team works closely with you to develop a product that fits your exact specifications.'
    },
    {
        title: 'Step - 2 : Recipe Customization',
        description: 'Our experienced food technologists will fine-tune the recipe based on your requirements. Whether it\'s natural, sweetened, high-protein, or unique flavored peanut butter, we create products that are aligned with your brand and the preferences of your target audience.'
      },
      {
        title: 'Step - 3 : Sampling & Approval',
        description: 'Once the recipe is finalized, we produce a sample batch for you to review. This allows you to evaluate the taste, texture, and overall quality of the product. We work with you to make any necessary adjustments to ensure it meets your satisfaction.'
      },
      {
        title: 'Step - 4 : Packaging Design & Branding',
        description: 'We offer a wide range of packaging options, from standard jars and bulk packaging (15 kg, 50 kg, and 250 kg) to custom designs that align with your brand’s image. Our design team collaborates with you to develop packaging that reflects your branding and stands out on the shelves.'
      },
      {
        title: 'Step - 5 : Production & Quality Control',
        description: 'Once the design and product are approved, we move into full-scale production. Our state-of-the-art facility ensures efficient manufacturing while maintaining the highest standards of quality control throughout the process. Every batch is tested for consistency, flavor, and safety to guarantee the final product meets your expectations.'
      },
      {
        title: 'Step - 6 : Shipping & Delivery',
        description: 'After production, we handle the logistics to ensure timely and safe delivery to your desired location. Whether it’s a small batch for retail or a bulk order for industrial use, we make sure your products are delivered efficiently and securely.'
      }
  ];
  
  const PrivateLabelProcess = () => {
    return (
        <div className="mt-12 space-y-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg bg-white shadow-md border-l-4 border-amber-500 hover:border-amber-700 transform transition-all duration-300 hover:scale-105"
            >
              <h4 className="text-xl font-semibold text-amber-700 mb-2">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
              <span className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
                Step {index + 1}
              </span>
            </div>
          ))}
        </div>
      );
  };
  
  export default PrivateLabelProcess;