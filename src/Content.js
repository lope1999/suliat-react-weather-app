import React, { useState } from "react";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import CityDetails from "./CityDetails";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";
import "./Content.css";

export default function Content({ weatherData, handleResponse, apiKey }) {
  const [city, setCity] = useState("");

  function search() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Content">
      <Search
        city={city}
        handleSubmit={handleSubmit}
        handleCityChange={handleCityChange}
      />
      <section className="weather-result card rounded">
        <div className="row card-body">
          <div className="col-12 col-md-6">
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>

          <div className="col">
            <CityDetails data={weatherData} />
            <WeatherDetails
              temperature={weatherData.temperature}
              description={weatherData.description}
              icon={weatherData.icon}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
