import Home from './components/pages/Home';
import React, { useEffect } from 'react';
import AppContext from './components/Context/AppContext';
import axios from 'axios';

function App() {

  function axiosRequest(obj) {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
      params: {lat:`${obj.lat}`, lon:`${obj.lon}`, units: 'metric', lang: 'eng'},
      headers: {
        'X-RapidAPI-Key': 'e4b4977b58mshe9373b5c1bddf23p1591b0jsnc180c829cc0e',
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


  const mat = Math.round
  
function addDays(obj) {
  setDay(obj)
}


  useEffect(() => {
  
 
    axiosRequest(value)
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
