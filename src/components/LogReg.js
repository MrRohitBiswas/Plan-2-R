import React, { Component, useEffect } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./LoginPages/SignUpForm";
import SignInForm from "./LoginPages/SignInForm";

import "./LogReg.css";

class LogReg extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
}

  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="login">
          <div className="loginAside" />
          <div className="loginForm">
            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default LogReg;
