import React from "react";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import CityDetails from "./CityDetails";
import WeatherDetails from "./WeatherDetails";
import "./Content.css";

export default function Content() {
  const foreCast = [
    { day: "Mon", min: 12, max: 21 },
    { day: "Tues", min: 9, max: 24 },
    { day: "Wedn", min: 23, max: 39 },
    { day: "Thurs", min: 19, max: 30 },
    { day: "Fri", min: 20, max: 26 },
    { day: "Sat", min: 17, max: 22 }
  ];
  const cityDetails = {
    cityName: "Lagos, Nigeria",
    currentDate: "10:00",
    tempDes: "Cloudy",
    humidity: 20,
    wind: 12
  };

  return (
    <div className="Content">
      <Search />
      <section className="weather-result card rounded">
        <div className="row card-body">
          <div className="col" id="forecast">
            {foreCast.map((element) => {
              return (
                <WeatherForecast
                  day={element.day}
                  min={element.min}
                  max={element.max}
                />
              );
            })}
          </div>

          <div className="col">
            <CityDetails cityDetails={cityDetails} />
            <WeatherDetails />
          </div>
        </div>
      </section>
    </div>
  );
}
