import React, { useEffect } from "react";
import './LoadingBar.css'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import gif from './loadingBall.gif'
export default function LoadingBar() {
  useEffect(() => {
    disableBodyScroll(document)
    return () => {
      enableBodyScroll(document)
    }
  }, [])
  
    //REMOVE INLINE CSS BEFORE FIXING


  return (
    <div className="loadBody" style={{
      background: 'rgba(0,0,0,0)',
      height: 'max-content'
    }}>
      {/* <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div> */}
      <img src={gif} alt="loading" style={{
        margin: 'auto'
      }}/>
    </div>
  );
}
