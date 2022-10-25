import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import Select from 'react-select'

const Header = () => {
	const {setValue, value } = useContext(AppContext)

	const weatherCity = 
  {
    baranovichi: { lat: 53, lon: 26 }, baranovichiName: 'Baranovichi' ,
    minsk: { lat: 53.9, lon: 27.56 }, minskName: 'Minsk' ,
    brest: { lat:	52.0975, lon: 23.6877 }, brestName: 'Brest' ,
    vitebsk: { lat:	55.1125, lon: 30.1217 }, vitebskName: 'Vitebsk' ,
  }
	
  const styleCity = {
    style: 'mr-5 rounded-xl shadow-sm shadow-black p-2'
  }
		 
		 
		
	

	function onChange(obj) {
    setValue(obj.value);
	}


	return (
		<div className='flex md:justify-between justify-center flex-wrap items-center'>
      
			<div className='flex' >
				<img src='/img/harness-icon.svg' alt='' width={40} />
				<div className='text-4xl font-bold '>React Weather</div>


			</div>
<div>
  <div className='flex justify-center items-center my-5 md:my-0'>
  <div><button className={styleCity.style}  onClick={() => setValue(weatherCity.baranovichi)}>Baranovichi</button></div>
  <div><button className={styleCity.style} onClick={() => setValue(weatherCity.minsk)}>Minsk</button></div>
  <div><button className={styleCity.style} onClick={() => setValue(weatherCity.brest)}>Brest</button></div>
  <div><button className={styleCity.style} onClick={() => setValue(weatherCity.vitebsk)}>Vitebsk</button></div>
  </div>
      {/* <Select defaultValue={{label: 'Baranovichi'}}  onChange={onChange} styles={{backgroundColor:'red'}} className='text-black' options={options}/> */}
			</div>	
		</div>
	)
}

export default Header
