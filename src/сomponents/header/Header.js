import { React, useRef, useState } from "react";
import Bell from "../bell/Bell";
import LocationMobile from "../location/LocationMobile";
import LocationDesktop from "../location/LocationDesktop";
import Navbar from "../navbar/Navbar";
import { useClickOutside } from "../../hooks/useClickOutside";
import BurgerButton from "../burgerButton/BurgerButton";
import "./style.css";
import logo from "./logo.svg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (menuActive) {
      setTimeout(() => setMenuActive(false), 200);
    }
  });

  return (
    <header className="header">
      <div className="header__top wrap">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__wrapper">
          <LocationDesktop />
          <Bell />
          <BurgerButton
            isActive={menuActive}
            onClick={() => setMenuActive(!menuActive)}
          />
        </div>
      </div>

      <div
        className={
          menuActive ? "header__nav header__nav_open wrap" : "header__nav wrap"
        }
        ref={menuRef}
      >
        <Navbar />
        <LocationMobile />
      </div>
    </header>
  );
};

export default Header;
