import React from "react";
import "../css/Footer.css";
import { IMAGES_URL } from "../Global";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container pb-5">
        <div className="row mt-5">
          <div className="col-12 mb-5">
            <img
              className="footer-logo"
              id="logo"
              src={`${IMAGES_URL}/logo.svg`}
              alt="footer-logo"
            />
          </div>
          <div className="col-md-3 d-flex gap-md">
            <img
              id="footer-icons"
              src={`${IMAGES_URL}/icon-location.svg`}
              alt="location-icon"
            />
            <p className="font-sm-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
            </p>
          </div>
          <div className="col-md-3">
            <div className="d-flex gap-md mb-3">
              <img
                id="footer-icons"
                src={`${IMAGES_URL}/icon-phone.svg`}
                alt="phone-icon"
              />
              <h1 className="font-sm-400 text-white">+1-543-123-4567</h1>
            </div>
            <div className="d-flex gap-md">
              <img
                id="footer-icons"
                src={`${IMAGES_URL}/icon-email.svg`}
                alt="email-icon"
              />
              <h1 className="font-sm-400 text-white">example@fylo.com</h1>
            </div>
          </div>
          <div className="footer-list col-md-3 d-flex gap-lg flex-column flex-md-row">
            <ul className="font-sm-400 text-white list-unstyled d-flex flex-column gap-sm">
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
            <ul className="font-sm-400 text-white list-unstyled d-flex flex-column gap-sm">
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="col-md-3 d-flex gap-md">
            <ion-icon id="footer-icons" name="logo-facebook"></ion-icon>
            <ion-icon id="footer-icons" name="logo-twitter"></ion-icon>
            <ion-icon id="footer-icons" name="logo-instagram"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
