import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://devapi.qweather.com/v7/weather/3d?location=101010100&key=66d466bc11dc49c795c313f90b3b1feb'); // Replace with your weather API endpoint
        console.log(response.data); // Add this line
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
      </header>
      <main>
        {weatherData && <WeatherCard data={weatherData} />}
      </main>
    </div>
  );
}

export default App;