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
      <h2 className="text-2xl font-bold mb-4 text-amber-500">
        Explore Our Top Academies
      </h2>
      <Slider {...settings}>
        <div className="p-4">
          <div className="bg-white p-20 rounded shadow-md">
            <img
              src="https://st4.depositphotos.com/1682792/20544/i/450/depositphotos_205445200-stock-photo-orenburg-russia-august-2017-year.jpg"
              alt="Academy 1"
              style={{ width: "100%", height: "250px" }}
            />
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-20 rounded shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2bdpaINKf5qp8LQGXvwp5S2QQyrGIWdqn-P72pgMucFLQOGeLteu9-gNdHTkuoxBuYw&usqp=CAU"
              alt="Academy 2"
              style={{ width: "100%", height: "250px" }}
            />
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-20 rounded shadow-md">
            <img
              src="https://www.shutterstock.com/image-photo/boy-soccer-player-training-running-260nw-1308980404.jpg"
              alt="Academy 3"
              style={{ width: "100%", height: "250px" }}
            />
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-20 rounded shadow-md">
            <img
              src="https://media.glassdoor.com/l/13/ef/0b/db/benjamin%C3%A2-s-first-violin-lesson.jpg"
              alt="Academy 4"
              style={{ width: "100%", height: "250px" }}
            />
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-20 rounded shadow-md">
            <img
              src="https://c8.alamy.com/comp/2PYKRRE/professional-teacher-learning-children-to-play-musical-instruments-in-music-class-2PYKRRE.jpg"
              alt="Academy 5"
              style={{ width: "100%", height: "250px" }}
            />
          </div>
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
