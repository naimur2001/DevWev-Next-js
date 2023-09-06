import React from 'react'
import style from "./page.module.css"
import Link from 'next/link'
export const metadata = {
  title: 'Dev Web | Profile',
  description: 'The Tech Agency',
}
const Profile = () => {
  return (
    <div  className={style.container}>
      <h1 className='heading'>Choose a gallery</h1>
      <div className='items flex gap-12 '>
        <Link href="/profile/illustrations" className={`border-4 border-gray-300 rounded-sm w-[280px] h-[350px] relative group ${style.item} `} >
          <span className='title absolute right-2 bottom-2 text-4xl font-bold group-hover:text-green-500 transition-colors duration-300 '>Illustrations</span>
        </Link>
        <Link href="/profile/websites"className={`border-4 border-gray-300 rounded-sm w-[280px] h-[350px] relative ${style.item} group `} >
          <span className='title absolute right-2 bottom-2 text-4xl font-bold group-hover:text-green-500 transition-colors duration-300'>Websites</span>
        </Link>
        <Link href="/profile/applications" className={`border-4 border-gray-300 rounded-sm w-[280px] h-[350px] relative ${style.item} group `}>
          <span className='title absolute right-2 bottom-2 text-4xl font-bold group-hover:text-green-500 transition-colors duration-300'>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Profile