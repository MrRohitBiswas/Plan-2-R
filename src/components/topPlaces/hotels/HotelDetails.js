import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HotelDetails.css";
export default function HotelDetails() {
  const {id} = useParams();

  const [hotelsArr, setHotelsArr] = useState([]);

  useEffect(() => {
    (async () => {
    
    // const url = `http://localhost:5000/hotels/?id=${id}`;
    const url = `/hotels/?id=${id}`
    // console.log(id);
    const resp = await fetch(url);

    if (resp.status === 200) {
      const data = await resp.json();
      setHotelsArr(data.hotels);
      console.log(data);
    }
  })();
})

   
  return (
 
  <section className="ftco-section bg-light">
  <div className="container-fluid px-md-0">
    <div className="row no-gutters">
      
      {hotelsArr.map((currHotel) => {
        return (

      <div className="col-lg-6">
        <div className="room-wrap d-md-flex">
          <a href="#" className="img" style={{backgroundImage: 'https://preview.colorlib.com/theme/roxandrea'}} />
          <div className="half left-arrow d-flex align-items-center">
            <div className="text p-4 p-xl-5 text-center">
              <p className="star mb-0"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></p>
              <h3 className="mb-3"><a href="rooms.html">{currHotel.hotel}</a></h3>
              <ul className="list-accomodation">
                {currHotel.features.map((feature) => {
                  return (
                  <li key={feature}>{feature}</li>
                  )
                })}
              </ul>
              <p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">{currHotel.price!==''?currHotel.price:'View Details'} <span className="icon-long-arrow-right" /></a></p>
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
