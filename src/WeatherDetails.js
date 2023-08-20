import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDetails.css";

export default function WeatherDetails({ temperature, description, icon }) {
  return (
    <div className="Weather-details row">
      <div className="weather-day">
        <span>{temperature}</span>
        <span className="units">
          <a href="#" className="active">
            °C
          </a>
          |<a href="#">°F</a>
        </span>
      </div>
      <WeatherIcon code={icon} />
      {/* <img className="weather-logo" src={iconUrl} alt={description} /> */}
    </div>
  );
}
