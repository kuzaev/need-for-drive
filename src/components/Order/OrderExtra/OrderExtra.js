import React from "react";

import "./OrderExtra.scss";

const OrderExtra = ({ className }) => {
  return (
    <div className="order-extra">
      <form className="form">
        <div className="form__group-wrap">
          <div className="form__group-wrap-title">Цвет</div>
          <div className="form__row">
            <div className="form__group">
              <input
                id="all"
                value="all"
                name="color"
                type="radio"
                className="form__control"
              />
              <label className="form__label" htmlFor="all">
                Любой
              </label>
            </div>

            <div className="form__group">
              <input
                id="red"
                value="red"
                name="color"
                type="radio"
                className="form__control"
              />
              <label className="form__label" htmlFor="red">
                Красный
              </label>
            </div>

            <div className="form__group">
              <input
                id="blue"
                value="blue"
                name="color"
                type="radio"
                className="form__control"
              />
              <label className="form__label" htmlFor="blue">
                Голубой
              </label>
            </div>
          </div>
        </div>

        <div className="form__group-wrap">
          <div className="form__group-wrap-title">Дата аренды</div>
          <div className="form__group">
            <label
              className="form__label form__label--lease-date"
              htmlFor="pickup-point"
            >
              С
            </label>
            <input
              id="pickup-point"
              type="text"
              className="form__control"
              placeholder="Введите дату и время"
              autocomplete="off"
            />
          </div>
          <div className="form__group">
            <label
              className="form__label form__label--lease-date"
              htmlFor="pickup-point"
            >
              До
            </label>
            <input
              id="pickup-point"
              type="text"
              className="form__control"
              placeholder="Введите дату и время"
              autocomplete="off"
            />
          </div>
        </div>

        <div className="form__group-wrap">
          <div className="form__group-wrap-title">Тариф</div>
          <div className="form__group">
            <input
              id="minute"
              value="minute"
              name="tariff"
              type="radio"
              className="form__control"
            />
            <label className="form__label" htmlFor="minute">
              Поминутно, 7₽/мин
            </label>
          </div>

          <div className="form__group">
            <input
              id="day"
              value="day"
              name="tariff"
              type="radio"
              className="form__control"
            />
            <label className="form__label" htmlFor="day">
              На сутки, 1999 ₽/сутки
            </label>
          </div>
        </div>

        <div className="form__group-wrap">
          <div className="form__group-wrap-title">Доп услуги</div>
          <div className="form__group">
            <input
              id="full-tank"
              name="full-tank"
              type="checkbox"
              className="form__control"
            />
            <label className="form__label" htmlFor="full-tank">
              Полный бак, 500р
            </label>
          </div>

          <div className="form__group">
            <input
              id="baby-chair"
              name="baby-chair"
              type="checkbox"
              className="form__control"
            />
            <label className="form__label" htmlFor="baby-chair">
              Детское кресло, 200р
            </label>
          </div>

          <div className="form__group">
            <input
              id="right-hand"
              name="right-hand"
              type="checkbox"
              className="form__control"
            />
            <label className="form__label" htmlFor="right-hand">
              Правый руль, 1600р
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderExtra;
