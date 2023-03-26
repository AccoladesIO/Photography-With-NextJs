import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='font-bold text-center text-2xl p-4'>Let's work together</h1>
        <form className='max-w-[600px] mx-auto '>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' />
                <input className='border shadow-lg p-3' type="email" placeholder='Email'  />
            </div>
            <input  className='border shadow-lg p-3 w-full my-4' type="text" placeholder='Subject' />
            <textarea  className='border shadow-lg p-3 w-full ' cols="30" rows="10" placeholder='message'></textarea>
            <button  className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact