import React from "react";
import classNames from "classnames";

import { ReactComponent as GeoIcon } from "../../assets/images/geo-icon.svg";
import "./GeoButton.scss";

const GeoButton = ({ className }) => {
  return (
    <button className={classNames("geo-button", className)}>
      <GeoIcon className="geo-button__icon" />
      <span className="geo-button__city">Ульяновск</span>
    </button>
  );
};

export default GeoButton;
