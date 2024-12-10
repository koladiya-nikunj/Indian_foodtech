import React, { useState } from "react";
import facebookImg from "../../public/images/facebook.png";
import LinkedinImg from "../../public/images/linkedin.png";
import youtubeImg from "../../public/images/youtube.png";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    let targetElement;

    if (targetId === "#") {
      targetElement = document.documentElement;
    } else {
      targetElement = document.getElementById(targetId);
    }

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { name: "Home", target: "#" },
    { name: "About Us", target: "about-us" },
    { name: "Private Label", target: "private-label" },
    { name: "Nut Butter", target: "nut-butter" },
    { name: "Media", target: "media" },
    { name: "Contact Us", target: "contact-us" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {[
                "Peanut Butter",
                "Almond Butter",
                "Cashew Butter",
                "Mixed Nut Butter",
              ].map((product) => (
                <li key={product}>
                  <a
                    href={`#${product.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-amber-400 hover:underline transition-colors duration-200"
                    onClick={(e) =>
                      handleScroll(
                        e,
                        product.toLowerCase().replace(/\s+/g, "-")
                      )
                    }
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.target}`}
                    className="hover:text-amber-400 hover:underline transition-colors duration-200"
                    onClick={(e) => handleScroll(e, link.target)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/p/Indian-foodtech-100083285323445/"
                target="_blank"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <img
                  src={facebookImg}
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/indian-foodtech-b5633829a/"
                target="_blank"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <img
                  src={LinkedinImg}
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCvEbXeFGPuQEDzlLx_NVBWA"
                target="_blank"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                <img
                  src={youtubeImg}
                  alt="Twitter"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            <address className="not-italic text-gray-400">
              Indian Foodtech Pvt. Ltd.
              <br />
              Ground Floor, Plot No 196-197-198,
              <br />
              Om Industrial Estate, Vibhag-1
              <br />
              Mankna, Kamrej, Surat, Gujarat-394325
              <br />
              <br />
              <p className="mt-2">
                <strong>Phone:</strong> +91-9714899711
                <br />
                <strong>Email:</strong>{" "}
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  target="_blank"
                  className="text-amber-400 hover:underline"
                >
                  info@indianfoodtech.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Hamburger Icon and Menu */}
        <div className="block md:hidden mt-6">
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          ></button>

          {/* Menu Dropdown */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-gray-800 text-white py-4 px-6 space-y-4`}
          >
            {quickLinks.map((link) => (
              <a
                href={`#${link.target}`}
                key={link.name}
                onClick={(e) => {
                  handleScroll(e, link.target);
                  setIsMenuOpen(false); // Close the menu after clicking a link
                }}
                className="block text-amber-400 hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
