import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            className="WeatherForecast-icon"
            src={props.data.iconUrl}
            width={60}
            alt="Forecast for today"
          ></img>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-max">20°</span>
            <span className="WeatherForecast-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
