import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {

function handleResponse (response) {
    console.log(response.data);
}

  const apiKey = "7095abf8ac84e0b68c9e58e564131570";
  const latitude = props.coordinates.lat;
  const longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast mt-3">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">Icon</div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19º</span>
            <span className="WeatherForecast-temperature-min"> | 10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
