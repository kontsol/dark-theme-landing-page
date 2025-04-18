import React from "react";
import "../css/Button.css";

const Button = ({ text }) => {
  return (
    <button className="button m-auto">
      <a className="font-sm-700" href="/">
        {text}
      </a>
    </button>
  );
};

export default Button;
