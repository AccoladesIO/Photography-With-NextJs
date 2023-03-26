import React from 'react'

const Hero = (props: any) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center  bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'></div>
      <div className='p-5 text-white z-[2]'>
        <h2 className='text-5xl font-bold'>{props.heading}</h2>
        <p className='py-5 text-xl'>{props.message}</p>
        <button className='px-8 py-2 border hover:bg-white hover:text-black ease-in-out duration-300 hover:font-bold'>Book</button>
      </div>
    </div>
  )
}

export default Hero