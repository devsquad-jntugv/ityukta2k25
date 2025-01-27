import React from 'react'
import BG1 from '../../assets/bg2.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
const Header = () => {
  return (
    <>
      <motion.div
      variants={fadeIn('up',0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}
      className='relative z-5 flex flex-col justify-center items-center gap-4'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='font-bold text-[45px] font-varun sm:text-[70px] md:text-[95px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center'>ITYUKTA <span className='font-semibold text-5xl text-[45px] sm:text-[70px] md:text-[95px]'>2K25</span></h1>
                <p className='font-serif text-white text-[16px] sm:text-[18px] md:text-[22px] text-center mt-[-15px]'>A Two Day National Level Tech Symposium</p>
            </div>
            <div className='mt-3 flex justify-center items-center gap-3'>
                <a className='px-2 md:px-4 md:py-2 py-1 md:text-[20px] text-[18px] rounded-full border border-2-white bg-gradient-to-tr from-[#6439ff] to-[#4f75ff] text-white font-kittu' href="#general">Register Here</a>
                <a className='px-2 md:px-4 md:py-2 py-1 md:text-[20px] text-[18px] rounded-full border border-2-white hover:bg-gradient-to-tr hover:from-[#6439ff] hover:to-[#4f75ff] transition-all duration-[2s] ease-in-out text-white font-varun' href="https://chatgpt.com/c/677f92bc-3078-8002-890c-42e69b135da4" target="_blank" rel="noopener noreferrer">Watch Intro</a>
            </div>
        </motion.div>
        <img
          className="absolute inset-0 z-[-1] w-full h-screen bg-cover"
          style={{ filter: "saturate(0.5)" }}
          src={BG1}
          alt="/"
        />
    </>
  )
}

export default Header