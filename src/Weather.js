import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="searchForm">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control search-input"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="btn btn-primary w-100"
                  value="Search"
                />
              </div>
            </div>
          </form>
        </div>
        <h1>{weatherData.city}</h1>
        <ul>
          <li> Wednesday, October 5</li>
          <li>21:05</li>
        </ul>
        <div className="row">
          <div className="col-5 text-center" id="current-temperature">
            <span className="temperature" id="temperature">
              {weatherData.temperature}
            </span>
            <span className="units"> ºC | ºF </span>
          </div>
          <div className="col-6" id="current-conditions">
            ☁ <span id="description">{weatherData.description}</span>
            <br />
            💦Humidity: <span id="humidity">{weatherData.humidity}%</span>%
            <br />
            💨 Wind: <span id="wind-speed">{weatherData.wind}km/h</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7095abf8ac84e0b68c9e58e564131570";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}