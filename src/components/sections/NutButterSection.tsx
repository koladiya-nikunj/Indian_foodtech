import { useRef, useEffect } from "react";

const nutButters = [
  {
    name: "Peanut Butter",
    image:
    "https://images.unsplash.com/photo-1590080876477-fa40830fe6f9?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Almond Butter",
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Cashew Butter",
    image:
      "https://images.unsplash.com/photo-1590080876477-fa40830fe6f9?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Mixed Nut Butter",
    image:
      "https://images.unsplash.com/photo-1590080874088-eec64895b423?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Chocolate Peanut Butter",
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=400",
  },
];

const NutButterSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    let intervalId: number;

    const startScrolling = () => {
      if (scroll) {
        intervalId = window.setInterval(() => {
          if (scroll.scrollLeft >= scroll.scrollWidth / 2) {
            // Reset scroll position to the start of the list for seamless effect
            scroll.scrollLeft = 0;
          } else {
            scroll.scrollLeft += 1;
          }
        }, 10);
      }
    };

    startScrolling();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="nut-butter" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">Our Nut Butters</h2>
        <div ref={scrollRef} className="flex overflow-x-hidden space-x-4 py-4">
          {[...nutButters, ...nutButters].map((butter, index) => (
            <div
              key={`${butter.name}-${index}`}
              className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={butter.image}
                alt={butter.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{butter.name}</h3>
                <p className="text-gray-600">100% Natural, No Added Sugar</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutButterSection;
