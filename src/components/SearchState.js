import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import $ from "jquery";
import "./SearchState.css";
import "./HotelsButton.scss";
import SearchStateCarousel from "./SearchStateCarousel";
import TopPlacesResp from "./topPlaces/TopPlacesResp";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
export default function SearchState() {
  const [searchText, setSearchText] = useState();

  //GA
  useEffect(() => {
    ReactGA.pageview(window.location.pathname); //interaction event
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const State = location.State;
  const param = useParams();
  const loc = param.id;

  $(document).ready(function () {
    $("#search").focus(function () {
      $(".Search-box").addClass("border-searching");
      $(".Search-icon").addClass("si-rotate");
    });
    $("#search").blur(function () {
      $(".Search-box").removeClass("border-searching");
      $(".Search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function () {
      if ($(this).val().length > 0) {
        $(".go-icon").addClass("go-in");
      } else {
        $(".go-icon").removeClass("go-in");
      }
    });
  });

  const history = useHistory();

  const searchFunc = async (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    history.push(searchText);
  };
  const startSpeechRecognition = (e) => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript);
      window.scrollTo(0, 0);
      history.push(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  };
  return (
    <div>
      <Helmet>
        <title>Tour CirKit | {loc}</title>
        <meta
          name="Services Provided"
          content="All services provided by us, browse sstates and search wherever you plan to travel"
        />
      </Helmet>
      <div>
        {State && <SearchStateCarousel slides={State.slides || null} />}
      </div>
      <>
        <div className="container">
          <h1 className="searchTitle">
            Can not find your place in the list below? Search here with the
            nearest city to give you the top tour spots available
          </h1>
        </div>
        <div className="SearchContainer ">
          <div className="Search-box">
            <div className="Search-icon">
              <i className="fa fa-search Search-icon SearchIconDegree" />
            </div>
            <div className="speakForm">

            <form action className="search-form" onSubmit={searchFunc}>
              <svg
                className="search-border"
                x="0px"
                y="0px"
                viewBox="0 0 671 111"
                >
                <path
                  className="border"
                  d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"
                  />
                <path
                  className="border"
                  d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"
                  />
              </svg>
              <input
                type="text"
                placeholder="Search"
                id="search"
                autoComplete="off"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
              <div className="go-icon" type="submit" onClick={searchFunc}>
                <i className="fa fa-arrow-right" />
              </div>
            </form>
            <button
            className="voicebtn"
              onClick={startSpeechRecognition}
              style={{
                color: "white",
                border: "1px white solid",
                padding: "5px",
                margin: "10px",
              }}
              >
              Speak <i class="fa fa-microphone"></i>
            </button>
          </div>
          </div>
        </div>

        <h1 className="searchTitle" style={{ marginTop: "30px" }}>
          Unable to remember the name of your fabulous place?{" "}
          <Link to="/Search" style={{ color: "#cccc16" }}>
            Click here
          </Link>{" "}
          to take you to the advanced search page
        </h1>
      </>
      <div>
        <TopPlacesResp id={loc} />
      </div>

      <Link
        to={`/HotelDetails/${loc}`}
        className="button2"
        id="hotelDetailsButton"
        style={{ cursor: "pointer" }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Get Hotels
      </Link>
    </div>
  );
}
