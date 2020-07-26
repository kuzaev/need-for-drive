import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "../../components";
import OrderLocation from "./OrderLocation";
import OrderCarModel from "./OrderCarModel";
import OrderExtra from "./OrderExtra";
import OrderResult from "./OrderResult";
import OrderBreadcrumbs from "./OrderBreadcrumbs";
import OrderInfo from "./OrderInfo";

import "./Order.scss";

const Order = () => {
  return (
    <div className="order">
      <Header className="order__header" />
      <OrderBreadcrumbs />
      <div className="order__body">
        <div className="order__content">
          <Switch>
            <Route path="/order/location">
              <OrderLocation />
            </Route>
            <Route path="/order/model">
              <OrderCarModel />
            </Route>
            <Route path="/order/extra">
              <OrderExtra />
            </Route>
            <Route path="/order/result">
              <OrderResult />
            </Route>
            <Redirect to="/order/location" />
          </Switch>
        </div>
        <OrderInfo />
      </div>
    </div>
  );
};

export default Order;
