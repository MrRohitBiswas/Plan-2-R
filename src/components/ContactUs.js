import React, {useEffect, useState, useRef} from 'react';
// import sections
import Hero from './sections/Hero';
import FeaturesTiles from './sections/FeaturesTiles';
import FeaturesSplit from './sections/FeaturesSplit';
import Testimonial from './sections/Testimonial';
import Cta from './sections/Cta';
import LoadingBar from "./LoadingBar/LoadingBar";
import {useLocation} from 'react-router-dom';

const Home = () => {
  

  return (
    <div className='contactus-body'>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </div>
  );
} 

export default Home;