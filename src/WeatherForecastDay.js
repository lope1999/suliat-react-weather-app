import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay({ data }) {
  function maxTemperature() {
    let temperature = Math.round(data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="Weather-forecast row mb-3">
        <span className="weather-forecast-span">
          <WeatherIcon code={data.weather[0].icon} size={30} />
          {/* <img src="" alt="" width={70} /> */}
          <div>
            <strong className="date">{day()}</strong>
            <br />
            <div>
              <span className="temperature-max">{maxTemperature()}</span>
              <span className="temperature-min">{minTemperature()}</span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
