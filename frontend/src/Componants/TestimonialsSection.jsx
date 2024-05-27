import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"; // Ensure you have this file for additional styles

const TestimonialsSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const testimonials = [
    {
      text: "My child's growth and happiness have skyrocketed since joining!",
      author: "Proud Parent",
      image: "url_to_image_1.jpg",
    },
    {
      text: "This academy has made learning a joyful experience for my kid!",
      author: "Happy Parent",
      image: "url_to_image_2.jpg",
    },
    {
      text: "The amazing team at the academy has truly transformed!",
      author: "Grateful Parent",
      image: "url_to_image_3.jpg",
    },
    {
      text: "I never imagined my child could learn so much and have fun!",
      author: "Amazed Parent",
      image: "url_to_image_4.jpg",
    },
    {
      text: "The teachers are dedicated and caring, making every day special.",
      author: "Appreciative Parent",
      image: "url_to_image_5.jpg",
    },
  ];

  const getRandomColor = () => {
    const colors = [
      "text-red-600",
      "text-blue-600",
      "text-green-600",
      "text-yellow-600",
      "text-purple-600",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change the duration as needed

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed
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
    <section className="bg-white p-15">
      <h2 className="text-2xl font-bold mb-4 text-right bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
        The Fast Grateful
      </h2>
      <div className="testimonial-slider-container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="testimonial-card bg-golden rounded-lg shadow-lg h-full border-4 border-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-border">
                <div className="p-6 bg-white rounded-lg">
                  <p className="text-lg font-medium mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-end items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-8 h-8 rounded-full mr-2 object-cover"
                    />
                    <span>- {testimonial.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
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
