import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import CitySearch from "./components/CitySearch";
import { fetchCityImageUrl } from "./utils/fetchCityImg";
import Overview from "./components/Overview";
import WeatherMap from "./components/WeatherMap";

const App = () => {
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  // const [backgroundImageUrl, setBackgroundImageUrl] = useState("");
  const unsplashApiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  console.log(unsplashApiKey);

  useEffect(() => {
    const defaultImageUrl =
      "https://e1.pxfuel.com/desktop-wallpaper/1012/255/desktop-wallpaper-morocco-rabat-morocco.jpg"; // Replace with your default image URL

    const updateBackgroundImage = async () => {
      if (city && unsplashApiKey) {
        const url = await fetchCityImageUrl(city, unsplashApiKey).catch(
          (error) => {
            console.error("Error fetching image:", error);
            return defaultImageUrl; // Use default image in case of an error
          }
        );
        document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${
          url || defaultImageUrl
        }') no-repeat center center fixed`;
        // document.body.style.backgroundImage = `url('${url || defaultImageUrl}')`;
      } else {
        document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${
          url || defaultImageUrl
        }') no-repeat center center fixed`;
      }

      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    };

    updateBackgroundImage();
  }, [city, unsplashApiKey]);

  return (
    <div className="min-h-screen bg-cover bg-center p-7">
      <CitySearch setCity={setCity} setCoordinates={setCoordinates} />
      <div className="felx flex-col gap-3">
        <div className="flex flex-row gap-3">
          <div className="basis-2/3 flex flex-col">
            <WeatherDisplay city={city} coordinates={coordinates} />
            <div className="basis-1/2 flex-1">
              <ForecastDisplay city={city} coordinates={coordinates} />
            </div>
          </div>
          <div className="basis-1/3">
            <Overview />
          </div>
        </div>
        <div className="rounded-lg p-5">
          <WeatherMap city={city} />
        </div>
      </div>
    </div>
  );
};

export default App;
