import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import classNames from "classnames";

import "./MainLink.scss";

const MainLink = ({ children, to, className, exact, external, type, target, mode }) => {
  let match = useRouteMatch({ path: to, exact });

  if (external) {
    return (
      <a
        href={to}
        className={classNames(
          "link",
          className,
          { "link--button": type === "button" },
          { "link--mode-dark": mode === "dark" },
          { "link--mode-dark-green": mode === "dark-green" }
        )}
        target={target === "_blank" && target}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <React.Fragment>
      <Link
        to={to}
        className={classNames(
          "link",
          className,
          { "link--active": match },
          { "link--button": type === "button" }
        )}
      >
        {type === "button" ? <div className="link__inner">{children}</div> : children}
      </Link>
    </React.Fragment>
  );
};

export default MainLink;
