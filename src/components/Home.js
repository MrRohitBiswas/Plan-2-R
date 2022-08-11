import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="homePage">
      <div className="container homepageContent">
        <h1 className="homepageTitle">Plan <span className="homepageSpan">2-R</span></h1>
        <p className="homepageDesc">The first step of your adventure... <br />
        Click <Link to="/Services"><span className="homepageSpan">here</span></Link> to begin</p>
        
      </div>
    </div>
  );
}
