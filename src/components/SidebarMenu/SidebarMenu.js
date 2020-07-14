import React from "react";

import { MainLink } from "../../components";
import { ReactComponent as TelegramIcon } from "../../assets/images/social-icon-telegram.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/social-icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/social-icon-instagram.svg";
import "./SidebarMenu.scss";

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <ul className="sidebar-menu__nav">
        <li className="sidebar-menu__nav-item">
          <MainLink to="/park" className="sidebar-menu__nav-link">
            Парковка
          </MainLink>
        </li>
        <li className="sidebar-menu__nav-item">
          <MainLink to="/strah" className="sidebar-menu__nav-link">
            Страховка
          </MainLink>
        </li>
        <li className="sidebar-menu__nav-item">
          <MainLink to="/benzin" className="sidebar-menu__nav-link">
            Бензин
          </MainLink>
        </li>
        <li className="sidebar-menu__nav-item">
          <MainLink to="/obsl" className="sidebar-menu__nav-link">
            Обслуживание
          </MainLink>
        </li>
      </ul>
      <ul className="sidebar-menu__socials">
        <li className="sidebar-menu__social-item">
          <MainLink
            className="sidebar-menu__social-link"
            to="https://telegram.org"
            external
            target="_blank"
          >
            <TelegramIcon />
          </MainLink>
        </li>
        <li className="sidebar-menu__social-item">
          <MainLink
            className="sidebar-menu__social-link"
            to="https://www.facebook.com"
            external
            target="_blank"
          >
            <FacebookIcon />
          </MainLink>
        </li>
        <li className="sidebar-menu__social-item">
          <MainLink
            className="sidebar-menu__social-link"
            to="https://www.instagram.com/"
            external
            target="_blank"
          >
            <InstagramIcon />
          </MainLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
