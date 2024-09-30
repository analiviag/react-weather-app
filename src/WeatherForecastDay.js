import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastData.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.forecastData.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        className="WeatherForecast-icon"
        src={props.forecastData.condition.icon_url}
        width={60}
        alt="Forecast for today"
      ></img>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-max">{maxTemperature()}°</span>
        <span className="WeatherForecast-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
