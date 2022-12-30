import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HotelDetails.css";
import {getHotels} from '../../../api/apiRoutes';

export default function HotelDetails() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {id} = useParams();

  const [hotelsArr, setHotelsArr] = useState([]);

  useEffect(() => {
    (async () => {
    const data = await getHotels(id);
    setHotelsArr(data.hotels);
    console.log(data.hotels);
  })();
}, [])

   
  return (
 
//   <section className="ftco-section bg-light">
//   <div className="container-fluid px-md-0">
//     <div className="row no-gutters">
      
//       {hotelsArr.map((currHotel) => {
//         return (

//       <div className="col-lg-6">
//         <div className="room-wrap d-md-flex">
//           <a href="#" className="img" style={{backgroundImage: 'https://preview.colorlib.com/theme/roxandrea'}} />
//           <div className="half left-arrow d-flex align-items-center">
//             <div className="text p-4 p-xl-5 text-center">
//               <p className="star mb-0"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></p>
//               <h3 className="mb-3"><a href="rooms.html">{currHotel.hotel}</a></h3>
//               <ul className="list-accomodation">
//                 {currHotel.features.map((feature) => {
//                   return (
//                   <li key={feature}>{feature}</li>
//                   )
//                 })}
//               </ul>
//               <p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">{currHotel.price!==''?currHotel.price:'View Details'} <span className="icon-long-arrow-right" /></a></p>
//             </div>
//           </div>
//         </div>
//       </div>
//         )
//       })}
//     </div>
//   </div>
// </section>


//unmapped section starts here
<section className="ftco-section bg-light">
  <div className="flag">
    
  </div>
<div className="container-fluid px-md-0">
  <div className="row no-gutters">

    {hotelsArr.map((currHotel, indx) => {
      let cssClass;
      let imgClass;
      if (Math.floor(indx/2)%2 == 0) {
        cssClass = "half left-arrow d-flex align-items-center";
        imgClass = "img";
        console.log(indx);
        console.log(cssClass);
      } else {
        cssClass = "half right-arrow d-flex align-items-center";
        imgClass = "img order-md-last";
        console.log(indx);
        console.log(cssClass);
      }
      let featuresArr = currHotel.features.slice(0,5);
      while (featuresArr.length < 4) {
        featuresArr.push(' - ');
      }

      return (    
      <div className="col-lg-6" key={indx}>
      <div className="room-wrap d-md-flex">
        <a href="#" className={imgClass} style={{backgroundImage: 'url(https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp)'}} />
        <div className={cssClass}>
          <div className="text p-4 p-xl-5 text-center">
            <p className="star mb-0"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></p>
            <h3 className="mb-3"><a href="rooms.html">{currHotel.name || currHotel.hotel}</a></h3>
            <ul className="list-accomodation">
            {featuresArr.map((feature, indx) => {
              return (
                <li key={indx}>{feature}</li>
              )
            })}
              {/* <li><span>Max:</span> 3 Persons</li>
              <li><span>Size:</span> 45 m2</li>
              <li><span>View:</span> Sea View</li>
              <li><span>Bed:</span> 1</li> */}
            </ul>
            <p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">{currHotel.price || 'View Room Details'} <span className="icon-long-arrow-right" /></a></p>
          </div>
        </div>
      </div>
    </div>
      )
    })}
  </div>
</div>
</section>

  );
}
