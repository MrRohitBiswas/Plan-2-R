import React, { useEffect } from 'react'
import Chart from '../stats/Chart'
import SearchBar from './SearchBar'
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

export default function NLPSearch() {

   //GA
   useEffect(() => {
    ReactGA.pageview(window.location.pathname); //interaction event
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
       <Helmet>
        <title>Tour CirKit | NLP Search</title>
        <meta
          name="Services Provided"
          content="All services provided by us, browse states and search wherever you plan to travel"
        />
      </Helmet>
        <SearchBar/>
        <Chart/>
    </div>
  )
}
