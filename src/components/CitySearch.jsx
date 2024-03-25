import React, { useState } from "react";

const CitySearch = ({ setCity, setCoordinates }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue.trim());
    // Reset coordinates to null so the app knows to fetch weather by city name
    setCoordinates({ lat: null, lng: null });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center my-4"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city name"
        className="input input-bordered input-primary max-w-xs relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
      />
      <button type="submit" className="btn btn-primary ml-2">
        Search
      </button>
    </form>
  );
};

export default CitySearch;
