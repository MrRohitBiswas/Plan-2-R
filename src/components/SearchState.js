import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import $ from "jquery";
import "./SearchState.css";
import "./HotelsButton.scss";
import SearchStateCarousel from "./SearchStateCarousel";
import TopPlacesResp from "./topPlaces/TopPlacesResp";

export default function SearchState() {
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const State = location.State;
  const stateName = State !== undefined ? State.stateName : null;
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

  //Loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const history = useHistory();

  const searchFunc = async (e) => {
    e.preventDefault();
    history.push(searchText);

  }

  

  return (
    <div>
      <div>{State && <SearchStateCarousel slides={State.slides || null} />}</div>
      <>
      
        <div className="SearchContainer ">
          <div className="Search-box">
            <div className="Search-icon">
              <i className="fa fa-search Search-icon SearchIconDegree" />
            </div>
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
              
            <div className="go-icon" type='submit' onClick={searchFunc}>
              <i className="fa fa-arrow-right" />
            </div>
            
            </form>
          </div>
        </div>
      </>
      <div>
        <TopPlacesResp id={loc} />
      </div>


      <Link
        to={`/HotelDetails/${loc}`}
        class="button2"
        style={{ marginLeft: "100px", cursor: "pointer" }}
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
