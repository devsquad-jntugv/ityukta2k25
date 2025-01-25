import React from 'react'
import Globe from '../Globe'
const About =() => {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-4 py-2">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">
      ABOUT ITYUKTA
    </h1>
    <p className="font-kittu text-white text-[17px] sm:text-[18px] md:text-[19px] text-justify">
      Get ready for an exciting time as ITYUKTA eleventh national-level technical symposium like non other!. ITYUKTA is not just an event; it's a technical fest that brings together the brightest minds with innovative ideas and boundless creativity under one roof. ITYUKTA holds a variety of events, including technical and non-technical challenges, pushing participants to showcase their excellence and problem-solving skills, fostering innovative thinking in line with current trends. Nowadays, the world revolves around Artificial Intelligence, Machine Learning, Deep Learning and web development. To familiarize you with these, we offer workshops like Gemini AI, Web Blaze, and Emotion Recognition Using Facial Analysis to exhilarate you. Our technical events sharpen your mind, encouraging you to unleash your innovation. Our non-tech events offer the most fun and excitement, channeling your energy into thrilling experiences. So, our tech symposium provides you a platform to showcase talents beyond technology, offering two memorable days filled with joy, fun, and excitement.
    </p>
  </div>
  <div className="w-full max-w-full mt-[-50px] sm:mt-0">
    <Globe />
  </div>
    </>
  )
}

export default About