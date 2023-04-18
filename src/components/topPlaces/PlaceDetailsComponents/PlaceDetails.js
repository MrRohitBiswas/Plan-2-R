import React, { useEffect, useRef, useState} from "react";
import ReactGA from "react-ga";
import RouteMap from "./RouteMap";
import { Helmet } from "react-helmet";
import Weather from "./Weather";
import "./PlaceDetails.css";
import {getDesc} from '../../../api/apiRoutes';

export default function PlaceDetails(params) {
  const imageUrl = useRef();
  // console.log(imageUrl);
  if (params.location.imgUrl !== undefined)
    imageUrl.current = params.location.imgUrl;
  else if (window.sessionStorage.getItem("imgUrl") !== undefined)
    imageUrl.current = window.sessionStorage.getItem("imgUrl");
  else {
    alert("Please go to previous page and continue :)");
  }
  useEffect(() => {
    if (
      !sessionStorage.getItem("imgUrl") ||
      JSON.parse(sessionStorage.getItem("imgUrl")).length === 0
    ) {
      sessionStorage.setItem("imgUrl", JSON.stringify(params.location.imgUrl));
    }
    if (params.location.imgUrl) {
      window.sessionStorage.setItem(
        "imgUrl",
        JSON.stringify(params.location.imgUrl)
      );
      imageUrl.current = params.location.imgUrl;
    }

    //GA
    ReactGA.pageview(window.location.pathname); //interaction event
    window.scrollTo(0, 0);
    return () => {};
  }, []);


  const [desc, setDesc] = useState([]);

  useEffect(() => {

    console.log('Render', desc);

    const url = window.location.href;
    // http://localhost:3000/route/src=West%20Bengal&dest=Victoria%20Memorial,%20West%20Bengal
    let tmp = url.split('/src=')[1];
    if (!tmp) {
      console.log('Wrong url');
      return;
    }

    tmp = tmp.split('&dest=');
    let dest = tmp[1];

    if (!dest) {
      console.log('Wrong url');
      return;
    }

    (async () => {
      let data = await getDesc(dest);
      setDesc(data.desc);
      // console.log(data.desc);
    })();

    console.log(dest);
  }, [])

  let path = window.location.pathname;
  let tourLoc, startAddr;
  const pathArr = path.split("/");
  if (pathArr.length === 3 && pathArr[1] === "route") {
    const query = pathArr[2];
    const queryArr = query.split("&");
    if (
      queryArr[0].slice(0, 4) === "src=" &&
      queryArr[1].slice(0, 5) === "dest="
    ) {
      tourLoc = queryArr[0].slice(4, queryArr[0].length);
      startAddr = queryArr[1].slice(5, queryArr[1].length);
    } else {
      document.querySelector("#map").innerHTML = "Error";
    }
  } else {
    document.querySelector("#map").innerHTML = "Error";
  }
  let result = startAddr.replaceAll(/%20/g, " ");
  return (
    <>
      <Helmet>
        <title>Tour CirKit | Spot Details</title>
        <meta
          name="Tour CirKit Spot Details"
          content="Gives the user an overview of the spot and helps them to plan better journey. Most of the details will be available in this page. weather, prices, modes of journey and cost estimate"
        />
      </Helmet>
      <div>
        <div>
          <div className="header">
            <div
              className="image"
              style={{
                backgroundImage: `url(${imageUrl.current})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="desc">
            <h2 className="heading">{result}</h2>
            <div className="description">
              {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero velit dolorum ipsa autem dolor modi et rerum, repellat est nobis quo atque, in voluptatem esse? Ratione alias assumenda ipsam nemo. */}
              {/* Loading */}
              {desc[1]}
            </div>
            </div>
          </div>
          <Weather place={result}/>
        </div>
        <RouteMap />
      </div>
    </>
  );
}
