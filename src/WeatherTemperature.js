import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
  return(
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C |{" "} 
        <button onClick={showFahrenheit} class="btn btn-link">
        °F
       </button>
      </span>
    </div>
  );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
      <span className="temperature">{Math.round(fahrenheit)}</span>
      <span className="unit"><button onClick={showCelsius} class="btn btn-link">
          °C
       </button>{" "}|°F
      </span>
    </div>
    );
  }
}