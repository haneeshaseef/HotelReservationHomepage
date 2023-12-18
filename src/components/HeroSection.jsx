import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hotel_room from "../assets/hotel_room.jpg";
import bed_room from "../assets/bed_room.jpg";
import beach_side from "../assets/beach_side.jpg";
import swiming_pool from "../assets/swiming_pool.jpg";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="relative">
      <Slider {...sliderSettings}>
        <div>
          <img
            src={swiming_pool}
            alt="Slide 1"
            className="w-full h-screen object-cover"
          />
        </div>
        <div>
          <img
            src={beach_side}
            alt="Slide 2"
            className="w-full h-screen object-cover"
          />
        </div>
        <div>
          <img
            src={bed_room}
            alt="Slide 3"
            className="w-full h-screen object-cover"
          />
        </div>
        <div>
          <img
            src={hotel_room}
            alt="Slide 4"
            className="w-full h-screen object-cover"
          />
        </div>
      </Slider>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold mb-6 font-poppins">
          Create Warm Memories in your Winter Adventure
        </h1>
        <p className="text-lg font-man">
          our selected destinations for your winter getaway
        </p>
      </div>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 w-full max-w-screen-lg">
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSection;
