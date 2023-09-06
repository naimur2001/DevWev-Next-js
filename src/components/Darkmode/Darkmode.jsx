"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Darkmode = () => {
const {toggle,mode}=useContext(ThemeContext)
  return (
    <div className='w-[55px]  h-[29px] p-[1px] border-2 border-rose-500 rounded-3xl flex justify-between relative cursor-pointer' onClick={toggle}>
      <div className='text-base'>🌙</div>
      <div className='text-base'>🔆</div>
      <div className={`w-[23px] h-[23px] bg-rose-500 rounded-full
       absolute ${mode === 'dark' ? "left-7" : "right-7" }`}></div>

    </div>
  )
}

export default Darkmode