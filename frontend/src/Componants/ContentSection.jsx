import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const colors = [
    "text-amber-500",
    "text-red-500",
    "text-green-500",
    "text-blue-500",
    "text-purple-500",
  ];
  const textArray = ["Explore", "Our", "Top", "Academies"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 500);

    return () => clearInterval(interval);
  }, [textArray.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
      <h2 className="text-2xl font-bold mb-4">
        {textArray.map((text, index) => (
          <span
            key={index}
            className={
              textIndex === index ? colors[textIndex] : "text-gray-700"
            }
          >
            {text}{" "}
          </span>
        ))}
      </h2>
      <Slider {...settings}>
        <div className="p-5">
          <div className="bg-white p-4 rounded shadow-md h-64">
            <img
              src="https://m.media-amazon.com/images/I/714+S3gZM5L._AC_UF350,350_QL80_.jpg"
              alt="Academy 1"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-4 rounded shadow-md h-64">
            <img
              src="https://media.istockphoto.com/id/1356126124/photo/little-boys-play-with-a-wooden-railroad-in-a-stylish-nursery.jpg?s=612x612&w=0&k=20&c=H5FPQc4zFEHhq1Ug77T8L9PDTFkWAcMsawbFGqKEfvU="
              alt="Academy 2"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-4 rounded shadow-md h-64">
            <img
              src="https://img.freepik.com/free-photo/study-group-learning-library_23-2149215456.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1708300800&semt=ais"
              alt="Academy 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-4 rounded shadow-md h-64">
            <img
              src="https://images.unsplash.com/photo-1602674809970-89073c530b0a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Academy 4"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white p-4 rounded shadow-md h-64">
            <img
              src="https://media.istockphoto.com/id/872697992/photo/little-girl-receives-instruction-during-violin-class.jpg?s=612x612&w=0&k=20&c=feB3fXC1x7NoVoB9AnftvJPBl9Aa7lT1ugOAp3eMV_I="
              alt="Academy 5"
              className="w-full h-full object-cover rounded"
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
