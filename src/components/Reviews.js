import React from "react";
import "../css/Reviews.css";
import { REVIEWS } from "../Global";

const Reviews = () => {
  return (
    <div className="reviews container py-5 my-5">
      <div className="review-wrapper">
        {REVIEWS.map((item, index) => (
          <div className="p-4 review-block" key={index}>
            <p>{item.text}</p>
            <div className="review-info d-flex">
              <img
                className="avatar-pic rounded-circle"
                src={item.profile}
                alt="avatar"
              />
              <div className="">
                <p>{item.name}</p>
                <p>{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
