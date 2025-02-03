import React from 'react'
import {InstagramIcon,LinkedinIcon} from 'lucide-react'
import M1 from '../../assets/boyco1.jpg'
import M2 from "../../assets/boyco2.jpg"
import G1 from "../../assets/girlco1.jpg"
import G2 from "../../assets/girlco2.jpg"
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
              <img className='rounded-[50%] border-[3px]-white sm:w-[150px] sm:h-[150px] w-[140px] h-[140px] bg-cover' src={M1} alt='Fest Coordinator'/>
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <h1 className='text-[18px] sm:text-[20px] font-kittu font-semibold text-white'>B.S.S. Sravan</h1>
              <p className='text-[15px] sm:text-[17px] font-kittu font-semibold text-[#4135eb]'>Fest Coordinator</p>
              <div className='flex items-center gap-3'>
              <a href="https://www.instagram.com/shanmukh_bajjangi_?utm_source=qr&igsh=MTJkNjJvdDA5em1pZQ==" target="_blank" rel="noopener noreferrer"><InstagramIcon size={19} className='text-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-[1px] py-[1px] rounded-[2px]'/></a>
              <a href="https://www.linkedin.com/in/shanmukh-sravan-bajjangi-057374271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-600 px-[1px] py-[1px] rounded-[2px]'/></a>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center px-3 py-3 gap-1 rounded-[10px] w-[320px] sm:w-[480px] h-[150px] sm:h-[180px] bg-[#0e0d0d] shadow-sm shadow-white transform hover:scale-105 transition-transform duration-300'>
            <div className='w-full px-1 py-1'>
              <img className='rounded-[50%] border-[3px]-white sm:w-[150px] sm:h-[150px] w-[140px] h-[140px] bg-cover' src={M2} alt='Fest Coordinator'/>
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <h1 className='text-[18px] sm:text-[20px] font-kittu font-semibold text-white'>G.S.S. Pradeep</h1>
              <p className='text-[15px] sm:text-[17px] font-kittu font-semibold text-[#4135eb]'>Fest Coordinator</p>
              <div className='flex items-center gap-3'>
              <a href="https://www.instagram.com/pradeep..005?igsh=MWk2dTV4Z204d2IxaA==&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer"><InstagramIcon size={19} className='text-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-[1px] py-[1px] rounded-[2px]'/></a>
              <a href="https://www.linkedin.com/in/pradeep-gedela-26838728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-600 px-[1px] py-[1px] rounded-[2px]'/></a>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center px-3 py-3 gap-1 rounded-[10px] w-[320px] sm:w-[480px] h-[150px] sm:h-[180px] bg-[#0e0d0d] shadow-sm shadow-white transform hover:scale-105 transition-transform duration-300'>
            <div className='w-full px-1 py-1'>
              <img className='rounded-[50%] border-[3px]-white sm:w-[150px] sm:h-[150px] w-[140px] h-[140px] bg-cover' src={G1} alt='Fest Coordinator'/>
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <h1 className='text-[18px] sm:text-[20px] font-kittu font-semibold text-white'>G.Pravalika</h1>
              <p className='text-[15px] sm:text-[17px] font-kittu font-semibold text-[#4135eb]'>Fest Coordinator</p>
              <div className='flex items-center gap-3'>
                <a href="https://www.instagram.com/pravalli.21?igsh=MXkweWNyczU3dXVoNA==" target="_blank" rel="noopener noreferrer"><InstagramIcon size={19} className='text-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-[1px] py-[1px] rounded-[2px]'/></a>
                <a href="https://www.linkedin.com/in/pravallika-ganta-7662932b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-600 px-[1px] py-[1px] rounded-[2px]'/></a>
              </div>
            </div>
          </div><div className='flex flex-row justify-center items-center px-3 py-3 gap-1 rounded-[10px] w-[320px] sm:w-[480px] h-[150px] sm:h-[180px] bg-[#0e0d0d] shadow-sm shadow-white transform hover:scale-105 transition-transform duration-300'>
            <div className='w-full px-1 py-1'>
              <img className='rounded-[50%] border-[3px]-white sm:w-[150px] sm:h-[150px] w-[140px] h-[140px] bg-cover' src={G2} alt='Fest Coordinator'/>
            </div>
            <div className='flex flex-col items-start gap-1 w-full'>
              <h1 className='text-[18px] sm:text-[20px] font-kittu font-semibold text-white'>T.Ganga Bhavani</h1>
              <p className='text-[15px] sm:text-[17px] font-kittu font-semibold text-[#4135eb]'>Fest Coordinator</p>
              <div className='flex items-center gap-3'>
              <a href="https://www.instagram.com/ganga_tutta/?hl=en" target="_blank" rel="noopener noreferrer"><InstagramIcon size={19} className='text-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-[1px] py-[1px] rounded-[2px]'/></a>
              <a href="https://www.linkedin.com/in/ganga-tutta-ba425b28b/" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-600 px-[1px] py-[1px] rounded-[2px]'/></a>
              </div>
            </div>
          </div>
        </motion.div>
    </>
  )
}

export default SCord