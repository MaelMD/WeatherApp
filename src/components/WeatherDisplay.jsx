// components/WeatherDisplay.js
import React, { useState, useEffect } from "react";

const WeatherDisplay = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const query = city || "auto:ip";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [city]);

  if (!weatherData) return <div>Loading weather data...</div>;

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white p-4 rounded-lg flex items-center justify-between h-32">
      <div className="flex items-center">
        <img
          className="w-27 h-20 mx-4 "
          src={weatherData.current.condition.icon}
          alt="Weather Icon"
        />
        <div>
          <h1 className="font-medium text-5xl">{weatherData.location.name}</h1>
          <div className="text-xs opacity-70 mx-1">{weatherData.location.country}</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mr-8">
          <div className="text-3xl font-medium">{weatherData.current.temp_c > 0 ? "+" : ""}{weatherData.current.temp_c}°</div>
          <div className="text-xs opacity-70">Temperature</div>
        </div>
        <div className="mr-8">
          <div className="text-3xl font-medium">{weatherData.current.humidity}<span className="text-sm font-medium">%</span></div>
          <div className="text-xs opacity-70">Humidity</div>
        </div>
        <div className="mr-8">
          <div className="text-3xl font-medium">{weatherData.current.wind_kph}<span className="text-sm font-medium">km/h</span></div>
          <div className="text-xs opacity-70">Wind speed</div>
        </div>
      </div>
    </div>
  );
  
  
};

export default WeatherDisplay;
