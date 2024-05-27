import React, { useEffect, useState } from "react";
import "./Header.css"; // Import the CSS file for additional styles

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`p-4 flex justify-between items-center sticky top-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-yellow-200 shadow-md" : "bg-teal-100"
      }`}
    >
      <div className="text-2xl font-bold transition-transform duration-300 transform hover:scale-110 hover:rotate-3">
        Logo
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#our-customers" className="animated-link">
              Our Customers
            </a>
          </li>
          <li>
            <a href="#advantage" className="animated-link">
              SpArts Advantage
            </a>
          </li>
          <li>
            <a href="#contact" className="animated-link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
