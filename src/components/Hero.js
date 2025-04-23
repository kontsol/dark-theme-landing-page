import React from "react";
import "../css/Hero.css";
import { IMAGES_URL } from "../Global";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero py-5 d-flex flex-column text-center">
      <img src={`${IMAGES_URL}/illustration-intro.png`} alt="hero-img" />
      <h1 className="font-lg-700">
        {" "}
        All your files in one secure location, accessible anywhere.
      </h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button type="button" text="Get Started" />
    </div>
  );
};

export default Hero;
