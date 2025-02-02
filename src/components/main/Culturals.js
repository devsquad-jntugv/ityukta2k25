import React from 'react'
import Cult from '../../assets/cultural.jpg'
import {Calendar,Clock8Icon} from 'lucide-react'
const Culturals = () => {
  return (
    <>
     <div
     className='flex flex-col sm:flex-row justify-center gap-3 w-[95%]  rounded-[10px] shadow-md shadow-white pb-2 transform hover:scale-105 transition-transform duration-300'>
    <div className='flex-1'>
      <img src={Cult} className='w-[100%] h-[100%] object-cover sm:rounded-tl-[12px] sm:rounded-bl-[12px] rounded-tr-[12px] rounded-tl-[12px]' alt="cult"/>
    </div>
    <div className='flex-1 flex flex-col items-start gap-3 px-2 sm:px-1'>
      <h2 className='font-bold font-cult text-[30px] sm:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider'>Cultural Night</h2>
      <p className='text-[16px] sm:text-[18px] text-white font-kittu '>Cultural Night of ITYUKTA 2k25, held on February 24, was a mesmerizing evening that brought together vibrant performances, dazzling lights, and electrifying energy. The event served as a canvas for students to showcase their diverse talents through an array of cultural expressions, including dance, music, drama, and art. Traditional and modern themes harmoniously intertwined as the performers captivated the audience with their creativity and passion. </p>
      <span className='text-[16px] sm:text-[18px] text-white font-kittu flex justify-center gap-1'>
        <Calendar size={20} className="text-blue-600"/>
        <p>Date : Feb 24</p>
      </span>
      <span className='text-[16px] sm:text-[18px] text-white font-kittu flex justify-center  gap-1'>
        <Clock8Icon size={20} className='text-blue-600'/>
        <p>Time : 6pm</p>
      </span>
    </div>
  </div>
  <div
  className='flex flex-col sm:flex-row justify-center gap-3 w-[95%]  rounded-[10px] shadow-md shadow-white pb-2 transform hover:scale-105 transition-transform duration-300'>
    <div className='flex-1'>
      <img src={Cult} className='w-[100%] h-[100%] object-cover sm:rounded-tl-[12px] sm:rounded-bl-[12px] rounded-tr-[12px] rounded-tl-[12px]' alt="cult"/>
    </div>
    <div className='flex-1 flex flex-col items-start gap-3 px-2 sm:px-1'>
      <h2 className='font-bold font-cult text-[30px] sm:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider'>FlashMob</h2>
      <p className='text-[16px] sm:text-[18px] text-white font-kittu '>The FlashMob at ITYUKTA 2k25, held on February 25, was a high-energy performance that electrified the atmosphere with its spontaneous yet synchronized dance moves. As the beats dropped, dancers emerged from the crowd, transforming an ordinary moment into an extraordinary spectacle.</p>
      <span className='text-[16px] sm:text-[18px] text-white font-kittu flex justify-center gap-1'>
        <Calendar size={20} className="text-blue-600"/>
        <p>Date : Feb 25</p>
      </span>
      <span className='text-[16px] sm:text-[18px] text-white font-kittu flex justify-center  gap-1'>
        <Clock8Icon size={20} className='text-blue-600'/>
        <p>Time : 3pm</p>
      </span>
    </div>
  </div>
    </>
  )
}

export default Culturals