import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import './Resp.css'

export default function Resp(loc) {
  
  const location = useLocation();
  const keyword = location.pathname.replace("/search/", "");
  const url = `https://tourcirkit.com/search2?id=${encodeURIComponent(keyword)}`;
  const [isLoading, setIsLoading] = useState(false);
  const [res, setRes] = useState([]);
    
  useEffect(() => {
    if (keyword) {
      async function fetchData() {
        setIsLoading(true);
        try {
          const options = {
            method: 'GET',
            mode: 'no-cors'
          };
          const response = await fetch(url, options);
          const jsonData = await response.json();
          console.log(jsonData);
          setRes(jsonData);
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
    return setRes([])
  }, [keyword, url]);
  
  
  
  
  return (
    <div>
        <p>
          {/* {JSON.stringify(res)} */}
        </p>
    </div>
  )
}
