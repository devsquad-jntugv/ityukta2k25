import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'
import { Github,Linkedin,Twitter } from 'lucide-react'
import image from '../../assets/person.png'
const ChairPerson = () => {
  return (
    <>
        <motion.div
            variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
            className='flex flex-col justify-center items-center gap-4 pb-2'>
                <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">OUR CHAIR PERSON</h1>
        </motion.div>
  <motion.div variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}} className="flex flex-col sm:flex-row items-center rounded-sm shadow-sm shadow-white mt-3 w-full max-w-4xl mx-auto">
  <div className="w-full sm:w-[250px] h-[220px] flex-shrink-0">
    <img
      className="w-full h-full object-cover rounded-sm"
      src={image}
      alt="HOD"
    />
  </div>
  <div className="flex flex-col justify-start items-start py-4 px-4 sm:px-6 w-full">
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-[20px] sm:text-[22px] font-kittu text-white leading-tight">
        Dr.Ch.Bindu Madhuri
      </h1>
      <p className="text-[17px] sm:text-[18px] font-kittu text-[#5131e1]">
        Chair Person
      </p>
      <p className="text-[16px] sm:text-[17px] font-kittu text-white leading-snug">
        Assistant Professor and Head of the Department
      </p>
    </div>
    <div className="flex justify-start items-center pt-4 gap-4">
      <a
        href
        className="text-white hover:text-blue-400 transition-colors duration-200 hover:cursor-pointer"
        aria-label="Twitter"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a
        href
        className="text-white hover:text-blue-700 transition-colors duration-200 hover:cursor-pointer"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href className="text-white hover:text-blue-700 transition-colors duration-200 hover:cursor-pointer" aria-label="GitHub">
        <Github className="w-6 h-6" />
      </a>
    </div>
  </div>
</motion.div>
        
    </>
  )
}

export default ChairPerson