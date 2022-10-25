import React from 'react'
import Header from '../comp/Header'
import WeatherDays from '../comp/Weather/Days/WeatherDays'
import Weather from '../comp/Weather/Weather'
import Footer from '../comp/Weather/Footer'

const Home = () => {
  return (
    <div className='wrapper p-10'>
      <Header/>
      <Weather/>
      <WeatherDays/>
      <Footer/>
    </div>
  )
}

export default Home