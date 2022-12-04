import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast mt-3">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <div className="WeatherForecast-icon">{forecast[0].weather[0].icon}</div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}º</span>
              <span className="WeatherForecast-temperature-min"> | {forecast[0].temp.min}º</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7095abf8ac84e0b68c9e58e564131570";
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
