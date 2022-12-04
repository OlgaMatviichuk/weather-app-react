import React from "react";

export default function WeatherForecastDay (props) {
    return (
        <div>
        <div className="WeatherForecast-day">{props.data.dt}</div>
            <div className="WeatherForecast-icon">
              {props.data.weather[0].icon}
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {props.data.temp.max}º
              </span>
              <span className="WeatherForecast-temperature-min">
                {" "}
                | {props.data.temp.min}º
              </span>
            </div>
            </div>
    );
}