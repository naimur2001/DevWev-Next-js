import React from 'react'
import style from "./page.module.css"
import Image from 'next/image'
import cont from "public/cont.png"
import Button from '@/components/Button/Button'
export const metadata = {
  title: 'Dev Web | Contact',
  description: 'The Tech Agency',
}
const Contact = () => {

  return (
    <div className={style.container}>
      <h1 className='title text-5xl font-semibold text-center mb-6'>Let&apos;s keep in touch</h1>
      <div className="content flex items-center gap-[100px]">
        <div className="imageContainer flex-1 h-[400px] relative ">
          <Image src={cont}  fill={true} alt='contactimage'
           className={`${style.image} object-contain`} />
        </div>
        <form className=' flex-1 flex flex-col gap-5'>
          <input type="text" placeholder='Name' name='name' className='p-3 bg-transparent border-2 outline-none text-slate-300 border-gray-200 text-xl font-medium' />
          <input type="text" placeholder='Email' name='email' className='p-5 bg-transparent border-2 outline-none text-slate-300 border-gray-200 text-xl font-medium'/>
          <textarea   cols="30" rows="5" placeholder='Message' className='p-5 bg-transparent border-2 outline-none text-slate-300 border-gray-200 text-xl font-medium' ></textarea>
          <Button url={'#'} text={"Send"}></Button>
        </form>
      </div>
    </div>
  )
}

export default Contact