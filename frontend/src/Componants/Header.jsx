import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-100 p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="text-2xl font-bold">Logo</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#our-customers" className="hover:text-blue-500">
              Our Customers
            </a>
          </li>
          <li>
            <a href="#advantage" className="hover:text-blue-500">
              SpArts Advantage
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
