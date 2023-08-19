import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast({ day, min, max }) {
  return (
    <div className="Weather-forecast row mb-3">
      <span className="weather-forecast-span">
        <img src="" alt="" width={70} />
        <div>
          <strong className="date"> {day} </strong>
          <br />
          <div>
            <span className="temperature-max">{max}°</span>
            <span className="temperature-min">{min}°</span>
          </div>
        </div>
      </span>
    </div>
  );
}
