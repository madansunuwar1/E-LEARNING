"use client"
import Link from "next/link"
import { useState } from "react"
import Navlink from "./Navlink"

const links = [
  {
    url: "/",
    title: "Home" 
  },
  {
    url: "/about",
    title: "About"
  },
  {
    url: "/contact",
    title: "Contact"
  },
  {
    url: "/exam",
    title: "Test"
  }

]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 font-serif text-xl'>
              <div className="text-white">
          <Link href='/'>
          LOGO
          </Link>
          </div>
      <div className="hidden md:flex gap-12 text-white">
      {links.map(link =>(
              <Navlink link={link}/>
            ))}
      </div>
        <div className="md:hidden z-50">
          <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen((prev) => !prev)}>
            <div className="w-10 h-1 bg-white rounded"></div>
            <div className="w-10 h-1 bg-white rounded"></div>
            <div className="w-10 h-1 bg-white rounded"></div>
          </button>
          {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map(link =>(
              <Navlink link={link}/>
            ))}
          </div>
          
          )}
        </div>
        
    </div>
  )
}

export default Navbar