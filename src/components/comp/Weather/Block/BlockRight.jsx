import React, {useContext} from 'react'
import AppContext from '../../../Context/AppContext'



const  BlockRight = () => {
  const {app_max_temp, pres, mat, weather, wind_cdir_full, wind_spd, onClickDay, week} = useContext(AppContext)
  const firstDay = week?.data?.[0]
  const discr = weather?.description
  const icons = weather?.icon


  return (
<div>
  {onClickDay ? 
    <div className='blockRight '>

<div className='flex'>
<img src="/img/temperature-svgrepo-com.svg" alt="" width={60}className='mt-8'  />
<span className='pl-10' >{mat(app_max_temp)} C° - ощущается как {mat(app_max_temp - 1)}C°</span>
</div>

<div className='flex'>
<img src="/img/water-svgrepo-com.svg" alt="" width={60} className='mt-8'  />
<span>{mat(pres)} мм ртутного столба - нормальное</span>
</div>

<div className='flex'>
<img src={`/img/amcharts_weather_icons_1.0.0/animated/${icons}.svg`} alt="" width={80}className='mt-8'  />
<span>{discr}</span>
</div>

<div className='flex'>
<img src="/img/wind-svgrepo-com.svg" alt="" width={60}className='mt-8' />
<span className='ml-10'> {wind_spd} м/с {wind_cdir_full} </span>
</div>
</div> :
    <div className='blockRight pl-10 '>

    <div className='flex'>
    <img src="/img/temperature-svgrepo-com.svg" alt="" width={60}className='mt-8'  />
    <span >{mat(firstDay?.app_max_temp)} C° - ощущается как {mat(firstDay?.app_max_temp - 1)}C°</span>
    </div>
    
    <div className='flex'>
    <img src="/img/water-svgrepo-com.svg" alt="" width={60} className='mt-8'  />
    <span>{mat(firstDay?.pres)} мм ртутного столба - нормальное</span>
    </div>
    
    <div className='flex'>
    <img src={`/img/amcharts_weather_icons_1.0.0/animated/${firstDay?.weather?.icon}.svg`} alt="fdfs" width={80}className='mt-8'  />
    <span>{firstDay?.weather?.description}</span>
    </div>
    
    <div className='flex'>
    <img src="/img/wind-svgrepo-com.svg" alt="" width={60}className='mt-8' />
    <span> {firstDay?.wind_spd} м/с {firstDay?.wind_cdir_full} </span>
    </div>
    </div>
 }
</div>
    
  )
}

export default BlockRight
