import React from "react";

import { NavLink } from "react-router-dom";
import "./OrderBreadcrumbs.scss";
import { ReactComponent as CaretRight } from "../../../assets/images/caret-right.svg";

const OrderBreadcrumbs = ({ className }) => {
  return (
    <div className="order-breadcrumbs">
      <div className="order-breadcrumbs__container">
        <NavLink to="/order/location" className="order-breadcrumbs__item">
          Местоположение
        </NavLink>
        <CaretRight className="order-breadcrumbs__separator" />
        <NavLink to="/order/model" className="order-breadcrumbs__item">
          Модель
        </NavLink>
        <CaretRight className="order-breadcrumbs__separator" />
        <NavLink to="/order/extra" className="order-breadcrumbs__item">
          Дополнительно
        </NavLink>
        <CaretRight className="order-breadcrumbs__separator" />
        <NavLink to="/order/result" className="order-breadcrumbs__item">
          Итого
        </NavLink>
      </div>
    </div>
  );
};

export default OrderBreadcrumbs;
