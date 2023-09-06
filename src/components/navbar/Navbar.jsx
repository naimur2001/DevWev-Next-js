"use client"
import Link from 'next/link'
import React from 'react'
import Darkmode from '../Darkmode/Darkmode';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Profile", url: "/profile" },
    { id: 3, title: "Blog", url: "/blog" },
    { id: 4, title: "About", url: "/about" },
    { id: 5, title: "Contact", url: "/contact" },
    { id: 6, title: "Dashboard", url: "/dashboard" }
  ];

  const  session = useSession()
  return (
    <div className='h-24 max-w-[1366px] flex justify-between items-center'>
      <Link className='font-bold text-xl' href={"/"}>DevWeb</Link>
      <div className='flex items-center gap-5'>
        <Darkmode></Darkmode>
        {links.map((link=> <Link key={link.id} href={link.url}>{link.title}</Link>))}
     
  {
    session.status==="authenticated" &&       <button className='font-medium bg-rose-500 p-1 text-white cursor-pointer border-0 
    rounded-md ' onClick={signOut}>Logout</button>
  }
      </div>
    </div>
  )
}

export default Navbar