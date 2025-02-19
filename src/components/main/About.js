import React from 'react'
import Globe from '../Globe'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'
const About =() => {
  return (
    <>
    <motion.div
    variants={fadeIn('up',0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}

    className="flex flex-col justify-center items-center gap-4 py-16">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider  border-b-4 border-b-[#6439ff]">
      ABOUT ITYUKTA
    </h1>
    <p className="font-kittu text-white text-[17px] sm:text-[18px] md:text-[19px] text-justify">
    ITYUKTA, meaning "well-connected" and "skillfully engaged," embodies a vision of technological empowerment, collaboration, and limitless learning. Guided by the mantra “Igniting Ideas, Empowering Innovation,” ITYUKTA 2k25 is a melting pot of creativity and technology, bringing together bright minds to explore the ever-evolving digital landscape.With flagship workshops on DevOps, Chatbot Development, and Power BI, ITYUKTA 2k25 equips students with cutting-edge skills, transforming theoretical knowledge into real-world expertise. It serves as a launchpad for innovators, problem-solvers, and tech enthusiasts, bridging the gap between academia and industry.It is more than an event—it is a movement that fuels passion, sharpens skills, and nurtures future leaders in technology.Join us at ITYUKTA 2k25 on <span className='font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>February 24 and 25</span>, where ideas take flight, knowledge turns into action, and innovation drives the future! 🚀💡✨
    </p>
  </motion.div>
  <motion.div
  variants={fadeIn('left',0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}} className="w-full sm:mt-0">
    <Globe />
  </motion.div>
    </>
  )
}

export default About