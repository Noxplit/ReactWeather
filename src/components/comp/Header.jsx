import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import Select from 'react-select'

const Header = () => {
	const {setValue, value } = useContext(AppContext)

	const options = [
		{ value: { lat: 53, lon: 26 }, label: 'Барановичи' },
		{ value: { lat: 53.9, lon: 27.56 }, label: 'Минск' },
		{ value: { lat:	52.0975, lon: 23.6877 }, label: 'Брест' },
		{ value: { lat:	55.1125, lon: 30.1217 }, label: 'Витебск' },
	]

	function onChange(obj) {
		setValue(obj.value)
	}

  console.log(value);

	return (
		<div className='flex md:justify-between justify-center flex-wrap items-center'>
      
			<div className='flex' >
				<img src='/img/harness-icon.svg' alt='' width={40} />
				<div className='text-4xl font-bold '>Noxplit Weather</div>


			</div>
<div>
      {/* <Select defaultValue={{label: 'Барановичи'}}  onChange={onChange} className='text-black' options={options}/> */}
			</div>	
		</div>
	)
}

export default Header
