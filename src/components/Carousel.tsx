import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=1200",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedImages = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === images.length) {
      setCurrentIndex(0);
    }
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full relative">
      <div className="relative sm:h-[400px] md:h-[600px] h-[200px] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: isTransitioning ? "1s" : "0s",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((image, index) => (
            <div key={index} className="flex-none w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex % images.length === index
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
