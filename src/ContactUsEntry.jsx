import React, { useRef, useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import LoadingBar from './components/LoadingBar/LoadingBar';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const ContactUsEntry = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  //Loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return () => {
      document.body.classList.remove("mystyle");
    }
  }, [location]);

  return (
    <>
      {loading ? <LoadingBar /> : <></>}

    <ScrollReveal
      ref={childRef}
      children={() => (
        <Home />
        )} />
        </>
  );
}

export default ContactUsEntry;