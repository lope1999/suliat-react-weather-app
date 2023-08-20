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
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";
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

  const foreCast = [
    { day: "Mon", min: 12, max: 21 },
    { day: "Tues", min: 9, max: 24 },
    { day: "Wedn", min: 23, max: 39 },
    { day: "Thurs", min: 19, max: 30 },
    { day: "Fri", min: 20, max: 26 },
    { day: "Sat", min: 17, max: 22 },
  ];

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
            {/* <div className="col" id="forecast">
              {foreCast.map((element) => {
                return (
                  <WeatherForecast
                    day={element.day}
                    min={element.min}
                    max={element.max}
                  />
                );
              })}
            </div> */}

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
