import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form
        id="search-city"
        className="input-group mb-3 shadow-lg bg-body-tertiary rounded"
      >
        <input
          type="text"
          className="form-control"
          placeholder="Type a name of a city..."
          aria-label="Recipient's username"
          aria-describedby="search"
          id="city-input"
        />
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
