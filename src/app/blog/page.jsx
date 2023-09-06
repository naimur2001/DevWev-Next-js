"use client"
import React from 'react'
import style from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'
import  useSWR  from 'swr'

//server code 
// async function getData() {
//   const res = await fetch('http://localhost:3000/api/posts', { cache: "no-store" })
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }
 const metadata = {
  title: 'Dev Web | Blog',
  description: 'The Tech Agency',
}

const Blog = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/posts`, fetcher)
  // const data= await getData();
  return (
    <div className={`${style.container} `}>

{
  data?.map((item)=>(
    <Link href={`/blog/${item._id}`} key={item.id} className='flex items-center gap-12 mb-12'>
<div className="imagecontainer w-[300px] h-[200px] relative ">
  <Image src={item.image} fill={true} alt='blgimg' className='object-cover'/>
</div>
<div className='content w-[500px]'>
  <h1 className='text-2xl font-semibold mb-2 '> {item.title}</h1>
   <p>{item.desc}</p>
</div>

</Link>
  ))
}

    </div>
  )
}

export default Blog
/*  <Link href={"/blog/BlogId"} key={item.id} className='flex items-center gap-12 mb-12'>
<div className="imagecontainer">
  <Image src='https://images.pexels.com/photos/7989027/pexels-photo-7989027.jpeg?auto=compress&cs=tinysrgb&w=600' width={400} height={200} alt='blgimg' className='object-cover'/>
</div>
<div className='content '>
  <h1 className='text-2xl font-semibold mb-2 '>About UI/UX </h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore quis sit, quaerat suscipit unde?</p>
</div>

</Link> */