import React, { useState } from "react";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import CityDetails from "./CityDetails";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";
import "./Content.css";

export default function Content() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Paris");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: Math.round(response.data.main.humidity),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "2bd326a60dc89a53287e446e819664df";
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

  if (weatherData.ready) {
    return (
      <div className="Content">
        <Search
          city={city}
          handleSubmit={handleSubmit}
          handleCityChange={handleCityChange}
        />
        <section className="weather-result card rounded">
          <div className="row card-body">
            <div className="col">
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
  } else {
    search();

    return "loading...";
  }
}
