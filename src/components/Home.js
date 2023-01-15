import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Helmet } from "react-helmet";
export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById('serviceStates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  
  return (
    
    
    <div className="homePage" id="homePageStart">
      
      <Helmet>
        <title>Tour CirKit | Homepage</title>
        <meta name='Homepage of TourCirKit' content='Get started with the experience of all new unique tour planning app'/>
      </Helmet>
      <div className="container homepageContent" style={{height: "fit-content"}}>
        <h1 className="homepageTitle">Tour <span className="homepageSpan">CirKit</span></h1>
        <p className="homepageDesc">The first step of your adventure... <br />
        Click <Link to="#" onClick={handleClickScroll}><span className="homepageSpan">here</span></Link> to begin</p>
        
      </div>
    </div>
  );
}
