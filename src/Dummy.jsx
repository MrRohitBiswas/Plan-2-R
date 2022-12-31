import React, { useEffect } from 'react'

const Dummy = () => {
  useEffect(() => {
    console.log('UseEffect here');
  }, []);

  console.log('Dummy');
  return (
    <div>Dummy</div>
  )
}

export default Dummy