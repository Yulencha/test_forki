import React from "react";
import "./style.css";

function Navbar() {
  const items = [
    { value: "Преимущества Tele2", href: "#" },
    { value: "Тарифы", href: "#" },
    { value: "Акции и спецпредложения", href: "#" },
    { value: "Промотариф Tele2", href: "#" },
    { value: "Технология eSIM", href: "#" },
    { value: "Подключение нового абонента", href: "#" },
  ];

  return (
    <nav className="nav">
      {items.map((item, index) => (
        <a className="nav__item" href={item.href} key={index}>
          {item.value}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
