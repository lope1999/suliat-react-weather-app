import React from "react";
import "./Header.css";

export default function Header({ handleCurrentBtnClick }) {
  return (
    <header className="Header">
      <span className="suliat-title card border rounded-pill d-none d-md-block">
        <img
          className="suiat-logo"
          src="./images/logo-s2.png"
          alt="Suliat's Logo"
        />
        <h6 className="title">Suliat's Weather App</h6>
      </span>
      <div className="current-button-wrapper">
        <button
          className="current-button btn btn-outline-info"
          onClick={handleCurrentBtnClick}
        >
          current
        </button>
      </div>
    </header>
  );
}
