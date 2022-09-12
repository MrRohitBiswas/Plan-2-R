import React, { useState } from "react";
import PropTypes from "prop-types";
// import $ from "jquery";
import './Navbar.css'

import { Link } from "react-router-dom";

export default function Navbar() {
  // $(".navTrigger").click(function () {
  //   $(this).toggleClass("active");
  //   $("#mainListDiv").toggleClass("show_list");
  //   $("#mainListDiv").fadeIn();
  // });

  const [menuClass, setMenuClass] = useState('main_list main_list_mobile_hidden');
  const [navClass, setNavClass] = useState('nav');

  const displayMenu = () => {
    if (menuClass === 'main_list main_list_mobile_hidden') {
      setMenuClass('main_list main_list_mobile')
    } else {
      setMenuClass('main_list main_list_mobile_hidden');
    }
    setNavClass(navClass + ' affix');
  }

  return (
    <>
      <nav className={navClass}>
      {/* container-fluid */}
        {/* <div className=""> */}
          <div className="logo">
            <Link to="/Services">Plan-2R</Link>
          </div>
          <div id="mainListDiv" className={menuClass}>
            <ul className="navlinks">
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/LogReg">Login/Register</Link>
              </li>
            </ul>
          </div>
          <span className="navTrigger" onClick={displayMenu}>
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
  title: "Plan-2R",
};
