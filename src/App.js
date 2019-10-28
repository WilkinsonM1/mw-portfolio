import React from "react";
// import logo from './logo.svg';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import { scaleRotate as Menu } from 'react-burger-menu'
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Brand from "./components/Brand";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import CodingJourney from "./components/CodingJourney";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Brand />

          <Navigation />

          <Route exact path="/mw-portfolio/" component={About} />
          <Route path="/mw-portfolio/portfolio" component={Portfolio} />
          <Route
            path="/mw-portfolio/coding-journey"
            component={CodingJourney}
          />

          <Contact />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
