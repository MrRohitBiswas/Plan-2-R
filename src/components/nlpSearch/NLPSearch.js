import React from 'react'
import Chart from '../stats/Chart'
import SearchBar from './SearchBar'
export default function NLPSearch() {
  return (
    <div className="container">
        <SearchBar/>
        <Chart/>
    </div>
  )
}
