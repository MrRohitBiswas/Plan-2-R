import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import $ from "jquery";
import "./components/MainService.scss";
import bg from "./components/bg.jpg";
import States from "./States";
import HomePage from "./Home";
import "./ServiceSearchBar.css";

export default function Services() {
  $(".buy").click(function () {
    $(".bottom").addClass("clicked");
  });

  $(".remove").click(function () {
    $(".bottom").removeClass("clicked");
  });
  //searchbar
  useEffect(() => {
    var btnDelete = document.getElementById("clear");
    var inputFocus = document.getElementById("inputFocus");
    btnDelete.addEventListener("click", function (e) {
      e.preventDefault();
      inputFocus.value = "";
    });
    document.addEventListener("click", function (e) {
      try {
        if (document.getElementById("first").contains(e.target)) {
          inputFocus.classList.add("isFocus");
        } else {
          inputFocus.classList.remove("isFocus");
        }
      } catch {}
    });
    
  });
  useEffect(() => {
    var search = document.getElementById("inputFocus");
    search.addEventListener("input", function () {
      let inputValue = search.value.toLowerCase();
      let cards = document.getElementsByClassName("wrapper my-3");
      Array.from(cards).forEach(function (elements) {
        let cardText = elements.getElementsByTagName("p")[0].innerText;
        if (cardText.toLowerCase().includes(inputValue)) {
          elements.style.display = "block";
        } else {
          elements.style.display = "none";
        }
      });
    });
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
        id="serviceStates"
      >
        <div className="container text" style={{
    color: '#310909',
    textShadow: '0 2px 1px #79a06d,-1px 3px 1px #82ad75, -2px 5px 1px #8ebf80'}}>
          <p
            style={{
              fontSize: "40px",
              fontFamily: `Inter,sans-serif`,
              paddingTop: "80px",
            }}
          >
            Select the state:
          </p>
          <hr/>
        </div>
        {/* searchbar */}
        <div className="serviceSearchBar">
          <form>
            <div className="inner-form">
              <div className="row">
                <div className="input-field first" id="first">
                  <input
                    className="input"
                    id="inputFocus"
                    type="text"
                    placeholder="Search State"
                  />
                  <button className="clear" id="clear">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
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
                    State: { ...CurrState },
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
