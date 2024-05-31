import React from 'react';
import WeatherDetails from './WeatherDetails';
import './WeatherCard.css';
import moment from 'moment';

function WeatherCard({ data }) {
  let date, temp, description;
  var curr = moment().format('HH:mm');

  if (data) {
    date = moment(data.fxDate).format('dddd, MMMM Do');
    temp = {tempMin: data.tempMin, tempMax: data.tempMax};
    if(curr > data.sunrise && curr < data.sunset){
      description = data.textDay;
    }
    else{
      description = data.textNight;
    }
  } else {
    // Handle the case where the data is not available
    date = 'No date available';
    temp = {tempMin: 'N/A', tempMax: 'N/A'};
    description = 'No description available';
  }

  return (
    <div className="WeatherCard">
      <h2>{date}</h2>
      <h3>{temp.tempMin}°C-{temp.tempMax}°C</h3>
      <p>{description}</p>
      {data && <WeatherDetails details={data} />}
    </div>
  );
}

export default WeatherCard;