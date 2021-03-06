import React, { useState } from "react";
import classNames from "classnames";

import { Burger, SidebarMenu, LanguageSwitcher } from "../../components";
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
        <div className="sidebar__switcher">
          <LanguageSwitcher />
        </div>
      </div>
      <div
        className={classNames("sidebar__extra", {
          "sidebar__extra--collapsed-false": !collapsed,
        })}
      >
        <SidebarMenu />
      </div>
      <div className="sidebar-backdrop">
        <div className={classNames("sidebar-backdrop__inner", backdropClassName)}></div>
      </div>
    </div>
  );
};

export default Sidebar;
