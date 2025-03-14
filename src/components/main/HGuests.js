import React from 'react'
import Chief from '../Chief.js'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants.js'
import Image from '../../assets/person.png'
const HGuests = () => {
  const chiefGuests = [
              {
                name: "Dr. Sarah Mitchell",
                role: "AI Research Director",
                company: "DeepMind",
                image: Image,
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
                name: "Mark Anderson",
                role: "Chief Technology Officer",
                company: "SpaceX",
                image: Image,
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
              {
                name: "Mark Anderson",
                role: "Chief Technology Officer",
                company: "SpaceX",
                image: Image,
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
      <motion.div
      variants={fadeIn('right',0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}
      className='flex flex-col justify-center items-center gap-4'>
          <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">GUEST OF HONOUR</h1>
          <p className='text-[16px] sm:text-[18px] font-serif text-white text-center'>Meet our distinguished guests of honours who are shaping the future of technology</p>
        </motion.div>
        <Chief chiefGuests={chiefGuests}/>
    </>
  )
}

export default HGuests