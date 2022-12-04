import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <div className="wether-temperarure">
            <strong id="temperature">15</strong>
            <span className="units">
              <span href="#" id="celsius" className="active">
                °C
              </span>
              |
              <span href="#" id="fahrenheit">
                °F
              </span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">87</span> %
            </li>
            <li>
              Wind: <span id="wind">3</span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div class="weather-forecast" id="forecast">
        <div class="row">
          <div class="col-2">
            <div class="weather-foecast-date">Mon</div>
            <div class="weather-foecast-temperature">
              <span class="weather-foecast-temperature-max">24°</span>
              <span class="weather-foecast-temperature-min">16°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}