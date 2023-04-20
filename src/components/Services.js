import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import $ from "jquery";
import "./components/MainService.scss";
import bg from "./components/bg.jpeg";
import States from "./States";
import "./ServiceSearchBar.css";
import { Helmet } from "react-helmet";
export default function Services() {
//GA
useEffect(() => {
  ReactGA.pageview(window.location.pathname); //interaction event
},)

useEffect(() => {
  window.scrollTo(0, 0)
}, []);

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
      
      <Helmet>
        <title>Tour CirKit | Services</title>
        <meta name='Services Provided' content='All services provided by us, browse states and search wherever you plan to travel'/>
      </Helmet>
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
        }}>

        <h1 style={{fontSize: '20px', lineHeight:'35px', color: 'black', marginTop:'0', paddingTop:'100px', fontWeight:'300', textAlign:'justify'}}>Search Below for the state you're looking for to travel! Whether you're seeking information of tour spots on a specific state or trying to find the holiday places of a country, the search bar is here to help. Simply type in your query and hit enter to see the results. With quick and relevant tourist places at your fingertips, finding where you want to visit has never been easier. So what are you waiting for? Start searching below!</h1>
        <hr/>
          <h1
            style={{
              fontSize: "40px",
              fontFamily: `Inter,sans-serif`,
              color:'black',
              fontWeight:'300'
            }}
          >
            Select the state:
          </h1>
          <hr/>
        </div>
        <h1 className="container exception" style={{fontSize: '20px', lineHeight:'35px', color: 'black', fontWeight:'300', paddingBottom:'30px'}}>If your state of your country is not present here, choose any state from here, you will get a search bar in there. you can search any place over ther to get the top tour sights</h1>
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
            {console.log(CurrState)}
            return (
              <div key={CurrState.key} className="wrapper my-3">
                <Link
                  to={{
                    pathname: `/SearchState/${CurrState.stateName}`,
                    State: { ...CurrState },
                  }}
                >
                {/* <Link to={`/SearchState/?${CurrState.stateName}`}> */}
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
