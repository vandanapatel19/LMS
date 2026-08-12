import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row  items-start gap-10 md:gap-32 justify-center px-8 md:px-0 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo2_dark} alt="Vertex Logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor porro eius reprehenderit sit molestias omnis, laborum sed doloremque ad quos vel vitae amet facilis, deleniti ullam quam consequuntur nesciunt accusantium.</p>
        </div>

        <div className='flex flex-col md:items-start items-center w-full'> 
          <h2 className='font-semibold text-white'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2 mt-2'>
            <li><a href="#" className='text-white/80 hover:text-white'>Home</a></li>
            <li><a href="#" className='text-white/80 hover:text-white'>About Us</a></li>
            <li><a href="#" className='text-white/80 hover:text-white'>Contact</a></li>
            <li><a href="#" className='text-white/80 hover:text-white'>Privacy Policy</a></li>
          </ul>
        </div>

        <div className='hidden md:flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white'>Subscribe to our newsletter</h2>
          <p className='text-sm text-white/80 mt-2' >The latest news, articles, and resources delivered to your inbox.</p>
          <div className='flex items-center gap-2 pt-4'>
            <input type="email" placeholder='Enter your email' className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm' />
            <button className='bg-blue-600 w-24 h-9 text-white rounded'>Subscribe</button>
          </div>
        </div>

      </div>
      <p className='text-center text-xs md:text-sm text-white/60 py-4'>Copyright 2026 © Vertex. All rights reserved.</p>

    </footer>
  )
}

export default Footer
