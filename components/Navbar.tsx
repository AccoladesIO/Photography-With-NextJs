import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleChange = () => {
        setNav(!nav)
    }

useEffect (() => {
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor('#fff')
            setTextColor('#000')
        }else{
            setColor('transparent')
            setTextColor('#fff')
        }
    }
    window.addEventListener('scroll', changeColor)
}, [])

  return (
    <div style={{background: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/' >
            <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Captur</h1>
            </Link>
            <ul className='hidden sm:flex' style={{color: `${textColor}`}}>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>Works</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            {/* Mobile button */}
            <div className='block sm:hidden z-10'>
                {
                    nav ? <AiOutlineClose size={20} onClick={handleChange} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20}  onClick={handleChange} style={{color: `${textColor}`}}/>
                }
            </div>
            {/* Mobile Menu */}
            <div className={
                nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 
                'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
         }>
            <ul>
                <li  onClick={handleChange} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Home</Link>
                </li>
                <li  onClick={handleChange} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li onClick={handleChange}  className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/portfolio'>Works</Link>
                </li>
                <li  onClick={handleChange} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar