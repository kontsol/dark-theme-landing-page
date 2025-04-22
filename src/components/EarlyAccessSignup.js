import React from "react";
import "../css/EarlyAccessSignup.css";

const EarlyAccessSignup = () => {
  return (
    <div className="early-access-signup container py-5 my-5 d-flex flex-column">
      <h1 className="text-center">Get early access today</h1>
      <p className="text-center">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="email-signup-container m-auto">
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          class="email-input"
          required
        />
        <button type="submit" class="submit-button">
          Get Started For Free
        </button>
      </div>
    </div>
  );
};

export default EarlyAccessSignup;
