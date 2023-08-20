import React from "react";
import "./Search.css";

export default function Search({ city, handleSubmit, handleCityChange }) {
  return (
    <div className="Search">
      <form
        className="input-group mb-3 shadow-lg bg-body-tertiary rounded"
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          type="text"
          value={city}
          onChange={(event) => handleCityChange(event)}
          className="form-control"
          placeholder="Type a name of a city..."
          aria-label="Recipient's username"
          aria-describedby="search"
        />
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
