// components/ForecastDisplay.js
import React, { useState, useEffect } from "react";

const ForecastDisplay = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const query = city || "auto:ip";
    const days = 3;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=${days}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setForecastData(data))
      .catch((error) => console.error("Error fetching forecast data:", error));
  }, [city]);

  if (!forecastData) return <div>Loading forecast...</div>;

  return (
    <div className="text-center">
      <div className="flex flex-row flex-wrap justify-center items-stretch gap-4 mt-3 ">
        {forecastData.forecast.forecastday.map((day) => {
          // Convert the date string to a Date object
          const date = new Date(day.date);
          // Format the date as "weekday day"
          const formattedDate = date.toLocaleDateString("en-US", {
            weekday: "short", // "short" for abbreviated days of the week
            day: "numeric", // numeric day of the month
          });

          return (
            <div
              key={day.date}
              className="bg-white shadow-md rounded-lg p-4 flex-shrink-0 h-60 justify-center items-stretch text-white align-middle bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
              style={{ width: "calc(33.333% - 1rem)" }}
            >
              <p className="font-semibold mt-7 text-4xl">{formattedDate}</p>
              <p>Max : {day.day.maxtemp_c}°C</p>
              <p>Min : {day.day.mintemp_c}°C</p>
              <p className="pt-2">{day.day.condition.text}</p>
              <img
                src={day.day.condition.icon}
                alt="Weather Icon"
                className="mx-auto"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastDisplay;
