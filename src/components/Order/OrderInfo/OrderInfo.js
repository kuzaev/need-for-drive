import React from "react";

import { MainLink } from "../../../components";
import "./OrderInfo.scss";

const OrderInfo = ({ className }) => {
  return (
    <div className="order__info order-info">
      <div className="order-info__title">Ваш заказ:</div>
      <ul className="order-info__list">
        <li className="order-info__item">
          <span className="order-info__item-key">Пункт выдачи</span>
          <span className="order-info__item-value">
            Ульяновск, Нариманова 42
          </span>
        </li>
        <li className="order-info__item">
          <span className="order-info__item-key">Модель</span>
          <span className="order-info__item-value">Hyndai, i30 N</span>
        </li>
        <li className="order-info__item">
          <span className="order-info__item-key">Цвет</span>
          <span className="order-info__item-value">Голубой</span>
        </li>
        <li className="order-info__item">
          <span className="order-info__item-key">Длительность аренды</span>
          <span className="order-info__item-value">1д 2ч</span>
        </li>
        <li className="order-info__item">
          <span className="order-info__item-key">Тариф</span>
          <span className="order-info__item-value">На сутки</span>
        </li>
        <li className="order-info__item">
          <span className="order-info__item-key">Полный бак</span>
          <span className="order-info__item-value">Да</span>
        </li>
      </ul>
      <div className="order-info__price">
        <span className="order-info__price-key">Цена:</span>
        <span className="order-info__price-value"> от 10 000 до 32 000 ₽</span>
      </div>
      <MainLink
        to="/order/model"
        className="order-info__button"
        disabled={true}
        type="button"
      >
        Выбрать модель
      </MainLink>
    </div>
  );
};

export default OrderInfo;
