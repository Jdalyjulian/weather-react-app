import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { cleanup } from "@testing-library/react";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city])

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if(loaded) {
    return(
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast}/>
              </div>
            );
            } else {
              return null;}
            
          })}
        </div>
      </div>
    )
  } else {
    let apiKey = "8c2fe6748ota9f3b208b33b2a2588f1e";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);

    return null;
}
}