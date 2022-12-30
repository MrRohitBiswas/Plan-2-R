import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HotelDetails.css";
import {getHotels} from '../../../api/apiRoutes';

import LoadingBar from "../../LoadingBar/LoadingBar";


export default function HotelDetails() {

  const hotelsData = {
    "_id": "63a33392e5135e448c328545",
    "name": "West Bengal",
    "hotels": [
      {
        "name": "Satyam Hotel and Restaurant",
        "features": ["3-star hotel", "Breakfast", "Air conditioning"],
        "price": "₹1,232",
        "image": "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      },
      {
        "name": "Hotel Classic",
        "features": ["2-star hotel", "Room service", "Kitchen in some rooms"],
        "price": "₹1,231",
        "image": "https://www.tajhotels.com/content/dam/tajhotels/ihcl/vivanta/vivanta_sikkim_ihcl.jpg"
      },
      {
        "name": "OYO 8970 New Ashoka Hotel",
        "features": ["2-star hotel", "Breakfast", "Air conditioning"],
        "price": "₹1,500",
        "image": "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
      },
      {
        "name": "Taj City Centre New Town, Kolkata",
        "features": ["5-star hotel", "Free breakfast", "Wi-Fi"],
        "price": "₹2,167",
        "image": "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      },
      {
        "name": "OYO 24223 Upasana Guest House",
        "features": ["Breakfast", "Air conditioning", "Kid-friendly"],
        "price": "₹2,500",
        "image": "https://images.indianexpress.com/2021/06/Welcomhotel-Tavleen-Chail_1200.jpg"
      },
      {
        "name": "OYO 25040 Hotel Victoria",
        "features": ["Parking", "Air conditioning", "Restaurant"],
        "price": "₹3,277",
        "image": "https://www.luxuryabode.com/mona/img/hotels.jpg"
      },
      {
        "name": "Hotel Jayshree Inn",
        "features": ["4-star hotel", "Air conditioning", "Room service"],
        "price": "₹4,380",
        "image": "https://www.lux-review.com/wp-content/uploads/2019/09/turkish-hotel.jpg"
      },
      {
        "name": "Flagship 76255 Airport Comfort Stay",
        "features": ["Free Wi-Fi", "Room service", "Kitchen in some rooms"],
        "price": "₹585",
        "image": "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
      },
      {
        "name": "OYO Flagship 26243 Lake Market Kalighat",
        "features": ["3-star hotel", "Free breakfast", "Wi-Fi"],
        "price": "₹4,500",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVUtG64cshFWiWAVDwOF5XUFe2I0qb6a5EQ&usqp=CAU"
      },
      {
        "name": "OYO 3674 Hotel Nihar Inn",
        "features": [
          "Room service",
          "Kitchen in some rooms",
          "Full-service laundry"
        ],
        "price": "₹3,600",
        "image": "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
      },
      {
        "name": "Capital O 700752 Hotel Dak Plaza",
        "features": ["Wi-Fi", "Room service", "Kitchen in some rooms"],
        "price": "₹918",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZrIF2aB6wwZ4Bt2vvx1E0QGzVoCzu2KxwA&usqp=CAU"
      },
      {
        "name": "OYO 28291 Akash Ganga Stay",
        "features": ["Air conditioning", "Kid-friendly"],
        "price": "₹1,520",
        "image": "https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider3-1.jpg"
      },
      {
        "name": "OYO Flagship 15738 Hotel Ag Star",
        "features": ["3-star hotel", "Wi-Fi", "Parking"],
        "price": "₹396",
        "image": "https://image-tc.galaxy.tf/wijpeg-9vualzt3dbue0hi00ba4q49ub/chatwalhotelnyc-c-004-build-crop.jpg?width=1920"
      },
      {
        "name": "Kings Crown Saltlake",
        "features": ["Free breakfast", "Room service", "Kitchen in some rooms"],
        "price": "₹10,484",
        "image": "https://media.cntraveler.com/photos/5bb280856477eb358f142bf8/master/w_4000,h_2667,c_limit/Souq-Waqif-Boutique-Hotels_Courtesy-SOUQ-WAQIF-BOUTIQUE-HOTELS-BY-TIVOLI_2018_Najd-Hotel-Lobby.jpg"
      }
    ],
    "timestamp": "2022-12-21T16:25:54.146Z"
  }
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
<>
{loading ? <LoadingBar /> : <></>}
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
      <div className="col-lg-6 hotelDetailsCard" key={indx}>
      <div className="room-wrap d-md-flex">
        <a href="#" className={imgClass} style={{backgroundImage: `url(${currHotel.image}`}} />
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
</>
  );
}
