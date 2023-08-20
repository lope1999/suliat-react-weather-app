import React from "react";
import FormatedDate from "./FormatedDate";
import "./CityDetails.css";

export default function CityDetails({ data }) {
  let { humidity, date, description, wind, city } = data;

  return (
    <div className="City-details row shadow-lg bg-body-tertiary rounded">
      <h2 className="city-text">{city}</h2>
      <br />
      <p>
        <FormatedDate date={date} />
        <span>
          <span className="temp-description">{description}</span>
        </span>
      </p>
      <p>
        <span>Humidity: {humidity}%</span> <span>Wind: {wind}km/h</span>
      </p>
    </div>
  );
}
