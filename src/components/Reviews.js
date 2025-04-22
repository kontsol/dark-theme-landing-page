import React from "react";
import "../css/Reviews.css";
import { REVIEWS } from "../Global";
import { IMAGES_URL } from "../Global";

const Reviews = () => {
  return (
    <div className="reviews container py-5 my-5">
      <img
        src={`${IMAGES_URL}/bg-quotes.png`}
        alt="quotes"
        id="reviews-quotes"
      />
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
              <div className="" id="review-info-text">
                <p className="font-sm-700">{item.name}</p>
                <p className="font-xs-400">{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
