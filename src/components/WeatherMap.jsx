// components/WeatherMap.js
import React from 'react';

const WeatherMap = ({ city }) => {
  // Construct the URL for the iframe src attribute dynamically based on the city
  const mapUrl = `https://map.worldweatheronline.com/?q=${city}`;

  if (!city) {
    return <div>Please search for a city to display its weather map.</div>;
  }

  return (
    <iframe
      src={mapUrl}
      title="Weather Map"
      width="100%"
      height="600px"
      className="rounded-lg p-5 bg-gray-800"
    ></iframe>
  );
};

export default WeatherMap;
