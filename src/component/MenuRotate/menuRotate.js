import React, { useState } from "react";
import "./form.css";

const MenuRotate = () => {
  const [isActive, setIsActive] = useState(false);

  const menuHandler = () => {
    setIsActive(!isActive);
  };

  const menuItems = ["J", "O", "S", "E", "P", "H", "P", "E"];

  return (
    <div className={`menu ${isActive ? "active" : ""}`}>
      <div onClick={menuHandler} className="toggle">
        +
      </div>
      {menuItems.map((item, index) => (
        <li key={index} style={{ "--i": index }}>
          <a href="/">{item}</a>
        </li>
      ))}
    </div>
  );
};

export default MenuRotate;
