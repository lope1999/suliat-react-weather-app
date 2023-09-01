import React, { useEffect, useState } from "react";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const apiKey = "2bd326a60dc89a53287e446e819664df";

  //HANDLE response and populate weatherData with retrieved weather details
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

  //HANDLE current button click
  function getCurrentWeather(position) {
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleCurrentBtnClick(event) {
    if (event) {
      event.preventDefault();
    }
    navigator.geolocation.getCurrentPosition(getCurrentWeather);
  }

  useEffect(() => {
    handleCurrentBtnClick();
  }, []);

  return (
    <div className="App border border-info">
      <Header handleCurrentBtnClick={handleCurrentBtnClick} />
      {weatherData.ready ? (
        <Content
          weatherData={weatherData}
          handleResponse={handleResponse}
          apiKey={apiKey}
        />
      ) : (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#ac87b2", "#306cce"]}
        />
      )}
      <Footer />
    </div>
  );
}
