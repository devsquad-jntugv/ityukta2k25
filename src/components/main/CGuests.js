import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants.js'
import Chief from '../Chief.js'
import person from '../../assets/person.png'
const CGuests = () => {
  const chiefGuests = [
                {
                  name: "Dr.D.Rajya Lakshmi",
                  role: "Hon'ble Vice Chancellor",
                  company: "JNTUGV",
                  image:person,
                  bio: "Leading researcher in artificial intelligence and machine learning, with groundbreaking work in neural networks.",
                  session: "Future of AI in Technology",
                  venue: "Main Auditorium",
                  date: "March 15, 2024 - 10:00 AM",
                  social: {
                    twitter: "#",
                    linkedin: "#",
                    github: "#"
                  }
                },
                {
                  name: "Prof. Dr.G.Jayasuma",
                  role: "Registrar",
                  company: "JNTUGV",
                  image: person,
                  bio: "Pioneering engineer with extensive experience in spacecraft systems and sustainable energy solutions.",
                  session: "Space Technology and Innovation",
                  venue: "Innovation Hub",
                  date: "March 16, 2024 - 2:00 PM",
                  social: {
                    twitter: "#",
                    linkedin: "#",
                    github: "#"
                  }
                },
              ];
  return (
    <>
    <motion.div variants={fadeIn('up',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}  className='flex flex-col justify-center items-center gap-4'>
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">CHIEF GUESTS</h1>
    <p className='text-[16px] sm:text-[18px] font-serif text-white text-center'>Meet our distinguished chief guests who are shaping the future of technology</p>
    </motion.div>
    <Chief chiefGuests={chiefGuests}/>
    </>
  )
}

export default CGuests