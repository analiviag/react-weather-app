import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function fahrenheitConversion() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit-C">°C |</span>
        <span className="unit-F">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">
          {Math.round(fahrenheitConversion())}
        </span>
        <span className="unit-C">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          {""}|
        </span>
        <span className="unit-F"> °F</span>
      </span>
    );
  }
}
