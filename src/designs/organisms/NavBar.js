import React from 'react';
import {Link} from 'react-router-dom'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
const logo = require('./../../assets/photos/NavBar/logo.jpg')
const NavBar = () => (
  <div className='nav-bar'>
    <div className="logo"><img src={logo} alt="inframe-logo"/></div>
    <IconMenu
          iconButtonElement={<IconButton style={{height: '50px', width: '50px'}}><MoreVertIcon color={'white'}/></IconButton>}
        >
        <MenuItem href='/' primaryText='Home'/>
        <MenuItem href='/portfolio' primaryText='Portfolio'/>
        <MenuItem href='/services' primaryText='Services'/>
        <MenuItem href='/process' primaryText='Process'/>
        <MenuItem href='/about' primaryText='About'/>
        <MenuItem href='/contact' primaryText='Contact'/>
        <MenuItem href='/jobs' primaryText='Jobs'/>
        </IconMenu>
    {/* <div className="links">
        <li>
        <Link to="</Link>
        <MenuItem href='/">Home' />
        </li>
        <li>
        <Link to="">Portfolio</Link>
        </li>
        <li>
        <Link to="">Services</Link>
        </li>
        <li>
        <Link to="">Process</Link>
        </li>
        <li>
        <Link to="">About</Link>
        </li>
        <li>
        <Link to="">Contact</Link>
        </li>
        <li>
        <Link to="">Jobs</Link>
        </li>
    </div> */}
  </div>
);

export default NavBar
