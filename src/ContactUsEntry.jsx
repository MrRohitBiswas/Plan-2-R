import React, { useRef, useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import { Helmet } from 'react-helmet';
// Views 
import Home from './views/Home';


const ContactUsEntry = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    return () => {
      document.body.classList.remove("mystyle");
    }
  }, [location]);

  return (
    <>
  
  <Helmet>
        <title>Tour CirKit | Contact Us</title>
        <meta name='Contact Tour CirKit Developers' content='Know how the website works and contact the developers for more info'/>
      </Helmet>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Home />
        )} />
        </>
  );
}

export default ContactUsEntry;