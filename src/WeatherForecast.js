import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    return console.log(response.data);
  }

  const apiKey = "bba264o26c1cdt003d73631d7a2a1f27";
  let city = props.data.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
