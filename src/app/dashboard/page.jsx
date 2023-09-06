"use client"
import React, { useContext, useEffect, useState } from 'react'
import style from "./page.module.css"
import  useSWR, { mutate }  from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'


// async function getData(name) {
//   const res = await fetch(`http://localhost:3000/api/posts?username=${name}`, { cache: "no-store" })
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

const Dashboard =   () => {
  
const {mode}= useContext(ThemeContext)
const session =useSession()
const router=useRouter();


  const [data,setData]=useState([])
  const [err,setErr]=useState(false)
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    const getData= async (name)=>{
      setLoading(true)
      const res = await fetch(`http://localhost:3000/api/posts?username=${name}`,
  {cache: 'no-store'}
  )
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 const data= await res.json()
 setData(data)
 setLoading(false)
    };
    getData(session?.data?.user?.name)
  },[session?.data?.user?.name])

console.log(data)
// const fetcher = (...args) => fetch(...args).then(res => res.json())
// const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user?.name}`, fetcher)




if (session.status==="loading") {
  return   <div className='flex justify-center items-center '><div className="  animate-spin rounded-full h-32 w-32 border-t-4 border-rose-500"></div></div> 
}
if (session.status==="unauthenticated") {
router?.push("/dashboard/login")
}
// mian code

const handleSubmit= async (event)=>{
  event.preventDefault();
  const form=event.target;
  const title=form.title.value;
  const desc=form.desc.value;
  const image=form.image.value;
  const content=form.content.value;
  const username=session?.data?.user.name
  const postInfo={title,desc,image,content,username}
console.log(postInfo)
  try {
  const res= await fetch('/api/posts',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(postInfo)
    })
   mutate()
   form.reset();
  } catch (error) {
    console.log(error)
  }

}

const handleDelete=async (id)=>{
try {
  const res= await fetch(`/api/posts/${id}`,{
    method:"DELETE"
  })
  mutate()
} catch (error) {
  console.log(error)
}
}

if (session.status==="authenticated") {
  return (
    <div  className={style.container}>
  <div className='grid grid-cols-2 gap-5'>
  {
   data?.map(post=><div key={post._id}>
      <div  className='flex h-[200px] gap-2'>
      <div className="flex flex-1 flex-col justify-between">
        <h1 className="text-xl">{post.title}</h1>
        {/* <p className='text-base font-light'>
       
          {post.desc}
        </p>
      */}
      </div>
      <div className='flex-1 h-28 w-14 relative'>
        <Image
          src={post.image}
          alt=""
          fill={true}
          className='object-fit'
        />
      </div>
    </div>
    <div className='flex items-center justify-between gap-10'>
 
 <h1 className='text-rose-500'>By  {post.username}</h1> <button className='bg-rose-500 text-white p-1 text-sm font-medium rounded-lg' onClick={()=>handleDelete(post._id)}>Remove Post</button>
</div>

    </div>)
  }
 
  </div>
    <h1 className='text-center text-2xl text-gray-200 font-medium my-4'>Add new Post</h1>
<form action="" onSubmit={handleSubmit}className='grid grid-cols-2 gap-5 mt-5' >

<input type="text" placeholder='Title' name='title' required className={`p-2 font-medium 
    h-14 outline-none rounded-xl ${mode==='light' ? 'bg-black text-white' : 'bg-white text-black'}`} />
    <input type="text" placeholder='Description' name='desc' required className={`p-2 font-medium 
    h-14 outline-none rounded-xl ${mode==='light' ? 'bg-black text-white' : 'bg-white text-black'}`} />
    <input type="text" placeholder='Image-Url' name='image' required className={`p-2 font-medium 
    h-14 outline-none rounded-xl ${mode==='light' ? 'bg-black text-white' : 'bg-white text-black'}`} />
    <textarea name="content" placeholder='Content' required cols="30" rows="10" className={`p-3 t border-2 h-40 outline-none  border-gray-200 text-xl font-medium rounded-xl ${mode==='light' ? 'bg-black text-white' : 'bg-white text-black'}`}></textarea>

<input type="submit" value={"Save"} className='btn w-28 cursor-pointer rounded-xl bg-rose-600 text-white font-semibold p-2'/>
  
   </form>


    </div>
  )
}
}

export default Dashboard