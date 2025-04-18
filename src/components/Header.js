import React from "react";
import "../css/Header.css";
import { IMAGES_URL, HEADER_ITEMS } from "../Global";
const Header = () => {
  return (
    <div className="header w-100 d-flex align-items-center justify-content-between">
      <img
        className="header-logo"
        id="logo"
        src={`${IMAGES_URL}/logo.svg`}
        alt="header-logo"
      />
      <ul className="header-items d-flex ">
        {HEADER_ITEMS.map((item, index) => (
          <li className="font-sm-400" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
