import React from "react";
import "./HotelDetails.css";
export default function HotelDetails() {
  return (
 
  <section className="ftco-section bg-light">
  <div className="container-fluid px-md-0">
    <div className="row no-gutters">
      <div className="col-lg-6">
        <div className="room-wrap d-md-flex">
          <a href="#" className="img" style={{backgroundImage: 'https://preview.colorlib.com/theme/roxandrea'}} />
          <div className="half left-arrow d-flex align-items-center">
            <div className="text p-4 p-xl-5 text-center">
              <p className="star mb-0"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></p>
              <h3 className="mb-3"><a href="rooms.html">Suite Room</a></h3>
              <ul className="list-accomodation">
                <li><span>Max:</span> 3 Persons</li>
                <li><span>Size:</span> 45 m2</li>
                <li><span>View:</span> Sea View</li>
                <li><span>Bed:</span> 1</li>
              </ul>
              <p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right" /></a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="room-wrap d-md-flex">
          <a href="#" className="img" style={{backgroundImage: 'url(images/room-2.jpg)'}} />
          <div className="half left-arrow d-flex align-items-center">
            <div className="text p-4 p-xl-5 text-center">
              <p className="star mb-0"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></p>
              <h3 className="mb-3"><a href="rooms.html">Standard Room</a></h3>
              <ul className="list-accomodation">
                <li><span>Max:</span> 3 Persons</li>
                <li><span>Size:</span> 45 m2</li>
                <li><span>View:</span> Sea View</li>
                <li><span>Bed:</span> 1</li>
              </ul>
              <p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right" /></a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="room-wrap d-md-flex">
          <a href="#" className="img order-md-last" style={{backgroundImage: 'url(images/room-3.jpg)'}} />
          <div className="half right-arrow d-flex align-items-center">
            <div className="text p-4 p-xl-5 text-center">
              <p className="star mb-0"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></p>
              <h3 className="mb-3"><a href="rooms.html">Family Room</a></h3>
              <ul className="list-accomodation">
                <li><span>Max:</span> 3 Persons</li>
                <li><span>Size:</span> 45 m2</li>
                <li><span>View:</span> Sea View</li>
                <li><span>Bed:</span> 1</li>
              </ul>
              <p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right" /></a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="room-wrap d-md-flex">
          <a href="#" className="img order-md-last" style={{backgroundImage: 'url(images/room-4.jpg)'}} />
          <div className="half right-arrow d-flex align-items-center">
            <div className="text p-4 p-xl-5 text-center">
              <p className="star mb-0"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></p>
              <h3 className="mb-3"><a href="rooms.html">Deluxe Room</a></h3>
              <ul className="list-accomodation">
                <li><span>Max:</span> 3 Persons</li>
                <li><span>Size:</span> 45 m2</li>
                <li><span>View:</span> Sea View</li>
                <li><span>Bed:</span> 1</li>
              </ul>
              <p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right" /></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
