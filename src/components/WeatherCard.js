import React from 'react';
import WeatherDetails from './WeatherDetails';
import moment from 'moment';
import './WeatherCard.css';

function WeatherCard({ data }) {
  let date, temp, description;

  if (data && data.weather && data.weather.length > 0) {
    date = moment(data.date).format('dddd, MMMM Do');
    temp = data.temperature;
    description = data.weather[0].description;
  } else {
    // Handle the case where the data is not available
    date = 'No date available';
    temp = 'No temperature available';
    description = 'No description available';
  }

  return (
    <div className="WeatherCard">
      <h2>{date}</h2>
      <h3>{temp}°C</h3>
      <p>{description}</p>
      {data && data.details && <WeatherDetails details={data.details} />}
    </div>
  );
}

export default WeatherCard;