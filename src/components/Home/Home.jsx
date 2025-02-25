import React, { useState } from 'react';
import banner from '../../assets/banner.png';
import logo from '../../assets/logo@2x.png';
import Card1 from '../Card1/Card1';
import Card2 from '../Card2/Card2';
import Card3 from '../Card3/Card3';
import SearchInput from '../SearchInput/SearchInput';
import Footer from '../Footer/Footer';

export default function Home() {
  const [cityName, setCityName] = useState('cairo');

  return (
    <>
      <nav className="fixed top-0 z-50 left-0 right-0 flex items-center p-4 bg-[#1e202b] gap-4">
        <img className="w-16 md:w-20" src={logo} alt="Logo" />
        <h1 className="text-white text-xl md:text-2xl">Weather</h1>
      </nav>
      <section className="min-h-screen flex flex-col bg-[#1e202b]">
        <div className="relative w-full h-[350px] md:h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
          <div className="absolute top-40 w-full px-4 flex justify-center">
            <SearchInput setCityName={setCityName} />
          </div>
        </div>
        <div className="relative flex flex-wrap justify-center items-center -mt-20 md:-mt-36 lg:mb-24 z-10">
          <Card1 cityName={cityName} />
          <Card2 cityName={cityName} />
          <Card3 cityName={cityName} />
        </div>
        <Footer />
      </section>
    </>
  );
}