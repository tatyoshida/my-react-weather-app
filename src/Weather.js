import React from "react";
import CurrentWeather from "./CurrentWeather";
import "./Weather.css";

function Weather(props) {
  return (
    <div className="Weather">
      <h1>{props.city}</h1>
      <h3>
        {props.day} {props.hour}:{props.minutes}
      </h3>
      <CurrentWeather
        description="nublado"
        temperature={26}
        humidity={80}
        wind={2}
        pressure={1020}
      />
    </div>
  );
}
export default Weather;