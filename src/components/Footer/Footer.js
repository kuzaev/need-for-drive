import React from "react";
import classNames from "classnames";

import { MainLink } from "../../components";
import "./Footer.scss";

const Footer = ({ className }) => {
  return (
    <footer className={classNames("footer", className)}>
      <p className="footer__copyright">© 2016-2019 «Need for drive»</p>
      <MainLink className="footer__tel" to="tel:84952342244" external mode="dark">
        8 (495) 234-22-44
      </MainLink>
    </footer>
  );
};

export default Footer;
