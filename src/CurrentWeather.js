import React from "react";
import "./CurrentWeather.css";

function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="Description">
        <div className="Icon">
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png" alt="clouds" />
        </div>
        <span>{props.description}</span>
      </div>
      <div className="Temperature">
        <span className="TemperatureValue">{props.temperature}</span>
        <span className="Unit">°C |</span>
        <span className="Unit">°F</span>
      </div>
      <div className="WeatherDetails">
        <div className="Humidity">
          <span className="material-symbols-outlined">humidity_low</span>
          <span>{props.humidity}%</span>
        </div>
        <div className="Wind">
          <span className="material-symbols-outlined">air</span>
          <span>{props.wind} Km/h</span>
        </div>
        <div className="Pressure">
          <span className="material-symbols-outlined">collapse_all</span>
          <span>{props.pressure} mb</span>
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;