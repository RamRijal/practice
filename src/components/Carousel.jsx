'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import car1 from "../app/assets/pexels-alexgtacar-1592384.jpg";
import car2 from "../app/assets/pexels-mike-bird-170811.jpg";
import car3 from "../app/assets/pexels-mike-bird-244206.jpg";
import car4 from "../app/assets/pexels-nordic-overdrive-627678.jpg";
import car5 from "../app/assets/pexels-pixabay-210019.jpg";

import CarouselItem from "./CarouselItem";

const images = [car1, car2, car3, car4, car5];
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 3,
    slideToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };
  const renderImages = () => {
    images.map((image, index) => <CarouselItem key={index} image={image} />);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-full">
        <Slider {...settings}>
          {renderImages()}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
