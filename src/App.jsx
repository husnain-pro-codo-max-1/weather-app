import './App.css'
import SearchField from 'react-search-field';
import FeatherIcon from 'feather-icons-react';
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const[city ,setCity] = useState('');
  const[temp ,setTemp] = useState(0);
  const[humidity ,setHumidity] = useState(0);
  const[search ,setSearch] = useState('multan');
  const[pressure ,setPressure] = useState(0);
  const[wind ,setWind] = useState(0);


  useEffect(()=>{

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8f200bcb1d4486158a9c317c216a9008`)
    .then((res)=>{
// console.log(res);
      setTemp(res.data.main.temp);
      setCity(res.data.name);
      setPressure(res.data.main.pressure)
      setHumidity(res.data.main.humidity);
      setWind(res.data.wind.speed);
    })
    
  },[search])

  return (
    <>
    <div className="weather-box">
      <div className="weather-header">
        <h1>Weather App</h1>
      </div>
      <div className="weather-search">
              
      <SearchField
        placeholder="Search..."
        onSearchClick={(value)=>{setSearch(value)}}
        searchText={search}
        classNames="weather-input"
      />
      </div>


<div className="weather-icon">
<FeatherIcon  icon="cloud-rain" color="white" size="60" />;

</div> 

<div className="weather-city">
  <h1>{city}</h1>
</div>

<div className="weather-row">
  
  <div className="weather-col">

  <FeatherIcon  icon="sun" color="white"  />
    <p>Temp: {(temp-273.15).toFixed(2)} 'C</p>
  </div>


  <div className="weather-col">
  <FeatherIcon  icon="command" color="white" />
  <p>Pressure: {pressure}</p>

  </div>


</div>


{/* row 2 */}

<div className="weather-row">
  
  <div className="weather-col">

  <FeatherIcon  icon="cloud" color="white"  />
  <p>Humidity: {humidity}</p>
  </div>


  <div className="weather-col">
  <FeatherIcon  icon="wind" color="white" />
  <p>Wind: {wind}</p>

  </div>


</div>




    </div>
    </>
  )
}

export default App
