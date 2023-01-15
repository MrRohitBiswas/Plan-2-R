import React, {useEffect} from 'react'
import './RouteMap.css'
const RouteMap = () => {
  useEffect(() => {
    const css1 = document.createElement('link');
    css1.rel = 'stylesheet';
    css1.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
    css1.integrity = 'sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=';
    css1.crossOrigin = '';
    document.head.appendChild(css1);

    const script1 = document.createElement('script');
    script1.src = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js';
    script1.integrity = 'sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=';
    script1.crossOrigin = ''
    script1.async = false
    document.head.appendChild(script1);

    const css2 = document.createElement('link');
    css2.rel = 'stylesheet';
    css2.href = 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.css';
    document.head.appendChild(css2);

    const css3 = document.createElement('link');
    css3.rel = 'stylesheet';
    css3.href = 'https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css';
    document.head.appendChild(css3);

    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.js';
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = 'https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js';
    document.head.appendChild(script3);

    const script4 = document.createElement('script');
    script4.src = '/mapScript.js';
    script4.type = 'text/javascript';
    document.body.appendChild(script4);
  
    return () => {
      document.head.removeChild(css1);
      document.head.removeChild(script1);
      document.head.removeChild(css2);
      document.head.removeChild(css3);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
      document.body.removeChild(script4);
    }
  }, [])
  
  return (
    <div>
    <div id="map" style={{height: '533px', width: '667px', zIndex: '0'}}>
    </div>
    </div>
  )
}

export default RouteMap