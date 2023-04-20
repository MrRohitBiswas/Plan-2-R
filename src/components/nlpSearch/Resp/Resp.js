import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Resp.scss";
import './Resp.css'
import logo from '../../../components/components/resImg.jpg'

export default function Resp(loc) {
  const location = useLocation();
  const keyword = location.pathname.replace("/search/", "");
  const url = `/search2?id=${encodeURIComponent(keyword)}`;
  const [isLoading, setIsLoading] = useState(false);
  const [res, setRes] = useState([]);

  useEffect(() => {
    if (keyword) {
      async function fetchData() {
        setIsLoading(true);
        try {
          const options = {
            method: "GET",
            mode: "no-cors",
          };
          const response = await fetch(url, options);
          const jsonData = await response.json();
          console.log(jsonData.res);
          setRes(jsonData.res);
        } catch (error) {
          console.error(error);
          setRes([]);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    } else {
      setRes([]);
    }
    return setRes([]);
  }, [keyword, url]);

  return (
    <div className="nlpRes">
      <ul className = 'resList'>
        {isLoading ? (
          <></>
        ) : (
          res.map((spots, indx) => {
            return (
              <li className="topPlacesCards" key={indx} style={{margin: 'auto'}}>
                <div class="nlp">
                  <div class="main">
                    <h1 style={{ fontSize: "20px", fontWeight: "400", marginBottom:'0' , lineHeight: '30px', textAlign:'center', marginTop:'26%'}}>
                      {spots.Place}
                    </h1>
                    <p class="description">{spots.City}</p>

                  </div>
                  <div className="resLinks">
                    
                    <p class="resLinksChild lr" >
                      <Link to={{pathname: `/route/src=${spots.City}&dest=${spots.Place + ','}%20${spots.City}`, imgUrl: `${logo}`}}>
                        Details
                        </Link>
                        </p>
                    
                    <p class="resLinksChild rr">
                      <Link to={`/HotelDetails/${spots.City}`}>
                    Hotels
                    </Link>
                    </p>
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
