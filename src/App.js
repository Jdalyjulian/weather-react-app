import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Austin" />
        <footer>
        This project was created by <a href="https://jdalyjulian.com" target="_blank" rel="noopener noreferrer">Julia Julian</a> {" "}and is {" "}
        <a href="https://github.com/Jdalyjulian/react-weather-app" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}
