import React, { useState, useEffect } from "react";

const Footer = () => {
  const [buttonColor, setButtonColor] = useState("#3182ce"); // Initial button color
  const colors = [
    "#3182ce",
    "#319795",
    "#f6ad55",
    "#ed8936",
    "#e53e3e",
    "#9f7aea",
  ]; // Array of gradient colors

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setButtonColor(randomColor);
    }, 1000); // Change color every second

    return () => clearInterval(interval);
  }, [colors]);

  const getRandomText = () => {
    const texts = ["Stay Updated", "Subscribe Now", "Get Latest News"];
    return texts[Math.floor(Math.random() * texts.length)];
  };

  return (
    <footer className="bg-yellow-500 p-4 text-center">
      <p className="text-2xl font-bold animate-pulse">{getRandomText()}</p>
      <form className="mt-4 flex justify-center items-center">
        <input
          type="email"
          placeholder="E-mail"
          className="p-2 rounded-l transition-transform duration-300 transform focus:scale-105"
        />
        <button
          type="submit"
          className="py-2 px-4 rounded-r transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
          style={{
            background: `linear-gradient(to right, ${buttonColor}, #805ad5)`,
          }}
        >
          Subscribe
        </button>
      </form>
    </footer>
  );
};

export default Footer;
