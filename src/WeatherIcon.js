import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon({ code, size }) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  const colorMapping = {
    "01d": "yellow",
    "01n": "brown",
    "02d": "sky blue",
    "02n": "navy blue",
    "03d": "sky blue",
    "03n": "navy blue",
    "04d": "blue",
    "04n": "blue",
    "09d": "#0c89cb",
    "09n": "#0c89cb",
    "10d": "#0c89cb",
    "10n": "#0c89cb",
    "11d": "#0c89cb",
    "11n": "#0c89cb",
    "13d": "white",
    "13n": "white",
    "50d": "golden yellow",
    "50n": "golden yellow",
  };
  const defaults = {
    color: "blue",
    size: 40,
    animate: true,
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[code]}
      color={colorMapping[code]}
      size={size}
      animate={defaults.animate}
    />
  );
}
