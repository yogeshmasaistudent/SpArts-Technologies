import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentSection = () => {
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
    <section className="bg-blue-200 p-10">
      <h2 className="text-2xl font-bold mb-4">Explore Our Top Academies</h2>
      <Slider {...settings}>
        <div className="p-4">
          <div className="bg-white p-20 rounded shadow-md">Card 1</div>
        </div>
        <div className="p-4">
          <div className="bg-white p-20 rounded shadow-md">Card 2</div>
        </div>
        <div className="p-4">
          <div className="bg-white p-20 rounded shadow-md">Card 3</div>
        </div>
        <div className="p-4">
          <div className="bg-white p-20 rounded shadow-md">Card 4</div>
        </div>
        <div className="p-4">
          <div className="bg-white p-20 rounded shadow-md">Card 5</div>
        </div>
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

export default ContentSection;
