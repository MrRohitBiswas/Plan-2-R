import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HotelDetails.css";
import { getHotels } from "../../../api/apiRoutes";

import LoadingBar from "../../LoadingBar/LoadingBar";
import { Helmet } from "react-helmet";
//ga
import ReactGA from "react-ga"
export default function HotelDetails() {
  useEffect(() => {
    
//GA
  ReactGA.pageview(window.location.pathname); //interaction event
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [hotelsArr, setHotelsArr] = useState([]);

  useEffect(() => {
    let wantResults = true;
    setLoading(true);
    console.log("UseEffect here");
    (async () => {
      const data = await getHotels(id);
      setLoading(false);
      if (wantResults) {
        console.log(data);
        setHotelsArr(data.hotels);
      }
      console.log(data.hotels);
    })();

    return () => {
      wantResults = false;
      setLoading(false);
      setHotelsArr([]);
    };
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Tour CirKit | Hotels</title>
        <meta
          name="Hotel Details"
          content="All the nearby cheapest hotels are displayed which user can book"
        />
      </Helmet>
      {loading ? <LoadingBar /> : <></>}
      <section className="ftco-section bg-light">
        <div className="flag"></div>
        <div className="container-fluid px-md-0">
          <div className="row no-gutters">
            {hotelsArr.map((currHotel, indx) => {
              let cssClass;
              let imgClass;
              let imgUrl1 =
                "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp";

              let imgUrl = imgUrl1;
              if (Math.floor(indx / 2) % 2 === 0) {
                cssClass = "half left-arrow d-flex align-items-center";
                imgClass = "img";
              } else {
                cssClass = "half right-arrow d-flex align-items-center";
                imgClass = "img order-md-last";
              }
              let featuresArr = currHotel.features.slice(0, 5);
              while (featuresArr.length < 4) {
                featuresArr.push(" - ");
              }

              return (
                <div className="col-lg-6 hotelDetailsCard" key={indx}>
                  <div className="room-wrap d-md-flex">
                    <a
                      href="/"
                      className={imgClass}
                      style={{ backgroundImage: `url(${imgUrl})` }}
                    />
                    <div className={cssClass}>
                      <div className="text text-center">
                        <p className="star mb-0">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </p>
                        <h3 className="mb-3 hotelCardsTitle">
                          <a href="rooms.html">
                            {currHotel.name || currHotel.hotel}
                          </a>
                        </h3>
                        <ul className="list-accomodation">
                          {featuresArr.map((feature, indx) => {
                            return <li key={indx}>{feature}</li>;
                          })}
                        </ul>
                        <p className="pt-1">
                          <a
                            href="room-single.html"
                            className="btn-custom px-3 py-2"
                          >
                            {currHotel.price || "View Room Details"}{" "}
                            <span className="icon-long-arrow-right" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
