import React from "react";
import classNames from "classnames";

import "./Burger.scss";

const Burger = ({ isClose, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames("burger", {
        "burger--close": isClose,
      })}
    >
      <span className="burger__line burger__line--top"></span>
      <span className="burger__line burger__line--center"></span>
      <span className="burger__line burger__line--bottom"></span>
    </div>
  );
};

export default Burger;
