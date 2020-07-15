import React from "react";
import Slider from "react-slick";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";

import { HomeSliderSlide } from "../../components";
import "./HomeSlider.scss";

import parkingImage from "../../assets/images/home-slider/parking.jpg";
import insuranceImage from "../../assets/images/home-slider/insurance.jpg";
import petrolImage from "../../assets/images/home-slider/petrol.jpg";
import serviceImage from "../../assets/images/home-slider/service.jpg";

import { ReactComponent as ArrowLeft } from "../../assets/images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";

const HomeSliderDots = ({ children }) => {
  return (
    <div className="home-slider-dots">
      <ul className="home-slider-dots__list">{children}</ul>
    </div>
  );
};

const HomeSliderDot = ({ onClick }) => {
  return <div className="home-slider-dot" onClick={onClick}></div>;
};

const HomeSliderPrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={classNames("home-slider-button home-slider-button--prev", className)}
      onClick={onClick}
    >
      <ArrowLeft className="home-slider-button__icon" />
    </div>
  );
};

const HomeSliderNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={classNames("home-slider-button home-slider-button--next", className)}
      onClick={onClick}
    >
      <ArrowRight className="home-slider-button__icon" />
    </div>
  );
};

const HomeSlider = ({ className }) => {
  const slides = [
    {
      id: 1,
      image: parkingImage,
      title: "Бесплатная парковка",
      text:
        "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      link: "parking",
      color: "green",
    },
    {
      id: 2,
      image: insuranceImage,
      title: "Страховка",
      text: "Полная страховка страховка автомобиля",
      link: "insurance",
      color: "turquoise",
    },
    {
      id: 3,
      image: petrolImage,
      title: "Бензин",
      text: "Полный бак на любой заправке города за наш счёт",
      link: "petrol",
      color: "pink",
    },
    {
      id: 4,
      image: serviceImage,
      title: "Обслуживание",
      text: "Автомобиль проходит еженедельное ТО",
      link: "service",
      color: "violet",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: "",
    prevArrow: <HomeSliderPrevArrow />,
    nextArrow: <HomeSliderNextArrow />,
    appendDots: (dots) => <HomeSliderDots>{dots}</HomeSliderDots>,
    customPaging: (i) => <HomeSliderDot />,
  };

  return (
    <Slider className="home-slider" {...settings}>
      {slides.map((slide) => (
        <HomeSliderSlide key={slide.id} {...slide} />
      ))}
    </Slider>
  );
};

export default HomeSlider;
