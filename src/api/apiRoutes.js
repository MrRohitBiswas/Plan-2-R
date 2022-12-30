export async function getTopSights(id) {
  const url = `/top-sights/?id=${id}`
  console.log('id:', id);
  const resp = await fetch(url);

  if (resp.status === 200) {
    const data = await resp.json();
    console.log(data);
    // setTopPlacesArr(data.topPlaces);
    return data;
    // console.log(data);
  }
}

export async function getHotels(id) {
  // const url = `http://localhost:5000/hotels/?id=${id}`;
  const url = `/hotels/?id=${id}`
  // console.log(id);
  const resp = await fetch(url);

  if (resp.status === 200) {
    // const data = {}
    try {
      const data = await resp.json();
      // setHotelsArr(data.hotels);
      // console.log(data);
      return data;
    } catch(err) {

    }
  }
}

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