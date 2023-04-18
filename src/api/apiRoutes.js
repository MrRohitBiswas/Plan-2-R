export async function getTopSights(id) {
  const url = `/top-sights/?id=${id}`
  // const url = './topSights.json'
  const resp = await fetch(url);

  if (resp.status === 200 || resp.status === 404 || resp.status === 500) {
    const data = await resp.json();
    return data;
  }
}

export async function getHotels(id) {
  const url = `/hotels/?id=${id}`
  const resp = await fetch(url);

  if (resp.status === 200 || resp.status === 404 || resp.status === 500) {
    try {
      const data = await resp.json();
      return data;
    } catch(err) {

    }
  }
}

export async function getDesc(id) {
  const url = `/desc/?id=${id}`
  // const url = './topSights.json'
  const resp = await fetch(url);

  if (resp.status === 200 || resp.status === 404 || resp.status === 500) {
    const data = await resp.json();
    return data;
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


