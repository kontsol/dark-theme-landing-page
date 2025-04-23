import React from "react";
import "../css/Button.css";

const Button = ({ text, handleSubmit, type }) => {
  return (
    <button
      className="col-12 col-md-4 button m-auto py-3 px-4"
      onClick={handleSubmit}
      type={type}
    >
      <a className="font-sm-700">{text}</a>
    </button>
  );
};

export default Button;
