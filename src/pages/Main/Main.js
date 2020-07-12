import React from "react";

import { Sidebar } from "../../components";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Sidebar className="main__sidebar" backdropClassName={"main__sidebar-backdrop--home"}/>
      <div className="main__body">123</div>
    </div>
  );
};

export default Main;
