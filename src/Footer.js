import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="suliat-footer container mt-3 p-1 rounded text-center fs-6">
      <small>
        This project was coded by
        <a
          href="https://suliat-portfolio.vercel.app/"
          target="_blank"
          className="footer-link"
          rel="noreferrer"
        >
          Suliat
        </a>
        and is
        <a
          href="https://github.com/lope1999/suliat-react-weather-app"
          target="_blank"
          className="footer-link"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>
        and
        <a
          href="https://suliat-react-weather.netlify.app/"
          className="footer-link"
        >
          hosted on Netlify
        </a>
      </small>
    </footer>
  );
}
