import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherSearch">
      <div className="row">
        <div className="col-4 text-start">
          <h1>{props.data.city}</h1>

          <h6>
            <CurrentDate date={props.data.date} />
          </h6>
        </div>
        
        <div className="col-4 text-center clearfix  " id="current-temperature">
          <img 
          src={props.data.iconUrl} 
          alt={props.data.description}/>
          <span className="temperature" id="temperature">
            {props.data.temperature}
          </span>
          <span className="units"> ºC | ºF </span>
          
        </div>

        <div className="col-4 text-start" id="current-conditions">
          ☁{" "}
          <span className="text-capitalize" id="description">
            {props.data.description}
          </span>
          <br />
          💦Humidity: <span id="humidity">{props.data.humidity}</span>%
          <br />
          💨 Wind: <span id="wind-speed">{props.data.wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
