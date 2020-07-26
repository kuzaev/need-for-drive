import React from "react";

import "./OrderCarModel.scss";

import elantraImage from "../../../assets/images/cars/elantra.jpg";
import i30nImage from "../../../assets/images/cars/i30n.png";
import cretaImage from "../../../assets/images/cars/creta.png";
import sonataImage from "../../../assets/images/cars/sonata.png";

const OrderCarModel = () => {
  return (
    <div className="order-car-model">
      <div className="form">
        <div className="form__row">
          <div className="form__group">
            <input
              id="all"
              value="all"
              name="models-show"
              type="radio"
              className="form__control"
            />
            <label className="form__label" htmlFor="all">
              Все модели
            </label>
          </div>

          <div className="form__group">
            <input
              id="economic"
              value="economic"
              name="models-show"
              type="radio"
              className="form__control"
            />
            <label className="form__label" htmlFor="economic">
              Эконом
            </label>
          </div>

          <div className="form__group">
            <input
              id="models-show-premium"
              value="premium"
              name="models-show"
              type="radio"
              className="form__control"
            />
            <label className="form__label" htmlFor="models-show-premium">
              Премиум
            </label>
          </div>
        </div>
      </div>

      <ul className="order-car-model__list">
        <li className="order-car-model__item">
          <div className="order-car-model__item-title">ELANTRA</div>
          <div className="order-car-model__item-price">12 000 - 25 000 ₽</div>
          <img className="order-car-model__item-image" src={elantraImage} />
        </li>
        <li className="order-car-model__item">
          <div className="order-car-model__item-title">i30 N</div>
          <div className="order-car-model__item-price">10 000 - 32 000 ₽</div>
          <img className="order-car-model__item-image" src={i30nImage} />
        </li>
        <li className="order-car-model__item">
          <div className="order-car-model__item-title">CRETA</div>
          <div className="order-car-model__item-price">12 000 - 25 000 ₽</div>
          <img className="order-car-model__item-image" src={cretaImage} />
        </li>
        <li className="order-car-model__item">
          <div className="order-car-model__item-title">SONATA</div>
          <div className="order-car-model__item-price">10 000 - 32 000 ₽</div>
          <img className="order-car-model__item-image" src={sonataImage} />
        </li>
        <li className="order-car-model__item order-car-model__item--active">
          <div className="order-car-model__item-title">ELANTRA</div>
          <div className="order-car-model__item-price">12 000 - 25 000 ₽</div>
          <img className="order-car-model__item-image" src={elantraImage} />
        </li>
        <li className="order-car-model__item">
          <div className="order-car-model__item-title">i30 N</div>
          <div className="order-car-model__item-price">10 000 - 32 000 ₽</div>
          <img className="order-car-model__item-image" src={i30nImage} />
        </li>
        <li className="order-car-model__item">
          <div className="order-car-model__item-title">CRETA</div>
          <div className="order-car-model__item-price">12 000 - 25 000 ₽</div>
          <img className="order-car-model__item-image" src={cretaImage} />
        </li>
        <li className="order-car-model__item">
          <div className="order-car-model__item-title">SONATA</div>
          <div className="order-car-model__item-price">10 000 - 32 000 ₽</div>
          <img className="order-car-model__item-image" src={sonataImage} />
        </li>
      </ul>
    </div>
  );
};

export default OrderCarModel;
