import React from 'react';
// import { scaleRotate as Menu } from 'react-burger-menu'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import About from './About'
import Portfolio from './Portfolio'
// import App from '../App'


const Navigation = (props) => {
    return(
        <BrowserRouter>
        <div className='navigation'>
          
          
            <div className='links-container'>
            <Link to="/mw-portfolio/about" className="nav-item">About</Link>
                <Link to="/mw-portfolio/portfolio" className="nav-item">Portfolio</Link>

            </div>
               
                <Route exact path="/mw-portfolio/about"  component={About}/> 
                <Route path="/mw-portfolio/portfolio" component={Portfolio} />
         


        </div>
        </BrowserRouter>
    )
}

export default Navigation;