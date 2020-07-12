import React from "react";

import { Sidebar, Home } from "../../components";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Sidebar className="main__sidebar" backdropClassName={"main__sidebar-backdrop--home"} />
      <div className="main__body">
        <Home />
      </div>
    </div>
  );
};

export default Main;
