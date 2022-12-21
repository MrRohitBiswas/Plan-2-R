import React from "react";
import { useLocation } from "react-router-dom";
import  $  from "jquery";
import "./SearchState.css";
import SearchStateCarousel from "./SearchStateCarousel";
import TopPlacesResp from "./topPlaces/TopPlacesResp";

export default function SearchState() {
  const location = useLocation();
  const State = location.State;
  console.log(State);
  $(document).ready(function(){
    $("#search").focus(function() {
      $(".Search-box").addClass("border-searching");
      $(".Search-icon").addClass("si-rotate");
    });
    $("#search").blur(function() {
      $(".Search-box").removeClass("border-searching");
      $(".Search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function() {
        if($(this).val().length > 0) {
          $(".go-icon").addClass("go-in");
        }
        else {
          $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function(){
      $(".search-form").submit();
    });
});



  return (
    <div>
      <div>{State && <SearchStateCarousel slides={State.slides} />}</div>
      <>
      <div className="SearchContainer ">
  <div className="Search-box">
    <div className="Search-icon"><i className="fa fa-search Search-icon SearchIconDegree" /></div>
    <form action className="search-form">
    <svg className="search-border" x="0px" y="0px" viewBox="0 0 671 111">
      <path className="border" d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280" />
      <path className="border" d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280" />
    </svg>
      <input type="text" placeholder="Search" id="search" autoComplete="off" />
      
    
    </form>
    <div className="go-icon"><i className="fa fa-arrow-right" /></div>
  </div>
</div>

      </>
      <div>
        <TopPlacesResp />
      </div>
    </div>
  );
}
