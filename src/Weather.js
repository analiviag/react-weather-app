import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city"
              size={80}
              autoFocus="on"
            ></input>
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
            height={80}
            width={80}
          ></img>
          <span className="temperature">17</span>
          <span className="unit-C">°C |</span>
          <span className="unit-F">°F</span>
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: 84%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <h1>Vancouver</h1>
          <ul>
            <li>Monday 9:00</li>
            <li>Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
