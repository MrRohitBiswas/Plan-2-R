import React, { useRef, useEffect } from 'react';
import { useLocation, BrowserRouter as Router, Switch, Routes} from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import Navbar from "./components/Navbar";
import Services from './components/Services'
import LogReg from './components/LogReg';
import ContactUs from './components/ContactUs';

import HomePage from './components/Home';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
     <Navbar title="Plan 2-R" />
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/Home" component={HomePage} />

          <AppRoute exact path="/Contact" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/Home" component={HomePage} />
          <AppRoute exact path="/Services" component={Services}/>
          <AppRoute exact path="/LogReg" component={LogReg} layout={LayoutDefault} />
        </Switch>
      )} />
      
      </>
 
  );
}

export default App;