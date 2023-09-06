"use client"
import { ThemeContext } from '@/context/ThemeContext'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import style from './page.module.css'
import React, { useContext, useState } from 'react'

const Login = () => {
  const [err,setErr]=useState(false)
  const {mode}=useContext(ThemeContext)
  const router=useRouter()
  const session= useSession();
  
  if (session.status==="loading") {
    return    <div className='flex justify-center items-center '><div className="  animate-spin rounded-full h-32 w-32 border-t-4 border-rose-500"></div></div> 
  }
  if (session.status==="authenticated") {
  router?.push("/dashboard")
  }
  const handleLogin= async (event)=>{
 
    
event.preventDefault();
const form=event.target

const email=form.email.value;
const password=form.password.value;
const loggerInfo={ email,password}

signIn("credentials" ,{email,password})
console.log(loggerInfo)

  }
  return (
    <div className='flex items-center justify-center flex-col gap-6'>
      <form action="" className='w-[350px] flex flex-col gap-5 ' onSubmit={handleLogin}>
      
        <input type="email" placeholder='Email' name='email' required className={`p-4 bg-transparent border-2 border-gray-200 text-lg font-semibold rounded-se-md rounded-bl-md ${style.in2}`} />
        <input type="password" placeholder='Password' name='password' required className={`p-4 bg-transparent border-2 border-gray-200 text-lg font-semibold rounded-se-md rounded-bl-md ${style.in3}`} />
        <input type="submit" value={"Login"} className='btn bg-purple-600 text-purple-100 font-medium p-[12px] rounded-ss-md cursor-pointer rounded-br-md' />
      </form>
      <span className='text-red-600'>{err && "Something Went Wrong..."}</span>
      <Link href={'/dashboard/register'} className={`${mode === 'dark' ? 'text-white' : 'text-gray-500' } font-medium underline`}>If New Create Acoount</Link> <br />
      <button  onClick={()=>signIn("google")}  className='bg-rose-400 text-slate-100 p-2 rounded-3xl'>Login with Google</button>
    </div>
  )
}

export default Login