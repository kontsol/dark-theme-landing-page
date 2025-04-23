import React, { useState } from "react";
import "../css/EarlyAccessSignup.css";
import Button from "./Button";

const EarlyAccessSignup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    if (email.includes("@")) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="early-access-signup container px-5 py-5 my-5 d-flex flex-column">
      <h1 className="text-center font-lg-700">Get early access today</h1>
      <p className="text-center font-sm-400">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="row email-signup-container d-flex flex-column flex-md-row mt-4 px-2 px-lg-5">
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="email-input col-12 col-md  py-3 px-4"
          required
          onChange={handleChange}
        />
        <Button
          type="submit"
          text="Get Started For Free"
          handleSubmit={handleSubmit}
        />
        {error && (
          <h1
            className="col-12 font-xs-700 text-danger"
            id="error-form-message"
          >
            Please enter a valid email address.
          </h1>
        )}
      </form>
    </div>
  );
};

export default EarlyAccessSignup;
