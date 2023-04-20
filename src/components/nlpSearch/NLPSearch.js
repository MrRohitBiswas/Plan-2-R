import React, { useEffect } from 'react'
import Chart from '../stats/Chart'
import SearchBar from './SearchBar'
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import './NLPSearch.css'
export default function NLPSearch() {

   //GA
   useEffect(() => {
    ReactGA.pageview(window.location.pathname); //interaction event
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='nlpsearchmain'>

    <div className="container">
       <Helmet>
        <title>Tour CirKit | NLP Search</title>
        <meta
          name="Advcanced Search Mechanism"
          content="Search in your own language and express, we will find the place for you"
        />
      </Helmet>
        <SearchBar/>
        <Chart/>
    </div>
    </div>
  )
}
