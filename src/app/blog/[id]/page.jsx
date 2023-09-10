import Image from 'next/image'
// import { notFound } from "next/navigation";
import useSWR from 'swr';
// import {notFound} from 'next/navigation'
//server code 
// async function getData(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`,
//   {cache: 'no-store'}
//   )
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     return notFound()
//   }
 
//   return res.json()
// }
// or Dynamic metadata
// export async function generateMetadata({ params }) {
//  const post= await getData(params.id)
//   return {
//     title: post.username,
//     description:post.title
//   }
// }

const BlogId =  ({params}) => {
// const data=await getData(params.id);

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/posts/${params.id}`, fetcher)
  // const data= await getData();
// const [data,setData]=useState([])
// const [err,setErr]=useState(false)
// const [loading,setLoading]=useState(false)

// useEffect(()=>{
//   const getData= async (id)=>{
//     setLoading(true)
//     const res = await fetch(`https://dev-wev-next-js.vercel.app/api/posts/${id}`,
// {cache: 'no-store'}
// )

// if (!res.ok) {
//   // This will activate the closest `error.js` Error Boundary
//   throw new Error('Failed to fetch data')
// }
// const data= await res.json()
// setData(data)
// setLoading(false)
//   };
//   getData(params)
// },[params])
console.log(data)
  return (
    <div className='container'>
    <div className='flex'>
      <div className="flex flex-1 flex-col justify-between">
        <h1 className="text-4xl">{data.title}</h1>
        <p className='text-base font-light'>
       
          {data.desc}
        </p>
        <div className='flex items-center gap-10'>
    
          <span className='text-rose-500'>BY {data.username}</span>
        </div>
      </div>
      <div className='flex-1 h-[300px] relative'>
        <Image
          src={data.image}
          alt=""
          fill={true}
          className='object-cover'
        />
      </div>
    </div>
    <div className='mt-10 text-lg font-light text-gray-500 text-justify'>
      <p className=''>
      {data.content}
      </p>
    </div>
  </div>
  )
}

export default BlogId