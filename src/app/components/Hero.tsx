"use client";
import Slider from "react-slick";

import React from "react";
import Slide from "./Slide";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  const slideData = [
    {
      id: 0,
      img: "/3.PNG",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION",
      price: "$30",
    },
    {
      id: 1,
      img: "/man.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN FASHION",
      price: "$35",
    },
    {
      id: 2,
      img: "/5.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];
  return (
    <div>
      <div className="container pt-6 lg:pt-0"></div>
      <Slider {...settings}>
        {slideData.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Hero;
