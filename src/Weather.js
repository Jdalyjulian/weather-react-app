import React, { useState } from "react";
import axios from "axios";
import { Puff } from  'react-loader-spinner';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props){
  const [city, setCity] = useState(props.defaultCity)
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response){
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      conditions: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    })
  }

  function search() {
    let apiKey = "8c2fe6748ota9f3b208b33b2a2588f1e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if(weatherData.ready){
    return(
      <div className="Weather"> 
      <form  onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input 
              type="search" 
              placeholder="Enter a city..." 
              className="form-control" 
              autoFocus="on"
              onChange={handleCityChange}
              />
          </div>
          <div className="col-3">
            <input 
              type="submit" 
              value="search" 
              className="btn btn-primary w-100" 
              />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
      <WeatherForecast city={weatherData.city}/>
      </div>
    );
  } else {
    search();
    
    return (<Puff
    height="80"
    width="80"
    radius={1}
    color="grey"
    ariaLabel="puff-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />);
  }
}