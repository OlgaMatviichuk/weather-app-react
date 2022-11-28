import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span>
        <span className="temperature" id="temperature">
          {props.celcius}
        </span>
        <span className="units">
          {" "}
          ºC |{" "}
          <a href="/" onClick={convertToFarenheit}>
            ºF{" "}
          </a>
        </span>
      </span>
    );
  } else {
    let farenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature" id="temperature">
          {Math.round(farenheit)}
        </span>
        <span className="units">
          <a href="/" onClick={convertToCelcius}>
            ºC{" "}
          </a>{" "}
          | ºF
        </span>
      </span>
    );
  }
}
