import React, { useState } from "react";
import classNames from "classnames";

import { Burger, SidebarMenu } from "../../components";
import "./Sidebar.scss";

const Sidebar = ({ className, backdropClassName }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={classNames("sidebar", className, { "sidebar--collapsed-false": !collapsed })}>
      <div className="sidebar__main">
        <div className="sidebar__burger">
          <Burger onClick={toggleCollapsed} isClose={!collapsed} />
        </div>
      </div>
      <div
        className={classNames("sidebar__extra", {
          "sidebar__extra--collapsed-false": !collapsed,
        })}
      >
        <SidebarMenu />
      </div>
      <div
        className={classNames(
          "sidebar-backdrop",
          { "sidebar-backdrop--collapsed-true": collapsed },
          backdropClassName
        )}
      ></div>
    </div>
  );
};

export default Sidebar;
