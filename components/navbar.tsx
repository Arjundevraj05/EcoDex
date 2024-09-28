import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-green-900 bg-opacity-80 backdrop-blur-md z-10">
        <div className='flex justify-between items-center px-4 py-3 lg:px-10 lg:py-4'>
            <a href="#" className='flex items-center font-bold text-xl text-white font-poppins'>
                <Image src="/icons/logo.svg" width={40} height={40} alt="logo" />
                <span className='ml-2'>Eco-Dex</span> 
            </a>
            <div>
                <ul className='hidden lg:flex items-center space-x-8 text-white font-poppins font-medium'>
                    <li className='hover:text-yellow-400 transition-colors duration-300'>Home</li>
                    <li className='hover:text-yellow-400 transition-colors duration-300'>Reports</li>
                    <li className='hover:text-yellow-400 transition-colors duration-300'>Map</li>
                    <li className='hover:text-yellow-400 transition-colors duration-300'>About Us</li>
                </ul>
            </div>
            <div className='hidden lg:block'>
                <button className='text-lg px-4 py-2  text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105'>
                    Sign Up
                </button>
            </div>
            {/* Mobile Menu */}
            <div className='lg:hidden'>
                <button className='text-white text-2xl'>
                    &#9776;
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
