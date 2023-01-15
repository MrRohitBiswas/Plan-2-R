import React from 'react';
import {  Switch} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Services from './components/Services'
import LogReg from './components/LogReg';
import SearchState from './components/SearchState';
import HotelDetails from './components/topPlaces/hotels/HotelDetails';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
// Views 

//Helmet
import { Helmet } from 'react-helmet';
// Initialize Google Analytics
import ReactGA from 'react-ga';
import RouteMap from './components/topPlaces/RouteMap';
import ContactUs from './components/ContactUs';
const msr_iD ="G-1Y51BD6TYZ"; //measurement id
ReactGA.initialize(msr_iD);



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

          <AppRoute exact path="/Contact" component={ContactUs} layout={LayoutDefault} />
          <AppRoute exact path="/Services" component={Services}/>
          <AppRoute exact path="/LogReg" component={LogReg} layout={LayoutDefault} />
          <AppRoute exact path="/SearchState/:id" component={SearchState} layout={LayoutDefault}/>
          <AppRoute exact path="/HotelDetails/:id" component={HotelDetails}/>
          <AppRoute exact path="/route/:id" component={RouteMap}/>
          
        </Switch>
        <Footer/>
        {/* <RouteMap /> */}
      </>
 
  );
}

export default App;