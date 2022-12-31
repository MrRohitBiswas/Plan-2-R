import React from "react";
import "./Footer.css";
import icon from "./components/fav.png";
export default function footer() {
  return (
    <div>
      <footer className="footer-02">
        <div className="container">
          <div className="footRow">
            <div className="footDetails">
              <div className="">
                <div className="footDetailsChild">
                  <h2 className="footer-heading">
                    <a href="/Services" className="logo">
                      Tour CirKit
                    </a>
                  </h2>
                  <img
                    src={icon}
                    alt = "Icon"
                    className="siteIcon"
                    style={{ height: 150, width: 180 }}
                  />
                  <p>
                    CirKit is always there to help you to plan the best suited
                    tour for your journey up ahead !
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
                        <a href="/Services" className="py-1 d-block qL">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="/ContactUs" className="py-1 d-block qL">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/LogReg" className="py-1 d-block qL">
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="/" className="py-1 d-block qL">
                          Help &amp; Support
                        </a>
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
              <a href="https://www.TourCirKit.com" target="_blank" rel="noopener noreferrer">
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
