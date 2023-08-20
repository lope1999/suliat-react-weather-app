import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherDetails.css";

export default function WeatherDetails({ temperature, description, icon }) {
  return (
    <div className="Weather-details row">
      <WeatherTemperature celsius={temperature} />
      <WeatherIcon code={icon} />
      {/* <img className="weather-logo" src={iconUrl} alt={description} /> */}
    </div>
  );
}
