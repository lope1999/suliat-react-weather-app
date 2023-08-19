import React from "react";
import "./CityDetails.css";

export default function CityDetails({ cityDetails }) {
  let { cityName, currentDate, tempDes, humidity, wind } = cityDetails;

  return (
    <div className="City-details row shadow-lg bg-body-tertiary rounded">
      <h2 className="city-text" id="city-text">
        {cityName}
      </h2>
      <br />
      <p>
        <span id="current-date"> Last Updated {currentDate}</span>
        <span>
          <span className="temp-description" id="temp-description">
            {tempDes}
          </span>
        </span>
      </p>
      <p>
        <span id="humidity">{humidity}%</span> <span id="wind">{wind}km/h</span>
      </p>
    </div>
  );
}
