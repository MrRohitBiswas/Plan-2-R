import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById("serviceStates");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //GA
  useEffect(() => {
    ReactGA.pageview(window.location.pathname); //interaction event
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tour CirKit</title>
        <meta
          name="Homepage of TourCirKit"
          content="Tour CirKit is a platform that allows users to plan and book their travel itineraries. It offers a wide range of options for destinations, accommodations, and activities, as well as tools to help users customize their trip. The website aims to make it easy for users to plan and book their dream vacation."
        />
      </Helmet>
      <div className="homePage" id="homePageStart">
        <div
          className="container homepageContent"
          style={{ height: "fit-content" }}
        >
          <h1 className="homepageTitle">
            Tour <span className="homepageSpan">CirKit</span>
          </h1>
          <p className="homepageDesc">
            The first step of your adventure... <br />
            <Link to="/Services" onClick={handleClickScroll}>
              <span className="homepageSpan">Services</span>
            </Link>{" | "}
            <Link to="/Contact" onClick={handleClickScroll}>
              <span className="homepageSpan">About Us</span>
            </Link>{" | "}
            <Link to="/LogReg" onClick={handleClickScroll}>
              <span className="homepageSpan">Login</span>
            </Link>
          </p>
        </div>
      </div>
      <div class="content-bottom">
        <div class="container bottom">
          <div class="row1 content_bottom-text">
            <div class="column">
              <h1>
                Best Tour Planner
                <hr className="lines"/>
              </h1>
              <h1 class="m_1">
                Welcome to Tour CirKit! We understand that planning a tour can
                be a daunting task, with so many options and variables to
                consider. That's why we've created a one-stop-shop for all your
                tour planning needs. Our website offers a wide range of tour
                options, from cultural and historical tours to adventure and
                nature tours. We work with trusted local tour operators to
                provide you with the best possible experience. One of the unique
                features of our website is our customizable tour itinerary
                builder. With Tour CirKit, you can easily create a tour
                itinerary that fits your specific interests and preferences. You
                can choose from a variety of activities, accommodations, and
                transportation options, and even add extra days to your tour if
                you wish. We also offer a variety of travel plans that include
                flights, accommodation, and tours. These plans are designed to
                save you time and money, and take the hassle out of planning
                your trip.
              </h1>
              
              <h1 class="m_2">
                Thank you for choosing the best tour planning website, and happy travels!
              </h1>
              <hr className="lines2"/>

            </div>
          </div>
        </div>
      </div>
      <div class="content-bottom second">
        <div class="container bottom">
          <div class="row1 content_bottom-text">
            <div class="column">
              <h1>
                Get Top Tour Places
              </h1>
              <hr className="lines"/>

              <h1 class="m_1">
                In addition to our tour options, we also provide valuable travel
                information and resources on our website, such as visa and
                vaccination requirements, currency exchange rates, and local
                customs and etiquette. We understand that everyone's travel
                needs are different, that's why our team of experienced travel
                consultants is here to help you plan the perfect tour. Whether
                you're a solo traveler, a family, or a group, we'll work with
                you to create a tour that meets your needs and budget. We're
                passionate about travel and we want to share that passion with
                you. So, whether you're planning your next vacation or your next
                adventure, let us help you make it an unforgettable one.
              </h1>
              <hr className="lines2"/>

            </div>
          </div>
          <ul className="keywords">
            The Services Provided :
          <h2 className="SEOkeywords">Best Trip Planner</h2>
          <h2 className="SEOkeywords">Best Route Planner</h2>
          <h2 className="SEOkeywords">Top Tourism</h2>
          <h2 className="SEOkeywords">Top Tour Places</h2>
          <h2 className="SEOkeywords">Best Holiday Planner</h2>

          </ul>
        </div>
      </div>
    </>
  );
}
