import React, { useEffect } from "react";
import './LoadingBar.css'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function LoadingBar() {
  useEffect(() => {
    disableBodyScroll(document)
    return () => {
      enableBodyScroll(document)
    }
  }, [])
  
  return (
    <div className="loadBody">
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
}
