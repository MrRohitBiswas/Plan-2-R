import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/ForgotPass" className="formFieldLink" style={{marginLeft: '20px'}}>
              Forgot Password?
            </Link>
            <br/>
            <Link to="/" className="formFieldLink" style={{marginTop: '20px'}}>
              Create an account
            </Link>
          </div>

          <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton
                onClick={() => alert("Hello")}
                style={{
                  display: "flex",
                  border: "0px",
                  borderRadius: "25px",
                  width: "300px",
                  overflow: "hidden",
                  height: "50px",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignContent: "space-around",
                  justifyContent: "space-around",
                }}
              />
            </div>

            <div className="instagramButton">
              <InstagramLoginButton
                onClick={() => alert("Hello")}
                style={{
                  display: "flex",
                  border: "0px",
                  borderRadius: "25px",
                  width: "300px",
                  overflow: "hidden",
                  height: "50px",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignContent: "space-around",
                  justifyContent: "space-around",
                }}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
