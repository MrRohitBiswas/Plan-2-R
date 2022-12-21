import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Results from "../database/resp.json";
import "./topPlacesResp.css"
export default function topPlacesResp() {
  return (
    <div className='topPlacesResult ' >
        <h1 className="topPlacesResultHeading">Top Places Results:</h1>
        <hr style={{ 
  display: 'block',
  marginTop: '0.5em',
  marginBottom: '0.5em',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderStyle: 'inset',
  borderWidth: '2px',
}}/>
        <ul class="cards results">
        {Results.topPlaces.map((spots) => {
            return (
                
                <li>
                  <a href="" class="card">
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
                  </a>      
                </li>
                
                );
            })}
            </ul>
    </div>
  )
}
