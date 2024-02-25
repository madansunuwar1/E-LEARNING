import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex justify-evenly px-12 py-14'>
        <div className='flex items-center font-Oswald font-bold text-6xl text-green-200'>
            LOGO
        </div>
        <div className='flex flex-col'>
            <h1 className='mb-4 text-green-400 underline font-Oswald font-semibold text-md'>Links</h1>
            <div className='flex flex-col text-sm text-green-200'>
           <Link href={'/'}>Home</Link>
           <Link href={'/'}>About</Link> 
           <Link href={'/'}>Contact</Link> 
           </div>
        </div>
        <div className='flex flex-col'>
            <h1 className='mb-4 text-green-400 underline font-Oswald font-semibold text-md'>Our Services</h1>
            <div className='flex flex-col text-sm text-green-200 font-extralight'>
           <Link href={'/'}>Classes</Link>
           <Link href={'/'}>Consultation</Link> 
           <Link href={'/'}>Help</Link>
           </div>
        </div>
    </div>
    <div className='text-center py-4'>
        copyright &copy; Nikesh
    </div>
    </>
  )
}

export default Footer