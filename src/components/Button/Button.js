import React from "react";
import classNames from "classnames";

import { Loader } from "../../components";
import "./Button.scss";

const Button = ({ children, className, disabled, loading }) => {
  return (
    <button
      className={classNames("button", className, {
        "button--loading": loading,
        "button--disabled": disabled,
      })}
      disabled={disabled || loading}
    >
      <div className="button__inner">{loading ? <Loader /> : children}</div>
    </button>
  );
};

export default Button;
