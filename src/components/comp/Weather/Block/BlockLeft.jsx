import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'

const BlockLeft = () => {
  const {app_max_temp, datetime, weather, mat, week, onClickDay } = useContext(AppContext)
  const firstDay = week?.data?.[0]
  const date = new Date()
  const icons = weather?.icon
  
  return (

    <div>
      {onClickDay ? <div className='blockLeft lg:text-4xl md:text-4xl sm:text-3xl text-2xl    flext flex-col items-center justify-center'>
      <div className='text-7xl pb-2' >{mat(app_max_temp)}°C</div>
      <img className='mx-auto'  src={`/img/amcharts_weather_icons_1.0.0/animated/${icons}.svg`} width={100} alt="" />
      <div className='pb-2'>Date: {datetime}</div>
      <div className='pb-2' >Time: {date.getHours()}:{date.getMinutes()}</div>
      <div >City: {week.city_name} </div>
    </div> : 
    <div className='blockLeft lg:text-4xl md:text-4xl sm:text-3xl text-xl    flext flex-col items-center justify-center'>
    <div className=' text-7xl pb-2'>{mat(firstDay?.app_max_temp)}°C</div>
    <img className='mx-auto' src={`/img/amcharts_weather_icons_1.0.0/animated/${firstDay?.weather?.icon}.svg`} width={100} alt="" />
    <div className='pb-2'>Date: {firstDay?.datetime}</div>
    <div className='pb-2'>Time: {date.getHours()}:{date.getMinutes()}</div>
    <div >City: {week.city_name} </div>
  </div>}
    </div>
    
  )
}

export default BlockLeft