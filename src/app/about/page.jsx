import Valuecard from '@/components/Valuecard';
import React from 'react'
import { ImForward } from "react-icons/im";

const values = [
  {
    title: "Our teching process",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, aliquam laborum possimus nostrum eveniet esse doloremque ea repellendus accusantium soluta quisquam cumque, ullam voluptatem. Tempora quod eius aperiam quae nisi?",
  },
  {
    title: "Innovation",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, aliquam laborum possimus nostrum eveniet esse doloremque ea repellendus accusantium soluta quisquam cumque, ullam voluptatem. Tempora quod eius aperiam quae nisi?",
  },
  {
    title: "Skills",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, aliquam laborum possimus nostrum eveniet esse doloremque ea repellendus accusantium soluta quisquam cumque, ullam voluptatem. Tempora quod eius aperiam quae nisi?",
  },
  {
    title: "transparency",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, aliquam laborum possimus nostrum eveniet esse doloremque ea repellendus accusantium soluta quisquam cumque, ullam voluptatem. Tempora quod eius aperiam quae nisi?",
  }
]

const page = () => {
  return (
    <>
    <div className='border-b-2 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-0 md:py-12'>
      <h1 className='text-6xl md:text-7xl text-white font-bold py-12 font-Oswald'>We are E-learning platform.<span className='text-green-400'>Straightforward</span> , honest, providing <span className='text-green-400'>best classes</span> for you</h1>
      <div className='flex lg:flex-row-reverse flex-col py-8'>
        <img src='./ok1.jpg' className='w-full lg:h-[400px] rounded-3xl flex-1' />
        <div className='px-12'>
          <ImForward className='hidden lg:flex md:h-[200px] md:w-[100px] text-green-300' />
          <p className='text-green-400 font-extralight font-Oswald text-md text-justify text-2xl my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maxime iure, corporis sed culpa optio esse deleniti hic explicabo nostrum dolorum minima harum autem eum sequi facilis atque, unde voluptates! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor excepturi ut quas laborum harum eos fuga totam, ad consequatur?
          </p>
        </div>
      </div>
    </div>
    <div className='border-b-2 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-4 md:py-24 flex lg:justify-between flex-col  lg:flex-row justify-center items-center'>
      <h1 className='text-6xl md:text-7xl text-white font-bold font-Oswald w-[200px] py-8'>Our <span className='text-green-400'>Values</span></h1>
      <div className='grid lg:grid-cols-2 gap-12'>
        {
          values.map((value) => (<Valuecard value={value}/>))
        }
      </div>
    </div>
    </>
  )
}

export default page