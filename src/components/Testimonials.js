import React from "react";
import "../css/Testimonials.css";
import { TESTIMONIALS } from "../Global";

const Testimonials = () => {
  return (
    <div className="testimonials py-5 my-5">
      {TESTIMONIALS.map((item, index) => (
        <div
          className="testimonials-item d-flex flex-column align-items-center justify-content-center"
          key={index}
        >
          <img src={item.icon} alt={item.alt} />
          <h1 className="font-md-700">{item.heading}</h1>
          <p className="font-sm-400">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
