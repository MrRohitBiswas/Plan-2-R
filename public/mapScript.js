function func() {

  path = window.location.pathname;
  const pathArr = path.split('/');
  if (pathArr.length === 3 && pathArr[1] === 'route') {
    const query = pathArr[2];
    const queryArr = query.split('&');
    if(queryArr[0].slice(0, 4) === 'src=' && queryArr[1].slice(0, 5) === 'dest=') {
      let tourLoc = queryArr[0].slice(4, queryArr[0].length);
      let startAddr = queryArr[1].slice(5, queryArr[1].length);
      let loc1, loc2;
      getResponse(tourLoc, startAddr);
    } else {
      document.querySelector('#map').innerHTML = 'Error';
    }
  } else {
    document.querySelector('#map').innerHTML = 'Error';
  }
}

func();

async function getResponse(place, place2) {
  let response = await fetch(
    `https://geocode.maps.co/search?q=${place}`,
    {
      method: 'GET'
    }
  );

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  let response2 = await fetch(
    `https://geocode.maps.co/search?q=${place2}`,
    {
      method: 'GET'
    }
  );

  if (!response2.ok) {
    console.error(`HTTP error! status: ${response2.status}`);
  }
  const data2 = await response2.json();
  // console.log('inside async');
  loc1 = { x: Number(data[0].lat), y: Number(data[0].lon) };
  loc2 = { x: Number(data2[0].lat), y: Number(data2[0].lon) };


  console.log(loc1);


  var map = L.map('map');

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

  L.Routing.control({
    waypoints: [
      L.latLng(loc2.x, loc2.y),
      L.latLng(loc1.x, loc1.y)
    ]
  }).addTo(map);

  map.on('Darjeeling', function (result) {
    L.marker([result.x, result.y]).addTo(map)
  });
}
