import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('xxxxxx'); // Replace with your weather API endpoint
        console.log(response.data);
        setWeatherData(response.data.daily[0]);
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