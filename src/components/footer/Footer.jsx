"use client"
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    // Add your subscribe logic here
  };
const {mode}=useContext(ThemeContext);
  return (
    <div className='bg-transparent text-white py-4 mt-5'>
      <div className='container mx-auto flex items-center justify-between'>
        <p className={`${mode==="light" ? "text-black" : ""} text-sm text-center`}>
          &copy; 2023 DevWeb. All rights reserved.
        </p>
        <div className='flex items-center gap-4'>
          <a href='#' className='opacity-60 hover:opacity-100 transition-opacity'>
            <Image src="/1.png" width={15} height={15} alt='pb-fb' />
          </a>
          <a href='#' className='opacity-60 hover:opacity-100 transition-opacity'>
            <Image src="/2.png" width={15} height={15} alt='pb-inst' />
          </a>
          <a href='#' className='opacity-60 hover:opacity-100 transition-opacity'>
            <Image src="/3.png" width={15} height={15} alt='pb-tweet' />
          </a>
          <a href='#' className='opacity-60 hover:opacity-100 transition-opacity'>
            <Image src="/4.png" width={15} height={15} alt='pb-yt' />
          </a>
        </div>
      </div>
      <div className='text-center mt-4'>
        {isSubscribed ? (
          <p className='text-gray-500'>Thank you for subscribing!</p>
        ) : (
          <>
            <p className={`${mode==="light" ? "text-black" : ""} text-base text-center`}>Subscribe to our newsletter:</p>
            <div className='flex items-center justify-center mt-2'>
              <input
                type='email'
                placeholder='Your email'
                className={` rounded-2xl px-4 py-2 text-white focus:outline-none ${mode==="dark" ? "bg-white text-black" : "bg-black text-white"}`}
              />
              <button
                onClick={handleSubscribe}
                className='bg-rose-500 hover:bg-blue-700 rounded-2xl text-white  px-4 py-2 mx-2 focus:outline-none'
              >
                Subscribe
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Footer
