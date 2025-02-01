import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion} from 'framer-motion'
import { fadeIn } from '../variants';
const Chief = ({chiefGuests=[]}) => {
      return (
        <motion.div variants={fadeIn('up',0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}} className="w-full flex flex-col justify-center items-center sm:flex-row font-kittu">
          <div className="container px-4 py-10">
            <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-12 gap-8">
              {chiefGuests.map((guest, index) => (
                <div key={index} className="bg-[#0e0d0d] rounded-sm shadow-md shadow-[#fef3f3] overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="relative h-[240px] w-[300px]">
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full bg-cover"
                      loading='lazy'
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-semibold text-white">{guest.name}</h3>
                      <p className="text-white">{guest.role}</p>
                      <p className="text-white text-sm">{guest.company}</p>
                    </div>
                  </div>
                  <div className="p-6 font-kittu">
                    <div className="flex items-center space-x-4 pt-4 border-t font-kittu">
                      {guest.social.twitter && (
                        <a href={guest.social.twitter} className="text-white hover:text-blue-400">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {guest.social.linkedin && (
                        <a href={guest.social.linkedin} className="text-white hover:text-blue-700">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {guest.social.github && (
                        <a href={guest.social.github} className="text-white hover:text-blue-700">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </motion.div>
      )
}

export default Chief