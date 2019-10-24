import React from "react";
import htmlPic from "../img/tech-stack-icons/html5.png";
import js from "../img/tech-stack-icons/javascript.png";
import reactPic from "../img/tech-stack-icons/reactPic.png";
import gitPic from "../img/tech-stack-icons/git.png";
import nodePic from "../img/tech-stack-icons/node.png";
import swiftPic from "../img/tech-stack-icons/swift.png";
import cssPic from "../img/tech-stack-icons/css.png";
// import expressPic from "../img/tech-stack-icons/express.png";
import mysqlPic from "../img/tech-stack-icons/mysql.png";

const TechStack = () => {
  return (
    <div className="tech-stack">
      <h2>Tech Stack</h2>
      <div id="tech-icons-container">
        <img src={htmlPic} />
        <img src={cssPic} />
        <img src={js} />
        <img src={reactPic} />
        <img src={nodePic} />
        <img src={swiftPic} />
        <img src={mysqlPic} />
        <img src={gitPic} />
      </div>
    </div>
  );
};

export default TechStack;
