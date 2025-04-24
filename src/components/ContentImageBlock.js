import React from "react";
import "../css/ContentImageBlock.css";
import { IMAGES_URL } from "../Global";

const ContentImageBlock = () => {
  return (
    <div className="container gap-lg content-image-block px-4">
      <div className="content-image-block__image">
        <img
          src={IMAGES_URL + "/illustration-stay-productive.png"}
          alt="illustration stay productive"
        />
      </div>
      <div className="flex-1 content-image-block__text m-auto">
        <div className="content-image-block__text-wrapper gap-sm">
          <h1 className="font-lg-700">Stay productive wherever you are</h1>
          <p className="font-sm-400">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="font-sm-400">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a className="font-sm-400 d-flex align-items-center gap-sm" href="/">
            See how Fylo works Fylo
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentImageBlock;
