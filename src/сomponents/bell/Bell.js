import React, { useState } from "react";
import "./style.css";

const Bell = () => {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`notification-box ${
        isActive ? "notification-box__active" : ""
      }`}
      onClick={handleClick}
    >
      <div className="notification-bell">
        <span className="bell-top"></span>
        <span className="bell-middle"></span>
        <span className="bell-bottom"></span>
        <span className="bell-rad"></span>
      </div>
      <div className="notification-ping"></div>
    </div>
  );
};

export default Bell;
