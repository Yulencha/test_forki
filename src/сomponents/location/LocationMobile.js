import React from "react";
import locationIcon from "./location-icon.svg";
import "./style.css";

const LocationMobile = () => {
  return (
    <div className="location-mobile">
      <img className="location-mobile__icon" src={locationIcon} alt="logo" />
      <p>Москва и область</p>
    </div>
  );
};

export default LocationMobile;
