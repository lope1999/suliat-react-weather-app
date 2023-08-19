import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  return (
    <div className="Weather-details row">
      <div className="weather-day">
        <span id="temperature">23</span>
        <span className="units">
          <a href="#" id="celcius" className="active">
            °C
          </a>
          |
          <a href="#" id="fahrenheit">
            °F
          </a>
        </span>
      </div>
      <img className="weather-logo" src="" alt="" id="weather-icon" />
    </div>
  );
}
