import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function SearchInput({ setCityName }) {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("Cairo");

  function weather(cityName) {
    return axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=1d7bd3c4fdf449cca47220709241012&q=${cityName}&days=3`
    );
  }

  const { refetch } = useQuery({
    queryKey: ["weatherdata", city],
    queryFn: () => weather(city),
    enabled: true, 
  });

  function handleInput(event) {
    const newValue = event.target.value;
    setValue(newValue);

    if (newValue.trim().length >= 3) {
      setCity(newValue); 
      setCityName(newValue);
      refetch();
    } else if (newValue.trim().length === 0) {
      setCity("Cairo"); 
      setCityName("Cairo");
      refetch();
    }
  }

  return (
    <form className="w-full max-w-3xl mx-auto z-10" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          value={value}
          onInput={handleInput} 
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-white rounded-full bg-[#2e323f] placeholder-gray-400"
          placeholder="Search ..."
        />

<button type="button"  className="text-white absolute end-2.5 bottom-2.5 bg-[#08a7da] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2">
          Search
        </button>
      </div>
    </form>
  );
}
