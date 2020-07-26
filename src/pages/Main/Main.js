import React from "react";
import { Switch, Route } from "react-router-dom";

import { Sidebar, Home, Order } from "../../components";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Sidebar className="main__sidebar" backdropClassName={"main__sidebar-backdrop--home"} />
      <div className="main__body">
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
