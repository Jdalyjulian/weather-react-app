import React from "react";
import Timestamp from "./Timestamp";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
        <ul>
          <li><Timestamp date={props.data.date} /></li>
          <li className="text-capitalize">{props.data.conditions}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <WeatherIcon code={props.data.iconUrl} alt={props.data.conditions} className="float-left"/>
              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{Math.round(props.data.humidity)}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
    </div>
  );
  
}