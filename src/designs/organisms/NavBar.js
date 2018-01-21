import React from 'react';
import {Link} from 'react-router-dom'
const logo = require('./../../photos/NavBar/logo.jpg')
const NavBar = () => (
  <div className='nav-bar'>
    <div className="logo"><img src={logo} alt="inframe-logo"/></div>
    <div className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/process">Process</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
    </div>
  </div>
);

export default NavBar