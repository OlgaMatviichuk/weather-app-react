import React, { useState } from "react";
import axios from "axios";

export default function CurrentWeather() {
    return (
      <div className="today">
        <div className="row">
          <div className="col-4 text-center" id="current-city">
            <h2 id="city">
              <strong>Paris</strong>
            </h2>
            <div className="last-update">
              <h6 id="date"> Wednesday, October 5</h6>
              <h6 id="time">21:05</h6>
            </div>
          </div>
  
          <div className="col-4 text-center" id="current-temperature">
            <span className="temperature" id="temperature">
              29
            </span>
            <span className="units"> ºC | ºF </span>
          </div>
          <div className="col-4" id="current-conditions">
            ☁ <span id="description">Partly cloudy</span>
            <br />
            💦Humidity: <span id="humidity">80</span>%<br />
            💨 Wind: <span id="wind-speed">4</span> km/h
          </div>
        </div>
      </div>
    );
  }