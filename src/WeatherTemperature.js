import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="temperature" id="temperature">
        {props.celcius}
      </span>
      <span className="units"> ºC | ºF </span>
    </span>
  );
}
