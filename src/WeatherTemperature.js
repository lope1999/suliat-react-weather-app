import React, { useState } from "react";

export default function WeatherTemperature({ celsius }) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weather-day">
        <span>{Math.round(celsius)}</span>
        <span className="units">
          °C|
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weather-day">
        <span>{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
