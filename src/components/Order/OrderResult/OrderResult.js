import React from "react";

import "./OrderResult.scss";
import i30nImage from "../../../assets/images/cars/i30n.png";

const OrderResult = () => {
  return (
    <div className="order-result">
      <div className="order-result__body">
        <div className="order-result__title">Hyndai, i30 N</div>
        <div className="order-result__plate-number">K 761 HA 73</div>
        <ul className="order-result__info-list">
          <li className="order-result__info-item">
            <span className="order-result__info-item-key">Топливо</span>
            <span className="order-result__info-item-value">&nbsp;100%</span>
          </li>
          <li className="order-result__info-item">
            <span className="order-result__info-item-key">Доступна с</span>
            <span className="order-result__info-item-value">
              &nbsp;12.06.2019 12:00
            </span>
          </li>
        </ul>
      </div>
      <img className="order-result__image" src={i30nImage} />
    </div>
  );
};

export default OrderResult;
