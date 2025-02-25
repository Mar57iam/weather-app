import React from 'react'
import style from './Footer.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


export default function Footer() {
  return (
    <>
          <div className=' sm:w-full flex flex-col   lg:flex-row items-center justify-around p-8 bg-[#262936]   gap-4 '>
          <div className="   ">
          <form className="w-[100%] max-w-3xl mb-5 z-10">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            
          </div>
          
          <input
          
            type="email"
          
            id="default-email"
            className="block w-full p-4 ps-10 text-sm text-white   rounded-full bg-[#2e323f] placeholder-gray-400 "
            placeholder="Email ..."
            required
          />
         
          <button
          
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#08a7da]    font-medium rounded-full text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      <p className='text-[#bfc1c8]'>Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
     </div>
     <div className='flex gap-4'>
      <div className='rounded-full flex items-center justify-center text-white bg-[#323544] w-10 h-10  hover:bg-[#08a7da] transition'>
      <FaFacebookF />
      </div>
      <div className='rounded-full flex items-center justify-center text-white bg-[#323544] w-10 h-10  hover:bg-[#08a7da] transition'>
      <FaTwitter />
      </div>

      <div className='rounded-full flex items-center justify-center text-white bg-[#323544] w-10 h-10  hover:bg-[#08a7da] transition'>
      <FaGooglePlusG />
      </div>
      <div className='rounded-full flex items-center justify-center text-white bg-[#323544] w-10 h-10  hover:bg-[#08a7da] transition'>
      
      <FaPinterest />
      </div>
     </div>
          </div>
    </>
  )
}
