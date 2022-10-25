import React, {useContext} from 'react'
import AppContext from '../../../Context/AppContext'



const  BlockRight = () => {
  const {app_max_temp, pres, mat, weather, wind_cdir_full, wind_spd, onClickDay, week} = useContext(AppContext)
  const firstDay = week?.data?.[0]
  const discr = weather?.description
  const icons = weather?.icon

  const styleBlockRight = {
item: 'flex justify-center items-center'
  }


  return (
<div>
  {onClickDay ? 
    <div className='blockRigh flex flex-col justify-center  sm:pt-0 my-10 '>


<div className={styleBlockRight.item}>
<img src="/img/temperature-svgrepo-com.svg" alt="" width={50} height={50}  />
<span  >{mat(app_max_temp)} C° - filling like {mat(app_max_temp - 1)}C°</span>
</div>

<div className={styleBlockRight.item}>
<img src="/img/water-svgrepo-com.svg" alt="" width={50} height={50}   />
<span>{mat(pres)} mm mercury column</span>
</div>

<div className={styleBlockRight.item}>
<img src="/img/wind-svgrepo-com.svg" alt="" width={50} height={50}/>
<span > {wind_spd} m/s {wind_cdir_full} </span>
</div>

<div className={styleBlockRight.item}>
<img src={`/img/amcharts_weather_icons_1.0.0/animated/${icons}.svg`} alt="" width={70} height={40}  />
<span>{discr}</span>

</div>

</div>

:
    <div className='blockRight flex flex-col justify-center  sm:pt-0 my-10 '>

    <div className={styleBlockRight.item}>
    <img src="/img/temperature-svgrepo-com.svg" alt="" width={50} height={50}/>
    <span >{mat(firstDay?.app_max_temp)} C° - filling like {mat(firstDay?.app_max_temp - 1)}C°</span>
    </div>
    
    <div className={styleBlockRight.item}>
    <img src="/img/water-svgrepo-com.svg" alt="" width={50} height={50}   />
    <span>{mat(firstDay?.pres)} mm mercury column</span>
    </div>
    
    <div className={styleBlockRight.item}>
    <img src={`/img/amcharts_weather_icons_1.0.0/animated/${firstDay?.weather?.icon}.svg`} alt="fdfs" width={50} height={50}  />
    <span>{firstDay?.weather?.description}</span>
    </div>
    
    <div className={styleBlockRight.item}>
    <img src="/img/wind-svgrepo-com.svg" alt=""  width={50} height={50} />
    <span> {firstDay?.wind_spd} m/s {firstDay?.wind_cdir_full} </span>
    </div>
    </div>
 }
</div>
    
  )
}

export default BlockRight
