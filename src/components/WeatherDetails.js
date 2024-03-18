import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ details }) {
  // You can format additional weather details here
  return (
    <div className="WeatherDetails">
      {/* Example: */}
      <p>Humidity: {details.humidity}%</p>
      <p>Wind: {details.wind} km/h</p>
    </div>
  );
}

export default WeatherDetails;