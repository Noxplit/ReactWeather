import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'

const BlockLeft = () => {
  const {app_max_temp, datetime, weather, mat, week, onClickDay } = useContext(AppContext)
  const firstDay = week?.data?.[0]
  const date = new Date()
  const icons = weather?.icon
  
  return (

    <div>
      {onClickDay ? <div className='blockLeft'>
      <div className=' text-7xl pt-5'>{mat(app_max_temp)}°C</div>
      <img className='mx-auto pt-5' src={`/img/amcharts_weather_icons_1.0.0/animated/${icons}.svg`} width={100} alt="" />
      <div className='text-2xl pt-5'>Дата: {datetime}</div>
      <div className='text-2xl pt-5'>Время: {date.getHours()}:{date.getMinutes()}</div>
      <div className='text-2xl pt-5'>Город: {week.city_name} </div>
    </div> : 
    <div className='blockLeft'>
    <div className=' text-7xl pt-5'>{mat(firstDay?.app_max_temp)}°C</div>
    <img className='mx-auto pt-5' src={`/img/amcharts_weather_icons_1.0.0/animated/${firstDay?.weather?.icon}.svg`} width={100} alt="" />
    <div className='text-2xl pt-5'>Дата: {firstDay?.datetime}</div>
    <div className='text-2xl pt-5'>Время: {date.getHours()}:{date.getMinutes()}</div>
    <div className='text-2xl pt-5'>Город: {week.city_name} </div>
  </div>}
    </div>
    
  )
}

export default BlockLeft