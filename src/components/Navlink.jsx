"use cilent"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navlink = ({link}) => {
    const pathName = usePathname()
  return (
    <Link className={`rounded p-1 ${pathName == link.url && ' text-green-400 underline underline-offset-4'}`} href={link.url} key={link.title}>{link.title}</Link>
  )
}

export default Navlink