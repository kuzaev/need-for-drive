import React from "react";
import classNames from "classnames";

import { MainLink } from "../../components";
import "./HomeSliderSlide.scss";

const HomeSliderSlide = ({ className, image, title, text, link, color }) => {
  return (
    <div
      className={classNames("home-slider-slide", { className })}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="home-slider-slide__content">
        <h3 className="home-slider-slide__title">{title}</h3>
        <p className="home-slider-slide__text">{text}</p>
        <MainLink className="home-slider-slide__link" to={`/${link}`} color={color} type="button">
          Подробнее
        </MainLink>
      </div>
    </div>
  );
};

export default HomeSliderSlide;
