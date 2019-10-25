import React from "react";
import cv from "../files/Developer-CV.pdf";
import linkedIn from "../img/social-media/linkedin.png";
import github from "../img/social-media/github.png";
import resumePic from "../img/social-media/profile.png";

const Contact = () => {
  return (
    <div className="contact">
      <a
        href="https://www.linkedin.com/in/mohammed-wilkinson-0a44b1b9/"
        id="linkedin"
        target="_blank"
      >
        LinkedIn
        <img src={linkedIn} />
      </a>

      <a href="https://github.com/WilkinsonM1" id="github" target="_blank">
        Github
        <img src={github} />
      </a>

      <a href={cv} download id="cv">
        CV
        <img src={resumePic} />
      </a>
    </div>
  );
};

export default Contact;
