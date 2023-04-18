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
    {loading ? <LoadingBar /> : 
    <div className='topPlacesResult '>
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
      <ul className="cards results">
        {topPlacesArr.map((spots, indx) => {
          return (

            <li className='topPlacesCards' key={indx}>
              <Link to={{pathname: `/route/src=${id}&dest=${spots.place + ','}%20${id}`, imgUrl: `${spots.image}`}} className="card">
                <img src={spots.image} className="card__image" alt="Top Place Images" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg className="card__arc" ><path /></svg>
                    <div className="card__header-text">
                      <h3 className="card__title">{spots.place}</h3>

                    </div>
                  </div>
                  <p className="card__description">{spots.desc}</p>
                </div>
              </Link>
            </li>

          );
        })}
      </ul>
    </div>
    }
    </>
  )
}
