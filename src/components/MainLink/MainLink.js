import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import classNames from "classnames";

import "./MainLink.scss";

const MainLink = ({ children, to, className, exact, external }) => {
  let match = useRouteMatch({ path: to, exact });

  if (external) {
    return (
      <a
        href={to}
        className={classNames("link", className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <React.Fragment>
      <Link to={to} className={classNames("link", className, { active: match })}>
        {children}
      </Link>
    </React.Fragment>
  );
};

export default MainLink;
