import React from 'react';
import WeatherDetails from './WeatherDetails';
import moment from 'moment';
import './WeatherCard.css';

function WeatherCard({ data }) {
  // Extract relevant data and format it
  const date = moment(data.date).format('dddd, MMMM Do');
  const temp = data.temperature;
  const description = data.weather[0].description;

  return (
    <div className="WeatherCard">
      <h2>{date}</h2>
      <h3>{temp}°C</h3>
      <p>{description}</p>
      <WeatherDetails details={data.details} />
    </div>
  );
}

export default WeatherCard;