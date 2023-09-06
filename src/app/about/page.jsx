import React from 'react'
import style from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
  title: 'Dev Web | About',
  description: 'The Tech Agency',
}
const About = () => {
  return (
    <div className={style.container}>
      <div className="imageContainer w-[100%] h-[300px] relative">
        <Image src="https://media.gettyimages.com/id/1426312120/photo/business-people-planning-marketing-strategy-on-laptop-reading-documents-for-project-in.jpg?s=612x612&w=0&k=20&c=6aq6UCR8MW5_cM6t3B_GikaFQ8saGPd0MjrtLQU17kQ=" fill={true} alt='aboutImage' className='object-fill grayscale' />
      <div className="imageContainer absolute bottom-5 left-5 text-white bg-green-500 p-1">
        <h1 className='text-2xl font-semibold'>Digital Storytellers</h1>
        <h2 className='text-lg font-medium'>Handcrafting award winning digital experiences</h2>
      </div>
      </div>
      <div className="textContainer flex gap-[100px]">
      <div className="item1 flex-1 mt-12 flex flex-col gap-7">
        <h1 className='text-2xl font-semibold'>Who are we?</h1>
        <p className='text-sm font-light text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus atque facere libero ipsa nihil accusamus tempora quam vero mollitia iure. Nemo dicta reprehenderit, a quo vero aliasre prehenderit, a quo vero alias tempora quam vero mollitia iure. Nemo dicta reprehenderit, a quo vero aliasre prehenderit, a quo vero alias?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, tenetur unde. Voluptatum nesciunt quibusdam dolorem?
        </p>
      </div>
      <div className="item2 flex-1 mt-12 flex flex-col gap-7">
        <h1 className='text-2xl font-semibold'>What we do?</h1>
        <p className='text-sm font-light text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus atque facere libero ipsa nihil accusamus tempora quam vero mollitia iure. Nemo dicta reprehenderit, a quo vero aliarep rehenderit, a quo vero alias? tempora quam vero mollitia iure. Nemo dicta reprehenderit, a quo vero aliasre prehenderit, a quo vero aliass?
          <br />
          <br />
         -Dynamic Website - Fast & Handy Mobile App - Digital Services
        </p>
        <Button url={"/contact"} text={"Contact"} ></Button>
      </div>
      </div>

    </div>
  )
}

export default About