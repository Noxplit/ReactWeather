import './App.css';
import Home from './components/pages/Home';
import React, { useEffect } from 'react';
import AppContext from './components/Context/AppContext';
import axios from 'axios';
import data from './components/data/data16Days.json'

function App() {

  function axiosRequest(obj) {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
      params: {lat:`${obj.lat}`, lon:`${obj.lon}`, units: 'metric', lang: 'ru'},
      headers: {
        'X-RapidAPI-Key': '9adf2934bfmsh5539202ec1240d5p13af7djsnd4bbca99b2f4',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setWeek(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
 
  const [searchValue, setSearchValue] = React.useState('Baranovichi')
  const [day, setDay] = React.useState([])
  const [week, setWeek] = React.useState([])
  const [onClickDay, setOnClickDay] = React.useState(false)
	const [value, setValue] = React.useState({lat: 53, lon: 26})

  console.log(value);

  const mat = Math.round
  
function addDays(obj) {
  setDay(obj)
}


  useEffect(() => {
  
 
    //axiosRequest(value)
    setWeek(data)
  }, [value])



  return (
    <AppContext.Provider value={{searchValue, setSearchValue, setDay,addDays, ...day, mat, week , setOnClickDay, onClickDay, setValue, value}}>
    <div className="App">
      <Home/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
