import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 p-4 text-center">
      <p>Stay Updated</p>
      <form className="mt-4">
        <input type="email" placeholder="E-mail" className="p-2 rounded" />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded ml-2"
        >
          Subscribe
        </button>
      </form>
    </footer>
  );
};

export default Footer;
