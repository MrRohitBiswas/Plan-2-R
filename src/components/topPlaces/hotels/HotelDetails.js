import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HotelDetails.css";
import {getHotels} from '../../../api/apiRoutes';


export default function HotelDetails() {

  const hotelsData = {
    "_id": "63a33392e5135e448c328545",
    "name": "West Bengal",
    "hotels": [
      {
        "name": "Satyam Hotel and Restaurant",
        "features": ["3-star hotel", "Breakfast", "Air conditioning"],
        "price": "₹1,232",
        "image": ""
      },
      {
        "name": "Hotel Classic",
        "features": ["2-star hotel", "Room service", "Kitchen in some rooms"],
        "price": "₹1,231",
        "image": ""
      },
      {
        "name": "OYO 8970 New Ashoka Hotel",
        "features": ["2-star hotel", "Breakfast", "Air conditioning"],
        "price": "",
        "image": ""
      },
      {
        "name": "Taj City Centre New Town, Kolkata",
        "features": ["5-star hotel", "Free breakfast", "Wi-Fi"],
        "price": "",
        "image": ""
      },
      {
        "name": "OYO 24223 Upasana Guest House",
        "features": ["Breakfast", "Air conditioning", "Kid-friendly"],
        "price": "",
        "image": ""
      },
      {
        "name": "OYO 25040 Hotel Victoria",
        "features": ["Parking", "Air conditioning", "Restaurant"],
        "price": "₹3,277",
        "image": ""
      },
      {
        "name": "Hotel Jayshree Inn",
        "features": ["4-star hotel", "Air conditioning", "Room service"],
        "price": "₹4,380",
        "image": ""
      },
      {
        "name": "Flagship 76255 Airport Comfort Stay",
        "features": ["Free Wi-Fi", "Room service", "Kitchen in some rooms"],
        "price": "₹585",
        "image": ""
      },
      {
        "name": "OYO Flagship 26243 Lake Market Kalighat",
        "features": ["3-star hotel", "Free breakfast", "Wi-Fi"],
        "price": "",
        "image": ""
      },
      {
        "name": "OYO 3674 Hotel Nihar Inn",
        "features": [
          "Room service",
          "Kitchen in some rooms",
          "Full-service laundry"
        ],
        "price": "",
        "image": ""
      },
      {
        "name": "Capital O 700752 Hotel Dak Plaza",
        "features": ["Wi-Fi", "Room service", "Kitchen in some rooms"],
        "price": "₹918",
        "image": ""
      },
      {
        "name": "OYO 28291 Akash Ganga Stay",
        "features": ["Air conditioning", "Kid-friendly"],
        "price": "",
        "image": ""
      },
      {
        "name": "OYO Flagship 15738 Hotel Ag Star",
        "features": ["3-star hotel", "Wi-Fi", "Parking"],
        "price": "₹396",
        "image": ""
      },
      {
        "name": "Kings Crown Saltlake",
        "features": ["Free breakfast", "Room service", "Kitchen in some rooms"],
        "price": "₹10,484",
        "image": ""
      }
    ],
    "timestamp": "2022-12-21T16:25:54.146Z"
  }
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {id} = useParams();

  const [hotelsArr, setHotelsArr] = useState([]);

//   useEffect(() => {
//     (async () => {
//     const data = await getHotels(id);
//     setHotelsArr(data.hotels);
//     console.log(data.hotels);
//   })();
// }, [])

useEffect(() => {
 setHotelsArr(hotelsData.hotels);
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
