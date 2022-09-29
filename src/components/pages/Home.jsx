import React from 'react'
import Header from '../comp/Header'
import WeatherDays from '../comp/Weather/Days/WeatherDays'
import Weather from '../comp/Weather/Weather'

const Home = () => {
  return (
    <div className='wrapper rounded-2xl p-5'>
      <Header/>
      <Weather/>
      <WeatherDays/>
    </div>
  )
}

export default Home