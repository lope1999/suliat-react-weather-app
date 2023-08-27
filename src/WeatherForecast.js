import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let longitude = coordinates.lon;
    let latitude = coordinates.lat;
    let apiKey = "2bd326a60dc89a53287e446e819664df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);
  if (loaded) {
    return (
      <div>
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return <WeatherForecastDay data={dailyForecast} key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();

    return null;
  }
}
