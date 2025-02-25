import React, { useEffect, useState } from 'react';
import style from './Card2.module.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Card2({ cityName }) {
  const [tomorrowDay, setTomorrowName] = useState('');

  useEffect(() => {
    let date = new Date();
    let tomorrow = new Date(date);
    tomorrow.setDate(date.getDate() + 1);
    setTomorrowName(tomorrow.toLocaleString('en-US', { weekday: 'long' }));
  }, []);

  function weather(cityName) {
    return axios.get(`http://api.weatherapi.com/v1/forecast.json?key=1d7bd3c4fdf449cca47220709241012&q=${cityName}&days=3`);
  }

  let { data, isError, error, isFetching } = useQuery({
    queryKey: ['weatherdata', cityName],
    queryFn: () => weather(cityName),
  });

  if (isFetching) return <p className="text-white">Loading...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="w-full mt-4 md:w-[45%] lg:w-[30%] max-w-[350px] min-h-[400px] bg-[#262936] text-center rounded-lg shadow-sm">
      <div className="bg-[#222530] p-2">
        <p className="text-white">{tomorrowDay}</p>
      </div>
      <div className="p-4 bg-[#262936] md:p-8">
        <div className="flex justify-center">
          <img src={data?.data?.forecast?.forecastday[1]?.day?.condition?.icon} alt="Weather Icon" />
        </div>
        <p className="text-white text-3xl font-bold pb-3">{data?.data?.forecast?.forecastday[1]?.day?.maxtemp_c}°</p>
        <p className="text-white text-xl font-medium pb-7">{data?.data?.forecast?.forecastday[1]?.day?.mintemp_c}°</p>
        <span className="text-sky-600 block">{data?.data?.forecast?.forecastday[1]?.day?.condition?.text}</span>
      </div>
    </div>
  );
}
