import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
    
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse (response) {
console.log(response.data);
setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    temperature: response.data.main.humidity,
    city: response.main.name
});

    }

if (weatherData.ready) {
    return (
        <div className="Weather">
            <form>
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control search-input"
                />
                <input
                  type="submit"
                  className="btn btn-primary w-100"
                  value="Search"
                />
          </form>
        <h1>{weatherData.city}</h1>
        <ul>
        <li> Wednesday, October 5</li>
        <li>21:05</li>
        </ul>
        <div className="row"   >
       <div className="col-5 text-center" id="current-temperature">
                <span className="temperature" id="temperature">
                  {weatherData.temperature}
                </span>
                <span className="units"> ºC | ºF </span>
              </div>
              <div className="col-6" id="current-conditions">
                ☁ <span id="description">Partly cloudy</span>
                <br />
                💦Humidity: <span id="humidity">{weatherData.data.humidity}%</span>%<br />
                💨 Wind: <span id="wind-speed">{weatherData.wind}</span> km/h
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
  }}