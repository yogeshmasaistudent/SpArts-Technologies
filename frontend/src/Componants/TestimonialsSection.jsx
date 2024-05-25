import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white p-10">
      <h2 className="text-2xl font-bold mb-4">
        Happy Kids, Satisfied Parents!
      </h2>
      <Slider {...settings}>
        <div className="p-20">
          <div className="bg-yellow-100 p-4 rounded shadow-md">
            <p>"This academy is fantastic! My child loves it!"</p>
            <div className="mt-2 text-right">- Parent 1</div>
          </div>
        </div>
        <div className="p-20">
          <div className="bg-yellow-100 p-4 rounded shadow-md">
            <p>"Highly recommend to everyone."</p>
            <div className="mt-2 text-right">- Parent 2</div>
          </div>
        </div>
        <div className="p-20">
          <div className="bg-yellow-100 p-4 rounded shadow-md">
            <p>"Great experience for my kid."</p>
            <div className="mt-2 text-right">- Parent 3</div>
          </div>
        </div>
        <div className="p-20">
          <div className="bg-yellow-100 p-4 rounded shadow-md">
            <p>"Amazing staff and curriculum."</p>
            <div className="mt-2 text-right">- Parent 4</div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </Slider>
    </section>
  );
};

// Custom next arrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      &rarr;
    </div>
  );
};

// Custom previous arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      &larr;
    </div>
  );
};

export default TestimonialsSection;
