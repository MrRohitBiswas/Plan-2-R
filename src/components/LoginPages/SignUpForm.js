import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      cPassword: "",
      name: "",
      hasAgreed: false,
      passMisMatch: false
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
      passMisMatch: false
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    //  If passwords don't match return
    if (this.state.password !== this.state.cPassword) {
      this.setState({
        passMisMatch: true
      })
      return;
    }

    const authObj = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password
    }

    // if any field is empty then return
    if (!authObj.email || !authObj.name || !authObj.password) {
      return;
    }

    // call api

    const url = '/auth/signup'

    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authObj)
    });

    const data = await resp.json();

    console.log(data);
    

    console.log(this.state)

  }

  render() {
    return (
      <div className="formCenter">
        
      <Helmet>
        <title>Tour CirKit | Sign Up</title>
        <meta name='Sign Up Tour CikKit' content='Get yourself registered in Tour CirKit to get recommendations and enhanced user experience'/>
      </Helmet>
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail
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
            <label className="formFieldLabel" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="cPassword"
              className="formFieldInput"
              placeholder="Enter password again"
              name="cPassword"
              value={this.state.cPassword}
              onChange={this.handleChange}
            />
          </div>

          {/* <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div> */}

          {
            this.state.passMisMatch &&
          <div>Passwords don't match</div>
          }

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              Already member?
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
