import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-200 p-13 flex items-center justify-center">
      <div className="bg-slate-100 p-0 rounded-lg shadow-lg max-w-20xl w-full vh-140">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1 ml-4">
            <h1 className="text-3xl font-bold mb-4">
              Find the Best Activity for your Child!
            </h1>
            <p className="mb-4">
              Discover a variety of activities that will help your child grow
              and learn.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                For Academies
              </button>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
                SpArts in your home
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mb-4 md:mb-0 md:ml-4 order-1 md:order-2">
            {/* Placeholder for Image */}
            <div className="w-full h-64 bg-gray-300 rounded-md">
              {/* Replace the div below with an img tag or background image */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("your-image-url-here")' }}
              >
                {/* You can also use an img tag: */}

                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/525/1007/desktop-wallpaper-football-is-my-aesthetic-soccer-players-women-thumbnail.jpg"
                  alt="Hero Image"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
