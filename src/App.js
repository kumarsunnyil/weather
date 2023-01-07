import { useEffect, useState } from "react";
import "./App.css";
import jsonData from "./data/JSON_DATA.json";
import Weather from "./Weather/Weather";

const  App = () => {
  const [weatherData, setWeatherData] = useState(jsonData);
  const [mainData, setMainData] = useState([weatherData.main]);
  const [weatherForecast, setWeatherForecast] = useState([weatherData.weather]);

useEffect(()=> {
  fetchData();
})
  const fetchData  = async () => {
    const url  = "https://api.openweathermap.org/data/2.5/weather?q=Kochi,IN&APPID=22332ecd6fe828240cbe0e6cc9ae5b41"
    await fetch(`${url}`)
                  .then((res) => res.json())
                  .then((json) => {
                      // data is received here
                     console.log(json)

                      json.map((data) =>{
                      console.log(data.main)
                    } )
                  })
          }
  

  return (
    <div className="App">
      <div>
        <h1> Weather Information</h1>
        heheh
        {
          
         <Weather mainData={mainData} weatherForecast={weatherForecast}/>
        }
      </div>
    </div>
  );
}

export default App;
