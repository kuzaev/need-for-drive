import React from "react";

import { Header, Footer, MainLink } from "../../components";
import "./Home.scss";
import HomeSlider from "../HomeSlider";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero hero">
        <Header className="hero__header" />

        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-text">Каршеринг</span>
            <span className="hero__title-text hero__title-text--green">Need for drive</span>
          </h1>
          <p className="hero__subtitle">Поминутная аренда авто твоего города</p>
          <MainLink to="/order" className="hero__button" type="button">
            Забронировать
          </MainLink>
        </div>

        <Footer className="hero__footer" />
      </div>

      <HomeSlider className="home__slider"/>
    </div>
  );
};

export default Home;
