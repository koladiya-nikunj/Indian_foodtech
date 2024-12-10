const mediaItems = [
  {
    title: "Product Launch",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=600",
    description: "Introducing our new organic nut butter line",
  },
  {
    title: "Industry Award",
    image:
      "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?auto=format&fit=crop&q=80&w=600",
    description: "Recognized for excellence in food manufacturing",
  },
  {
    title: "Factory Tour",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=600",
    description: "Take a virtual tour of our state-of-the-art facility",
  },
  {
    title: "Industry Award",
    image:
      "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?auto=format&fit=crop&q=80&w=600",
    description: "Recognized for excellence in food manufacturing",
  },
  {
    title: "Factory Tour",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=600",
    description: "Take a virtual tour of our state-of-the-art facility",
  },
  {
    title: "Industry Award",
    image:
      "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?auto=format&fit=crop&q=80&w=600",
    description: "Recognized for excellence in food manufacturing",
  },
  {
    title: "Product Launch",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=600",
    description: "Introducing our new organic nut butter line",
  },
  {
    title: "Industry Award",
    image:
      "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?auto=format&fit=crop&q=80&w=600",
    description: "Recognized for excellence in food manufacturing",
  },
  {
    title: "Factory Tour",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=600",
    description: "Take a virtual tour of our state-of-the-art facility",
  }
];

const MediaSection = () => {
  return (
    <section id="media" className="py-8 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
