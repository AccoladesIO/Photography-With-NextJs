import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
            <Image width='677' layout='responsive' height='451' alt='/' src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'/>
        </div>
        <div className='w-full h-[100%] flex justify-center items-center'>
        <Image width='215' layout='responsive' 
        objectFit='cover'
        height='217' alt='/' src='https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
        </div>
        <div className='w-full h-full flex justify-center items-center'>
        <Image width={215} layout='responsive' 
        objectFit='cover'
        height={217} alt='/' src='https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='w-[100%] h-[100%]'/>
        </div>
        <div className='w-full h-full flex justify-center items-center'>
        <Image width='215' layout='responsive' 
        objectFit='cover'
        height='217' alt='/' src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
        </div>
        <div className='w-full h-full flex justify-center items-center'>
        <Image width='215' layout='responsive' 
        objectFit='cover'
        height='217' alt='/' src='https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
        </div>
    </div>
    </div>
  )
}

export default Portfolio