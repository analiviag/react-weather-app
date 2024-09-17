import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />

        <footer>
          This project was coded by Analivia Costa and is{" "}
          <a
            href="https://github.com/analiviag/react-weather-app"
            target="_blank"
            rel="noreferrer noopener"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
