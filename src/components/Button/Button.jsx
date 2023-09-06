import Link from 'next/link'
import React from 'react'

const Button = ({text,url}) => {
  return (
   
    <Link href={url}>
     <div className='font-medium bg-rose-500 p-3 text-white cursor-pointer border-0 
    rounded-md w-max '  >{text}</div>
    </Link>
  )
}

export default Button