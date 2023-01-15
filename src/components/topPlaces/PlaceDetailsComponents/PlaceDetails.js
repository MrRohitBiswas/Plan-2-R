import React from 'react'
import RouteMap from './RouteMap'
export default function PlaceDetails() {
   let path = window.location.pathname;
   let tourLoc, startAddr;
  const pathArr = path.split('/');
  if (pathArr.length === 3 && pathArr[1] === 'route') {
    const query = pathArr[2];
    const queryArr = query.split('&');
    if(queryArr[0].slice(0, 4) === 'src=' && queryArr[1].slice(0, 5) === 'dest=') {
      tourLoc = queryArr[0].slice(4, queryArr[0].length);
      startAddr = queryArr[1].slice(5, queryArr[1].length);
    } else {
      document.querySelector('#map').innerHTML = 'Error';
    }
  } else {
    document.querySelector('#map').innerHTML = 'Error';
  }
  console.log(startAddr)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b7f68cfc00mshfaa4458e8de9e66p12495ejsn950150b92a60',
      'X-RapidAPI-Host': 'world-geo-data.p.rapidapi.com'
    }
  };
  
  let resp = fetch('https://world-geo-data.p.rapidapi.com/countries/US?language=en%2Cru%2Czh%2Ces%2Car%2Cfr%2Cfa%2Cja%2Cpl%2Cit%2Cpt%2Cde', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    console.log(resp);

  return (
    <div>
        <RouteMap/>
    </div>
  )
}
