export async function getTopSights(id) {
  const url = `/top-sights/?id=${id}`
  // const url = './topSights.json'
  console.log('id:', id);
  const resp = await fetch(url);

  if (resp.status === 200) {
    const data = await resp.json();
    // console.log(data);
    // setTopPlacesArr(data.topPlaces);
    return data;
    // console.log(data);
  }
}

export async function getHotels(id) {
  const url = `/hotels/?id=${id}`
  // const url = './hotels.json';
  // console.log(id);
  const resp = await fetch(url);

  if (resp.status === 200) {
    try {
      const data = await resp.json();
      // setHotelsArr(data.hotels);
      console.log(data);
      return data;
    } catch(err) {

    }
  }
}

// export async function getHotels(id) {
//   console.log('HOTELS');
//   let a = await fetch('./hotels.json')
//   let b = await a.json();
//   console.log(b)
//   return b;
// }


export async function signup(obj) {
  const url = 'auth/signup';

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  });  
}

export async function login(obj) {
  const url = 'auth/login';

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  });  
}


