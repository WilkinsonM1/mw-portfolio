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
    // <div className="my-stack">
    //   <div className="stack">
    //     <div className="icon-container">
    //       <i className="devicon-html5-plain-wordmark colored"></i>
    //     </div>
    //     <h1>HTML</h1>
    //     <p>Using HTML to create lovely websites</p>
    //   </div>
    //   <div className="stack">
    //     <div className="icon-container">
    //       <i className="devicon-css3-plain-wordmark colored"></i>
    //     </div>
    //     <h1>CSS</h1>
    //     <p>Using CSS to create lovely websites</p>
    //   </div>
    //   <div className="stack">
    //     <div className="icon-container">
    //       <i className="devicon-javascript-plain colored"></i>
    //     </div>
    //     <h1>JavaScript</h1>
    //     <p>Using JavaScript to create lovely websites</p>
    //   </div>
    //   <div className="stack">
    //     <div className="icon-container">
    //       <i className="devicon-react-original-wordmark colored"></i>
    //     </div>
    //     <h1>React</h1>
    //     <p>Using React to create lovely websites</p>
    //   </div>
    //   <div className="stack">
    //     <div className="icon-container">
    //       <i className="devicon-nodejs-plain colored"></i>
    //     </div>
    //     <h1>Node.js</h1>
    //     <p>Using Node.js</p>
    //   </div>
    //   <div className="stack">
    //     <div className="icon-container">
    //       <i className="devicon-mongodb-plain-wordmark colored"></i>
    //     </div>
    //     <h1>Mongo</h1>
    //     <p>Using Mongo</p>
    //   </div>
    //   <div className="stack">
    //     <div className="icon-container">
    //       <i className="devicon-express-original-wordmark colored"></i>
    //     </div>
    //     <h1>Express</h1>
    //     <p>Using Express</p>
    //   </div>
    //   <div className="stack">
    //     <div className="icon-container">
    //       <i className="devicon-mysql-plain-wordmark colored"></i>
    //     </div>
    //     <h1>SQL</h1>
    //     <p>Using SQL</p>
    //   </div>
    // </div>
  );
};

export default TechStack;
