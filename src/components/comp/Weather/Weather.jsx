import React from 'react'
import BlockLeft from './Block/BlockLeft'
import BlockRight from './Block/BlockRight'

const Weather = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 items-center mt-5 shadow-md shadow-black rounded-xl p-4'>
      <BlockLeft/>
      <BlockRight/>
    </div>
  )
}

export default Weather