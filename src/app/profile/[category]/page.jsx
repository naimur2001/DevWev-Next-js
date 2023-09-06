import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import { items } from './data'
// import {notFound} from 'next/navigation'

const getData=(cat)=>{
  const data=items[cat];

  if (data) {
    return data;
  }
  return console.log("not found")

}

const Category = ({params}) => {
  const data= getData(params.category)
  return (
    <div className='categoryContainer'>
      <h1 className='text-3xl text-green-500 font-bold'>{params.category}</h1>
      {
       data.map((item , index)=>(
        <div key={item.id} className={`items flex gap-12 mt-12 mb-24 ${
          index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
        <div className='content flex-1 flex flex-col justify-center gap-5 '>
          <h1 className='heading text-4xl font-semibold '>
            {item.title}
          </h1>
          <p className='desc text-xl'>
           {item.desc}
          </p>
          <Button text={"See More"} url={"#"}></Button>
        </div>
        <div className='imagecontainer flex-1 h-[400px] relative'>
<Image src={item.image} fill={true} alt='prochildrenimage' className='object-cover rounded-es-xl rounded-tr-xl' />
        </div>
      </div>
       ))
      }
   
    </div>
  )
}

export default Category
//       <div className='items flex gap-12 mt-12 mb-24 flex-row-reverse'>
//         <div className='content flex-1 flex flex-col justify-center gap-5 '>
//           <h1 className='heading text-4xl font-semibold '>
//             Minimal Single Project
//           </h1>
//           <p className='desc text-xl'>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi harum amet perspiciatis inventore esse. Dicta molestiae dolores pariatur quos, minima veniam esse adipisci! Aliquam dolore eos rem? Hic, recusandae quisquam.
//           </p>
//           <Button text={"See More"} url={"#"}></Button>
//         </div>
//         <div className='imagecontainer flex-1 h-[400px] relative'>
// <Image src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600' fill={true} alt='prochildrenimage' className='object-cover rounded-es-xl rounded-tr-xl' />
//         </div>
//       </div>

//       <div className='items flex gap-12 mt-12 mb-24'>
//         <div className='content flex-1 flex flex-col justify-center gap-5 '>
//           <h1 className='heading text-4xl font-semibold '>
//             Creative Profile
//           </h1>
//           <p className='desc text-xl'>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi harum amet perspiciatis inventore esse. Dicta molestiae dolores pariatur quos, minima veniam esse adipisci! Aliquam dolore eos rem? Hic, recusandae quisquam.
//           </p>
//           <Button text={"See More"} url={"#"}></Button>
//         </div>
//         <div className='imagecontainer flex-1 h-[400px] relative'>
// <Image src='https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600' fill={true} alt='prochildrenimage' className='object-cover rounded-es-xl rounded-tr-xl' />
//         </div>
//       </div>