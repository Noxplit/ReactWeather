import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import DaysItems from './DaysItems'

const WeatherDays = () => {
  const {week} = useContext(AppContext)
  const weekResp = week?.data
  return (
    <div className='blockItems flex flex-wrap justify-center shadow-md shadow-black'>
     {weekResp?.map((obj,id) =>  <DaysItems {...obj} key={id}/>)}
    </div>
  )
}

export default WeatherDays