import React, {useEffect, useState} from 'react';
// import sections
import Hero from './sections/Hero';
import FeaturesTiles from './sections/FeaturesTiles';
import FeaturesSplit from './sections/FeaturesSplit';
import Testimonial from './sections/Testimonial';
import Cta from './sections/Cta';
import LoadingBar from "./LoadingBar/LoadingBar";

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  //Loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? <LoadingBar /> : <></>}

      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
} 

export default Home;