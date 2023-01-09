import React from 'react';
import {  Switch} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ReactGA from 'react-ga';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Services from './components/Services'
import LogReg from './components/LogReg';
import SearchState from './components/SearchState';
import HotelDetails from './components/topPlaces/hotels/HotelDetails';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
// Views 

import ContactUsEntry from './ContactUsEntry';
//Helmet
import { Helmet } from 'react-helmet';
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);



const App = () => {

  return (
    <>
      <Helmet>
        <title>Tour CirKit | Homepage</title>
        <meta name='Homepage of TourCirKit' content='Get started with the experience of all new unique tour planning app'/>
      </Helmet>
     <Navbar title="Tour CirKit" />
        <Switch>
          <AppRoute exact path="/" component={Services} />

          <AppRoute exact path="/Contact" component={ContactUsEntry} layout={LayoutDefault} />
          <AppRoute exact path="/Services" component={Services}/>
          <AppRoute exact path="/LogReg" component={LogReg} layout={LayoutDefault} />
          <AppRoute exact path="/SearchState/:id" component={SearchState} layout={LayoutDefault}/>
          <AppRoute exact path="/HotelDetails/:id" component={HotelDetails}/>
          
        </Switch>
        <Footer/>
      </>
 
  );
}

export default App;