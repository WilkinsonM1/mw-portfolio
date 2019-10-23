import React from "react";
// import { scaleRotate as Menu } from 'react-burger-menu'
import { BrowserRouter, Route, Link } from "react-router-dom";

// import App from '../App'

const Navigation = props => {
  return (
    <div className="navigation">
      <div className="links-container">
        <Link to="/mw-portfolio/about" className="nav-item">
          About
        </Link>
        <Link to="/mw-portfolio/portfolio" className="nav-item">
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
