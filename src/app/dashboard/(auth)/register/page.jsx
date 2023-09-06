"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import style from './page.module.css'
import { ThemeContext } from '@/context/ThemeContext'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
const Register = () => {
  const [err,setErr]=useState(false)
  const {mode}=useContext(ThemeContext)
  const router=useRouter()
  const handleSubmit= async (event)=>{
    event.preventDefault();
    const form=event.target
    const username=form.username.value;
    const email=form.email.value;
    const password=form.password.value;
    const registrarInfo={username, email,password}
console.log(registrarInfo)
try {
  const res= await fetch('/api/auth/register',{
    method: "POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(registrarInfo)
  })

  if (res.status === 201) {
form.reset()
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'You have successfully registered!',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/dashboard');
      }
    });
  } else {
    // Handle other response statuses if needed
    setErr(true);
  }
} catch (error) {
  setErr(true)
}
  }


  return (
    <div className='flex items-center justify-center flex-col gap-6' >
      <form action="" className='w-[350px] flex flex-col gap-5 ' onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' name='username' required className={`p-4  bg-transparent border-2 border-gray-200 text-lg font-semibold rounded-se-md rounded-bl-md ${style.in1}`}  />
        <input type="email" placeholder='Email' name='email' required className={`p-4 bg-transparent border-2 border-gray-200 text-lg font-semibold rounded-se-md rounded-bl-md ${style.in2}`} />
        <input type="password" placeholder='Password' name='password' required className={`p-4 bg-transparent border-2 border-gray-200 text-lg font-semibold rounded-se-md rounded-bl-md ${style.in3}`} />
        <input type="submit" value={"Register"} className='btn bg-rose-600 text-purple-100 font-medium p-[12px] rounded-ss-md cursor-pointer rounded-br-md' />
      </form>
      <span className='text-red-600'>{err && "Something Went Wrong..."}</span>
      <Link href={'/dashboard/login'} className={`${mode === 'dark' ? 'text-white' : 'text-gray-500' } font-medium underline`}>Login with Existing Account</Link> <br />
    </div>
  )
}

export default Register