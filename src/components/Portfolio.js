import React from "react";
import Project from "./Project";
import netCopy from "../img/project-screenshots/netflix-copy.png";
import cyberPet from "../img/project-screenshots/cyber-pet-game.png";
import keyCode from "../img/project-screenshots/keycode-generator.png";
import drumKit from "../img/project-screenshots/drumkit-cat.png";
import blackDice from "../img/project-screenshots/black-dice-game.png";
import busAnimation from "../img/project-screenshots/london-bus-animation.png";
import addressBook from "../img/project-screenshots/address-book-react.png";
import expressNews from "../img/project-screenshots/express-news.png";
import iosDiceGame from "../img/project-screenshots/swift-dice-game-app.png";
import weatherRetriever from "../img/project-screenshots/weather-retriever.png";
import reactCalculator from "../img/project-screenshots/simple-calculator-react.png";
import simplyRota from "../img/project-screenshots/simplyRota.png";

import { tech1 } from "../technologies";

const Portfolio = props => {
  return (
    <div className="portfolio">
      <Project
        source={netCopy}
        alt="netflix-copy website"
        title="Netflix Copy"
        link="https://wilkinsonm1.github.io/netflixCopy/"
        description="A visual non-functional copy of the Netflix website to develop my understanding of Flexbox in CSS.
                This was made using HTML and multiple rows of images and organised using Flexbox. "
        technologies="HTML, CSS"
      />

      <Project
        source={cyberPet}
        alt="cyber pet game"
        title="Cyber Pet Game"
        link="https://wilkinsonm1.github.io/cyber-pet-game/."
        description="An interactive game made mostly with Javascript with a bit of HTML and CSS to style the landing page and the game functions are triggered by a html button."
        technologies="HTML, CSS, Javascript"
      />
      <Project
        source={keyCode}
        alt="keycode generator"
        title="Keycode Generator"
        link="https://wilkinsonm1.github.io/keyCodeGenerator/."
        description="A simple website that listens to the keyboard button presses and displays the event keys, which and code of each button press."
        technologies="HTML, CSS, Javascript"
      />

      <Project
        source={drumKit}
        alt="Drumkit Cat"
        title="Drumkit Cat"
        link="https://wilkinsonm1.github.io/drumkitCat/"
        description="Another event-listening challenge where I connected html buttons and keyboard buttons to sound files which make up a drum kit."
        technologies="HTML, CSS, Javascript"
      />

      <Project
        source={blackDice}
        alt="Black dice game"
        title="Black Dice Game"
        link="https://wilkinsonm1.github.io/Black-Dice-game/"
        description="A website built that plays a game of 21 with randomly generated dice.
                The challenge here was making each player play on his/her turn, by disabling all the rolling buttons apart from the player who's turn it is."
        technologies="HTML, CSS, Javascript"
      />

      <Project
        source={busAnimation}
        alt="London bus driving animation"
        title="London Bus Animation"
        link="https://wilkinsonm1.github.io/london-bus-animation/"
        description="This was a small css challenge to practice CSS animations. I made the clouds move to the left while slowly fading, the bus slightly bounces and the wheels turn. The actual html divs and colouring were provided by our instructor."
        technologies="HTML, CSS animations"
      />

      <Project
        source={reactCalculator}
        alt="react calculator"
        title="Simple React Calculator"
        link="https://wilkinsonm1.github.io/simple-calculator-react/"
        description="When I first started learning React, this was one of the challenges we were set. During this challenge I was starting to get familiar with concepts such as state in class components and handler functions."
        technologies="React.js, CSS"
      />
      <Project
        source={addressBook}
        alt="simple address book"
        title="Simple React Address Book"
        link="https://wilkinsonm1.github.io/simple-address-book/"
        description="This was another challenge set when I was learning React and this gave me frther practice with state and changing state."
        technologies="React.js"
      />
      <Project
        source={weatherRetriever}
        alt="weather app"
        title="Weather Retriever"
        link="https://pure-caverns-67370.herokuapp.com/"
        description="A full stack app where we made a server using express.js which communicated with the weather API from DarkSky and served the data we wanted to the front end. Finally our node app was deployed on Heroku."
        technologies="HTML, CSS, Node.js, Express.js"
      />
      <Project
        source={expressNews}
        alt="news app"
        title="Express News App"
        description="This was a team project where we worked to make an express server that communicated with a news API and served select news articles on our front end and this was also deployed on Heroku."
        link="https://evening-shelf-82384.herokuapp.com/"
        technologies="HTML, CSS, Node.js, Express.js"
      />
      <Project
        source={iosDiceGame}
        alt="dice game in ios"
        title="Dice game iOS app"
        description="My first iOS app that I made using Swift on XCode. It was an interesting experience as the same logical problems that need solving when I made the dice game with javascript also needed solving here but as the tools were different, it made certain solutions easier to execute."
        technologies="Swift"
      />
      <Project
        source={simplyRota}
        alt="Rota app"
        title="SimplyRota"
        description="A large team project of 9 people worked on making a rota app for a special needs care company. This taught me a lot about working in such a large team, how to effectively plan a project out and using Kanban boards to assign tasks."
        link="https://powerful-mountain-62654.herokuapp.com/"
        technologies="HTML, CSS, Node.js, Express.js"
      />
    </div>
  );
};

export default Portfolio;
