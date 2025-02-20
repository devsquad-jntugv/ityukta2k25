import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants.js'
import Chief from '../Chief.js'
import person1 from '../../assets/vc.png'
import person2 from '../../assets/registrer.jpg'
import person3 from '../../assets/guest.jpg'
const CGuests = () => {
  const chiefGuests = [
                {
                  name: "Dr. D.Rajya Lakshmi",
                  role: "Hon'ble Vice Chancellor(i/c)",
                  company: "JNTU-GV,Vizianagaram",
                  image:person1,
                },
                {
                  name: "Shri Srinivas Muppaala,IRSME",
                  role: "Zonal Development Commissioner",
                  company: "Visakhapatnam Special Economic Zone",
                  image:person3,
                },
                {
                  name: "Dr. G.Jayasuma",
                  role: "Hon'ble Registrar",
                  company: "JNTU-GV,Vizianagaram",
                  image: person2,
                },
              ];
  return (
    <>
    <motion.div variants={fadeIn('up',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}  className='flex flex-col justify-center items-center gap-4'>
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">OUR GUESTS</h1>
    <p className='text-[16px] sm:text-[18px] font-serif text-white text-center'>Meet our distinguished guests who are shaping the future of technology</p>
    </motion.div>
    <Chief chiefGuests={chiefGuests}/>
    </>
  )
}

export default CGuests