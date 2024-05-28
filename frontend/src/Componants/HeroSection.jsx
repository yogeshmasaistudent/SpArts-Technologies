import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ReactTypingEffect from "react-typing-effect";
import football from "./football.png";
import guitar from "./guitar.png";
import "./animations.css";

const HeroSection = () => {
  return (
    <div className="relative h-[600px] flex flex-col overflow-hidden">
      <div className="w-full absolute top-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F9E79F"
            fillOpacity="1"
            d="M0,288L34.3,266.7C68.6,245,137,203,206,165.3C274.3,128,343,96,411,85.3C480,75,549,85,617,106.7C685.7,128,754,160,823,192C891.4,224,960,256,1029,245.3C1097.1,235,1166,181,1234,133.3C1302.9,85,1371,43,1406,21.3L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="lg:flex md:flex-row justify-between h-[100%] md:h-[80%] z-10">
        <div className="w-full lg:w-[70%] px-8 md:px-24 lg:px-24 xl:px-24">
          <div className="flex flex-col gap-2 mt-24 md:mt-44 lg:mt-20 xl:mt-24 text-6xl">
            <div className="typing-wrapper">
              <span className="gradient-text">
                <ReactTypingEffect text="Find the Best" />
              </span>
            </div>
            <div className="typing-wrapper">
              <span className="gradient-text">
                <ReactTypingEffect text="Activity for your" />
              </span>
            </div>
            <div className="typing-wrapper flex items-center">
              <span className="gradient-text">
                <ReactTypingEffect text="Child" />
              </span>
              <IoIosArrowDroprightCircle className="text-sky-300 sm:ml-4 md:ml-44 lg:ml-44 xl:ml-64" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 mt-10">
            <button className="button-animate p-0 px-9 h-12 w-48 rounded-3xl text-white font-medium">
              <span className="button-animate-text">For Academies</span>
            </button>
            <button className="button-animate p-0 px-9 h-12 w-48 rounded-3xl text-white font-medium">
              <span className="button-animate-text">SpArts in your home</span>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex gap-0">
          <img src={football} alt="spArts" className="w-[60%]" />
          <img src={guitar} alt="spArts" className="w-[40%]" />
        </div>
      </div>

      <div className="w-full absolute bottom-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 400">
          <path
            fill="#D6EAF8"
            fillOpacity="1"
            d="M0,288L48,293.3C96,299,192,309,288,309.3C384,309,480,299,576,266.7C672,235,768,181,864,176C960,171,1056,213,1152,202.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
