import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { GeoButton } from "../../components";
import "./Header.scss";

const Header = ({ className }) => {
  return (
    <header className={classNames("header", className)}>
      <Link to="/" className="header__logo">
        Need for drive
      </Link>
      <GeoButton className="header__geo" />
    </header>
  );
};

export default Header;
