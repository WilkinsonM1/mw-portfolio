import React from "react";
import firstRPG from "../img/project-screenshots/first-rpg-game.png";

const CodingJourney = () => {
  return (
    <div className="coding-journey">
      <h2>My Coding Journey</h2>

      <p>
        My first foray into coding was through GameMaker Studios as I wanted to
        make my own RPG and I followed a youtube tutorial for it.{" "}
      </p>

      <img src={firstRPG} alt="First RPG" />

      <p>
        I decided I wanted to try and make my own blog website without hosting
        it on wordpress so I learnt HTML and CSS.
      </p>

      <p>
        The more coding I did the more I realised how much I enjoyed it and
        wanted to do it as a full time career. That moment came when I came
        across CodeNation's course on web development which I decided to enroll
        at to kickstart my career as a web developer!
      </p>
    </div>
  );
};

export default CodingJourney;
