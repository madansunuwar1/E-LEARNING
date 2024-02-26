import React from 'react'

const Valuecard = ({value}) => {
  return (
    <div className='border-b-2 border-green-200 w-[400px] px-8'>
        <h1 className='text-lg md:text-3xl text-green-400 font-semibold pb-8 font-Oswald'>{value.title}</h1>
        <p className='pb-12 text-green-200'>{value.description}</p>
    </div>
  )
}

export default Valuecard