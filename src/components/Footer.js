import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import icon from "./components/fav.png";
export default function footer() {
  
  const handleClickScrollService = () => {
    const element = document.getElementById('serviceStates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <footer className="footer-02">
        <div className="container">
          <div className="footRow">
            <div className="footDetails">
              <div className="">
                <div className="footDetailsChild">
                  <h2 className="footer-heading">
                    <Link to="/Home" className="logo">
                      Tour CirKit
                  <img
                    src={icon}
                    alt = "Icon"
                    className="siteIcon"
                    style={{width: '150px', height: 'auto' }}
                    />
                    </Link>
                  </h2>
                  <p>
                    CirKit is always there to help you to plan the best suited tour for your journey up ahead!
                  </p>
                </div>
              </div>
            </div>
            <div className="quickLinks">
              <div className="">
                <div className="border-left">
                  <div className="QLDetails">
                    <h2 className="footer-heading QLHead">Quick Links</h2>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/Services" onClick={handleClickScrollService} className="py-1 d-block qL">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/Contact" className="py-1 d-block qL">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/LogReg" className="py-1 d-block qL">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="py-1 d-block qL">
                          Help &amp; Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tnc">
          <div className="tnc1">
            <p className="copyright">
              Copyright © All rights reserved |
              <i className="ion-ios-heart" /> from{" "}
              <a href="https://tourcirKit.com" target="_blank" rel="noopener noreferrer">
                TourCirKit.com
              </a>
            </p>
          </div>
          <div className="tnc2">
            <p className="list-unstyled">
              <a className="" href="/">
                Terms |
              </a>
              <a className="" href="/">
                Privacy |
              </a>
              <a className="" href="/">
                Compliances
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
