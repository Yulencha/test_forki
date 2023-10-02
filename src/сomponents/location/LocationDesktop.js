import React from "react";
import locationIcon from "./location-icon.svg";
import "./style.css";

const LocationDesktop = () => {
  return (
    <div className="location-desktop">
      <img className="location-desktop__icon" src={locationIcon} alt="logo" />
      <p>Москва и область</p>
    </div>
  );
};

export default LocationDesktop;
