import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'

const DaysItems = ({app_max_temp,app_min_temp,weather,datetime, pres, wind_cdir_full, wind_spd}) => {
  const {addDays,mat, setOnClickDay} = useContext(AppContext)

function addDay() {
  addDays({app_max_temp, app_min_temp, weather, datetime, pres, wind_cdir_full, wind_spd })
  setOnClickDay(true)
}

  
  const discr = weather?.description
  const icons = weather?.icon
  console.log(icons);
  return (
    <div onClick={addDay} className='daysItems'>
      <div  className='text-xl mt-4'>{datetime}</div>
      <img className='mx-auto mt-2' src={`/img/amcharts_weather_icons_1.0.0/animated/${icons}.svg`} alt=""  width={50}/>
      <div>+{mat(app_max_temp)}°</div>
      <div className='text-gray-500'>+{mat(app_min_temp)}°</div>
      <div className='mt-1'>{discr}</div>
      </div>
    
  )
}

export default DaysItems