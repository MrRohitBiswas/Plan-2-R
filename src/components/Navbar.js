import React, { useState} from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import './Navbar.css'

import { Link } from "react-router-dom";

export default function Navbar() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});
  const [menuClass, setMenuClass] = useState('main_list main_list_mobile_hidden');
  const [navClass, setNavClass] = useState('nav');
  const [navTrig, setNavTrig] =useState('navTrigger');
  const displayMenu = () => {
    if (menuClass === 'main_list main_list_mobile_hidden') {
      setMenuClass('main_list main_list_mobile')
      setNavClass(navClass + ' affix');
      setNavTrig(navTrig+' active');
    } else {
      setMenuClass('main_list main_list_mobile_hidden');
      setNavClass('nav');
      setNavTrig('navTrigger');
    }
  }
  const handleClickScroll = () => {
    
    const element = document.getElementById('homePageStart');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  
  };
  
  const handleClickScrollService = () => {
    const element = document.getElementById('serviceStates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    displayMenu();
  };

  return (
    <>
      <nav className={navClass}>
      {/* container-fluid */}
        {/* <div className=""> */}
          <div className="logo">
            <Link to="/" onClick={handleClickScroll}>Tour CirKit</Link>
          </div>
          <div id="mainListDiv" className={menuClass}>
            <ul className="navlinks">
              <li>
                <Link to="/Services"  onClick={handleClickScrollService}>Services</Link>
              </li>
              <li>
                <Link to="/Contact" onClick={displayMenu}>Contact Us</Link>
              </li>
              <li>
                <Link to="/LogReg" onClick={displayMenu}>Sign Up</Link>
              </li>
            </ul>
          </div>
          <span className={navTrig} onClick={displayMenu}>
            <i></i>
            <i></i>
            <i></i>
            {/* Hello */}
          </span>
        {/* </div> */}
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Tour CirKit",
};
