import React, { useState } from "react";
import "./Weather.css";

const Weather = (props) => {
  const { mainData, weatherForecast } = props;
  //   const [forecast, setForecast] = useState("")
  let forecast = "";

  for (let i = 0; i < weatherForecast.length; i++) {
    //console.log(weatherForecast[i]);
    weatherForecast[i].map((thisForecast) => {
      forecast = thisForecast.description;
      //   console.log(thisForecast.description)
    });
  }
  const KELVIN = 273.15;
  const convertToCelcius = (temp) => {
    return (temp - KELVIN).toFixed(2);
  };
  return (
    <div>
      <p className="city-name">Bangalore City, India</p>
      
      {mainData.map((data) => {
        return (
          <div className="display-city-temperature">
            <section className="temp-display">
              <p>
              <span className="forecast">{forecast}</span>
              </p>
              <p>
                <span className="current-temp">
                  {convertToCelcius(data.temp)}
                </span>
              </p>
            </section>
            <section className="temp-display">
              <p>
                <span>Humidity {data.humidity}</span>
              </p>

              <div className="min-max-temp">
              <span> Min Temp.</span><span className="current-temp"> {convertToCelcius(data.temp_min)}</span>

                <span>Max Temp.</span><span className="current-temp"> {convertToCelcius(data.temp_max)}</span>
              </div>
            </section>
            <section className="temp-display"></section>
          </div>
        );
      })}
    </div>
  );
};

export default Weather;
