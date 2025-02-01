import React from 'react'
import {InstagramIcon,LinkedinIcon,GithubIcon,TwitterIcon} from 'lucide-react'
import G3 from '../../assets/person.png'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
const SCord = () => {
  return (
    <>
      <motion.div variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false,amount:0.7}} className='flex flex-col justify-center items-center gap-5 sm:flex-row flex-wrap py-8 px-4'>
          <div className='flex flex-row justify-center items-center px-3 py-3 gap-1 rounded-[10px] w-[320px] sm:w-[480px] h-[150px] sm:h-[180px] bg-[#0e0d0d] shadow-sm shadow-white transform hover:scale-105 transition-transform duration-300'>
            <div className='w-full px-1 py-1'>
              <img className='rounded-[50%] border-[3px]-white sm:w-[150px] sm:h-[150px] w-[140px] h-[140px] bg-cover' src={G3} alt='Fest Coordinator'/>
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <h1 className='text-[18px] sm:text-[20px] font-kittu font-semibold text-white'>BSS Sravan</h1>
              <p className='text-[15px] sm:text-[17px] font-kittu font-semibold text-[#4135eb]'>Fest Coordinator</p>
              <div className='flex items-center gap-3'>
                <InstagramIcon size={19} className='text-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-[1px] py-[1px] rounded-[2px]'/>
                <LinkedinIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-600 px-[1px] py-[1px] rounded-[2px]'/>
                <GithubIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-500 px-[1px] py-[1px] rounded-[2px]'/>
                <TwitterIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-400 px-[1px] py-[1px] rounded-[2px]'/>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center px-3 py-3 gap-1 rounded-[10px] w-[320px] sm:w-[480px] h-[150px] sm:h-[180px] bg-[#0e0d0d] shadow-sm shadow-white transform hover:scale-105 transition-transform duration-300'>
            <div className='w-full px-1 py-1'>
              <img className='rounded-[50%] border-[3px]-white sm:w-[150px] sm:h-[150px] w-[140px] h-[140px] bg-cover' src={G3} alt='Fest Coordinator'/>
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <h1 className='text-[18px] sm:text-[20px] font-kittu font-semibold text-white'>GSS Pradeep</h1>
              <p className='text-[15px] sm:text-[17px] font-kittu font-semibold text-[#4135eb]'>Fest Coordinator</p>
              <div className='flex items-center gap-3'>
                <InstagramIcon size={19} className='text-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-[1px] py-[1px] rounded-[2px]'/>
                <LinkedinIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-600 px-[1px] py-[1px] rounded-[2px]'/>
                <GithubIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-500 px-[1px] py-[1px] rounded-[2px]'/>
                <TwitterIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-400 px-[1px] py-[1px] rounded-[2px]'/>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center px-3 py-3 gap-1 rounded-[10px] w-[320px] sm:w-[480px] h-[150px] sm:h-[180px] bg-[#0e0d0d] shadow-sm shadow-white transform hover:scale-105 transition-transform duration-300'>
            <div className='w-full px-1 py-1'>
              <img className='rounded-[50%] border-[3px]-white sm:w-[150px] sm:h-[150px] w-[140px] h-[140px] bg-cover' src={G3} alt='Fest Coordinator'/>
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <h1 className='text-[18px] sm:text-[20px] font-kittu font-semibold text-white'>G.Pravalika</h1>
              <p className='text-[15px] sm:text-[17px] font-kittu font-semibold text-[#4135eb]'>Fest Coordinator</p>
              <div className='flex items-center gap-3'>
                <InstagramIcon size={19} className='text-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-[1px] py-[1px] rounded-[2px]'/>
                <LinkedinIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-600 px-[1px] py-[1px] rounded-[2px]'/>
                <GithubIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-500 px-[1px] py-[1px] rounded-[2px]'/>
                <TwitterIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-400 px-[1px] py-[1px] rounded-[2px]'/>
              </div>
            </div>
          </div><div className='flex flex-row justify-center items-center px-3 py-3 gap-1 rounded-[10px] w-[320px] sm:w-[480px] h-[150px] sm:h-[180px] bg-[#0e0d0d] shadow-sm shadow-white transform hover:scale-105 transition-transform duration-300'>
            <div className='w-full px-1 py-1'>
              <img className='rounded-[50%] border-[3px]-white sm:w-[150px] sm:h-[150px] w-[140px] h-[140px] bg-cover' src={G3} alt='Fest Coordinator'/>
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <h1 className='text-[18px] sm:text-[20px] font-kittu font-semibold text-white'>T.Ganga Bhavani</h1>
              <p className='text-[15px] sm:text-[17px] font-kittu font-semibold text-[#4135eb]'>Fest Coordinator</p>
              <div className='flex items-center gap-3'>
                <InstagramIcon size={19} className='text-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-[1px] py-[1px] rounded-[2px]'/>
                <LinkedinIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-600 px-[1px] py-[1px] rounded-[2px]'/>
                <GithubIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-500 px-[1px] py-[1px] rounded-[2px]'/>
                <TwitterIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-400 px-[1px] py-[1px] rounded-[2px]'/>
              </div>
            </div>
          </div>
        </motion.div>
    </>
  )
}

export default SCord