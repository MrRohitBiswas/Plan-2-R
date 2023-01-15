import React, { useEffect, useState } from 'react'
import "./topPlacesResp.css"
import {getTopSights} from '../../api/apiRoutes';
import LoadingBar from '../LoadingBar/LoadingBar';
import { Link } from 'react-router-dom';

export default function TopPlacesResp({id}) {
  const [topPlacesArr, setTopPlacesArr] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    let wantResults = true;
    setLoading(true);
    (async () => {
      const data = await getTopSights(id);
      if (wantResults) {
        setTopPlacesArr(data.topPlaces);
        setLoading(false);
      }
    })();
    return () => {
      wantResults = false;
      setLoading(false);
      setTopPlacesArr([]);
    }
  }, [id]);

  return (
    <>
    {loading ? <LoadingBar /> : <></>}
    <div className='topPlacesResult ' style={{height:'100vh'}}>
      <h1 className="topPlacesResultHeading">Top Places Results: {id}</h1>
      <hr style={{
        display: 'block',
        marginTop: '0.5em',
        marginBottom: '0.5em',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderStyle: 'inset',
        borderWidth: '2px',
      }} />
      <ul class="cards results">
        {topPlacesArr.map((spots, indx) => {
          return (

            <li className='topPlacesCards' key={indx}>
              <Link to={`/route/src=Kolkata&dest=${spots.place}`} class="card">
                <img src={spots.image} class="card__image" alt="" />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" ><path /></svg>
                    <div class="card__header-text">
                      <h3 class="card__title">{spots.place}</h3>

                    </div>
                  </div>
                  <p class="card__description">{spots.desc}</p>
                </div>
              </Link>
            </li>

          );
        })}
      </ul>
    </div>
    </>
  )
}
