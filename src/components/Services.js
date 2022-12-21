import React from "react";
import { Link } from "react-router-dom";

import $ from "jquery";
import "./components/MainService.scss";
import bg from "./components/bg.jpg";
import States from "./States";
import HomePage from "./Home";

export default function Services() {
  $(".buy").click(function () {
    $(".bottom").addClass("clicked");
  });

  $(".remove").click(function () {
    $(".bottom").removeClass("clicked");
  });

  return (
    <div>
      <HomePage />
      <div
        className="contents"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container text">
          <p
            style={{
              fontSize: "40px",
              fontFamily: `Inter,sans-serif`,
              paddingTop: "80px",
            }}
          >
            Select the state where you want to go:
          </p>
          <hr />
        </div>
        <div
          className="App container fade-in-image"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {States.map((CurrState) => {
            return (
              <div key={CurrState.key} className="wrapper my-3">
                <Link
                  to={{
                    pathname: "/SearchState",
                    State: {...CurrState},
                  }}
                >
                  <div className="container">
                    <div
                      className="top"
                      style={{
                        backgroundImage: `url(${CurrState.url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="bottom">
                      <div className="left">
                        <div className="details" id="stateName">
                          <p>{CurrState.stateName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="inside">
                  <div className="icon">
                    <i className="material-icons">info_outline</i>
                  </div>
                  <div className="contents">
                    <p>{CurrState.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
