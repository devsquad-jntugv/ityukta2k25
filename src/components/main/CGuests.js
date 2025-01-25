import React from 'react'
import Chief from '../Chief.js'
const CGuests = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-4'>
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">CHIEF GUESTS</h1>
    <p className='text-[16px] sm:text-[18px] font-serif text-white text-center'>Meet our distinguished chief guests who are shaping the future of technology</p>
    </div>
    <Chief/>
    </>
  )
}

export default CGuests