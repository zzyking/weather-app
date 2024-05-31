import React from 'react';
import './WeatherDetails.css';
import moment from 'moment';

function WeatherDetails({ details }) {
  // You can format additional weather details here
  var curr = moment().format('HH:mm');
  let wind, humidity, uv;
  if(curr > details.sunrise && curr < details.sunset){
    wind = {windDir: details.windDirDay, windScale: details.windScaleDay};
  }
  else wind = {windDir: details.windDirNight, windScale: details.windScaleNight};
    humidity = details.humidity;
    uv = details.uvIndex;
  return (
    <div className="WeatherDetails">
      {/* Example: */}
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind.windDir},{wind.windScale}级 </p>
      <p>UV Index: {uv}</p>
    </div>
  );
}

export default WeatherDetails;