import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (id === "home") {
      window.history.pushState(null, "", "/"); 
      window.scrollTo({
        top: 0,  
        behavior: "smooth", 
      });
      setIsMenuOpen(false);
      return;
    }
    if (element) {
      const offset = 64; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.history.pushState(null, "", `/${id}`);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-950 shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <h1
            className="lg:text-3xl text-2xl font-bold text-white cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            Indian Foodtech
          </h1>

          <nav className="hidden md:flex space-x-5">
            {[
              "Home",
              "About Us",
              "Private Label",
              "Nut Butter",
              "Media",
              "Contact Us",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))
                }
                className="text-white hover:text-amber-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {[
              "Home",
              "About Us",
              "Private Label",
              "Nut Butter",
              "Media",
              "Contact Us",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(/\s+/g, "-"))
                }
                className="block text-white hover:text-amber-600 transition-colors py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
