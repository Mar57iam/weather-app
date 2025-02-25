import React, { useEffect, useState } from 'react';
import style from './Card1.module.css';
import icon1 from '../../assets/icon-wind@2x.png';
import icon2 from '../../assets/icon-compass@2x.png';
import icon3 from '../../assets/icon-umberella@2x.png';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Card1({ cityName }) {
  const [todayName, setTodayName] = useState('');
  const [Month, setMonth] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    let date = new Date();
    setTodayName(date.toLocaleString('en-US', { weekday: 'long' }));
    setMonth(date.toLocaleString('en-US', { month: 'long' }));
    setDay(date.getDate());
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
    <div className="w-full mt-4 md:w-[45%] lg:w-[30%] max-w-[350px] min-h-[400px] bg-[#323544] rounded-lg shadow-sm">
      <div className="flex justify-between bg-[#2d303d] p-2">
        <p className="text-white">{todayName}</p>
        <p className="text-white">{day} {Month}</p>
      </div>
      <div className="p-4 bg-[#323544] md:p-8">
        <p className="text-white">{data?.data.location.name}</p>
        <h1 className="text-white text-3xl font-bold"> {data?.data.current.temp_c}°C</h1>
        <img  src={data?.data.current.condition.icon} alt="Weather Icon" className=" w-20 " />
        <span className="text-sky-600 block ms-7 ">{data?.data.current.condition.text}</span>
        <div className="flex flex-wrap justify-between w-full gap-3 pt-8 ">
          <div className="flex items-center gap-2">
            <img src={icon3} alt="" className="w-6 h-6" />
            <span className="text-white">{data?.data.current.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={icon1} alt="" className="w-6 h-6" />
            <span className="text-white">{data?.data.current.gust_kph}km/h</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={icon2} alt="" className="w-6 h-6" />
            <span className="text-white">{data?.data.current.wind_dir}</span>
          </div>
        </div>
      </div>
    </div>
  );
}