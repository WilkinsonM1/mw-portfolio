import React from "react";
import PrimaryHeader from "./PrimaryHeader";
import PrimarySub from "./PrimarySub";
import TechStack from "./TechStack";
import profilePic from "../img/profile-pic.jpg"

const About = () => {
  return (
    <div className="about">
      {/* <PrimaryHeader /> */}
   
      <img src={profilePic} id='profile-pic'/>

     
      <PrimarySub />

      <TechStack />
    </div>
  );
};

export default About;
