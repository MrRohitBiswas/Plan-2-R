import React from 'react';
import { Switch} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Services from './components/Services'
import LogReg from './components/LogReg';
import SearchState from './components/SearchState';
import HotelDetails from './components/topPlaces/hotels/HotelDetails';
import PlaceDetails from './components/topPlaces/PlaceDetailsComponents/PlaceDetails';
import Feed from './components/feed/Feed';
import NLPSearch from './components/nlpSearch/NLPSearch';

import Home from './components/Home';


// Layouts
import LayoutDefault from './layouts/LayoutDefault';
// Views 

import ContactUsEntry from './ContactUsEntry';
//Helmet
import { Helmet } from 'react-helmet';
// Initialize Google Analytics
import ReactGA from 'react-ga';
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
          <AppRoute exact path="/Home" component={Home} />
          <AppRoute exact path="/" component={Home} />

          <AppRoute exact path="/Contact" component={ContactUsEntry} layout={LayoutDefault} />
          <AppRoute exact path="/Services" component={Services}/>
          <AppRoute exact path="/LogReg" component={LogReg} layout={LayoutDefault} />
          <AppRoute exact path="/SearchState/:id" component={SearchState} layout={LayoutDefault}/>
          <AppRoute exact path="/HotelDetails/:id" component={HotelDetails}/>
          <AppRoute exact path="/route/:id" component={PlaceDetails}/>
          <AppRoute exact path="/Feed" component={Feed}/>
          <AppRoute exact path="/Search/:id" component={NLPSearch}/>
          <AppRoute exact path="/Search" component={NLPSearch}/>


          
        </Switch>
        <Footer/>
      </>
 
  );
}

export default App;