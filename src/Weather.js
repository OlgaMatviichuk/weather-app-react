import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
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

        <div className="row">
          <div className="col-4 text-start">
        <h1>{weatherData.city}</h1>
        
          <h6> Wednesday, October 5</h6>
          <h6>21:05</h6>
        
        </div>
          <div className="col-4 text-center" id="current-temperature">
            <span className="temperature" id="temperature">
              {weatherData.temperature}
            </span>
            <span className="units"> ºC | ºF </span>
          </div>
          <div className="col-4 text-start" id="current-conditions">
            ☁ <span className="text-capitalize" id="description">{weatherData.description}</span>
            <br />
            💦Humidity: <span id="humidity">{weatherData.humidity}</span>%
            <br />
            💨 Wind: <span id="wind-speed">{weatherData.wind} km/h</span>
          </div>
          </div>
        </div>
      
    );
  } else {
    const apiKey = "7095abf8ac84e0b68c9e58e564131570";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}