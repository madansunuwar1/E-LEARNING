import Link from 'next/link'
import React from 'react'
import{
  ImFacebook,
  ImInstagram,ImYoutube
} from 'react-icons/im'

const Footer = () => {
  return (
    <>
      <div className='flex justify-evenly py-10 '>
        <div className='flex items-center font-Oswald font-bold text-6xl text-green-200'>
          LOGO
        </div>
        <div className='flex flex-col'>
          <h1 className='mb-4 text-green-400 underline font-Oswald font-semibold text-md'>Links</h1>
          <div className='flex flex-col text-sm text-green-200 font-extralight'>
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
      <div className='flex pb-4 justify-evenly'>
        <div className='text-center text-green-600'>
        copyright &copy; Nikesh
        </div>
        <div className='text-green-600'>
          <ul className='flex gap-x-4'>
            <li>
              <a herf="http://www.facebook.com" target='_blank'><ImFacebook /></a>
            </li>
            <li>
              <a herf="http://www.instagram.com" target='_blank'><ImInstagram /></a>
            </li>
            <li>
              <a herf="http://www.youtube.com" target='_blank'><ImYoutube /></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer