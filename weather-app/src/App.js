
import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Code for fetching data will go here
    // API key: f67a0d4b7622e1d844dc76f0f9f7be95
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=f67a0d4b7622e1d844dc76f0f9f7be95`)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  //code for displaying data
  return (
    <div>
      {weatherData ? (
        <div>
          <h1>{`Temperature: ${weatherData.main.temp}`}</h1>
          <p>{`Humidity: ${weatherData.main.humidity}%`}</p>
          <p>{`Highest Temperature: ${weatherData.main.temp_max}`}</p>
          <p>{`Lowest Temperature: ${weatherData.main.temp_min}`}</p>
          <p>{`Wind Speed: ${weatherData.wind.speed} km/h`}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
