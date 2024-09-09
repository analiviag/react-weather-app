import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Search for a city"></input>
          </div>
          <div className="col-3">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          ></img>
          17°C
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: 84%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <p>Weather</p>
          <p>Monday 9:00</p>
          <p>Cloudy</p>
        </div>
      </div>
    </div>
  );
}
