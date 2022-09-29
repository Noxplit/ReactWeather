import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import Select from 'react-select'

const Header = () => {
	const {setValue } = useContext(AppContext)

	const options = [
		{ value: { lat: 53, lon: 26 }, label: 'Барановичи' },
		{ value: { lat: 53.9, lon: 27.56 }, label: 'Минск' },
		{ value: { lat:	52.0975, lon: 23.6877 }, label: 'Брест' },
		{ value: { lat:	55.1125, lon: 30.1217 }, label: 'Витебск' },
	]

	function onChange(obj) {
		setValue(obj.value)
	}

	return (
		<div className='flex justify-between'>
			<div className='flex'>
				<img className='bg-black' src='/img/harness-icon.svg' alt='' width={40} />
				<div className='text-4xl font-bold ml-10'>Noxplit Weather</div>
			</div>
			
				<Select
        defaultValue={{label: 'Барановичи' }}
					onChange={onChange}
					className=' text-black rounded-2xl text-3xl  text-center'
					options={options}
				/>
		</div>
	)
}

export default Header
