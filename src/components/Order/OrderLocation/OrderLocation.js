import React from "react";
import { YMaps, Map } from "react-yandex-maps";

import "./OrderLocation.scss";

const OrderLocation = ({ className }) => {
  return (
    <div className="order-location">
      <div className="form order-location__form">
        <div className="form__group form__group--order-location">
          <label
            className="form__label form__label--order-location"
            htmlFor="city"
          >
            Город
          </label>
          <input
            id="city"
            type="text"
            className="form__control"
            placeholder="Начните вводить город"
          />
        </div>
        <div className="form__group form__group--order-location">
          <label
            className="form__label form__label--order-location"
            htmlFor="pickup-point"
          >
            Пункт выдачи
          </label>
          <input
            id="pickup-point"
            type="text"
            className="form__control"
            placeholder="Начните вводить пункт выдачи"
          />
        </div>
      </div>
      <div className="order-location__map">
        <div className="order-location__map-title">Выбрать на карте:</div>
        <div className="order-location__map-inner">
          <YMaps>
            <Map
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
              width="100%"
              height="100%"
            />
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default OrderLocation;
