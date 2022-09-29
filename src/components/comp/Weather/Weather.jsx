import React from 'react'
import BlockLeft from './Block/BlockLeft'
import BlockRight from './Block/BlockRight'

const Weather = () => {
  return (
    <div className='flex justify-between'>
      <BlockLeft/>
      <BlockRight/>
    </div>
  )
}

export default Weather