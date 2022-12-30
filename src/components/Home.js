import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LoadingBar from "./LoadingBar/LoadingBar";
export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById('serviceStates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  //Loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  
  return (
    
    <div className="homePage" id="homePageStart">
      {loading ? <LoadingBar /> : <></>}
      <div className="container homepageContent" style={{height: "fit-content"}}>
        <h1 className="homepageTitle">Tour <span className="homepageSpan">CirKit</span></h1>
        <p className="homepageDesc">The first step of your adventure... <br />
        Click <Link to="#" onClick={handleClickScroll}><span className="homepageSpan">here</span></Link> to begin</p>
        
      </div>
    </div>
  );
}
