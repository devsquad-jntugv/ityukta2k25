import React from 'react'
import Globe from '../components/Globe.js'
import G1 from '../assets/workshop.jpg'
import G2 from '../assets/musk.jpg'
import G3 from '../assets/obama_660x.jpg'
import Cult from '../assets/cultural.jpg'
import Chief from '../components/Chief.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Events from '../components/Events.js'
import { Calendar, Clock8Icon, Facebook, GithubIcon, Instagram, InstagramIcon, Linkedin, LinkedinIcon, Music, TwitterIcon, Youtube } from 'lucide-react'
import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar.js'
import { useNavigate } from 'react-router-dom'
import TeamCard from '../components/Image.js'
import BG1 from '../assets/bg2.jpg'
const Home = () => {
  const navigate=useNavigate();
  const handelNavigate=(path)=>{
    navigate(path);
  }
  return (
    <>
    <Navbar/>
    <section id="home" className=' h-screen w-[100%] px-4 py-3 flex justify-center items-center'>
        <div className='relative z-5 flex flex-col justify-center items-center gap-4'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='font-bold text-[45px] font-varun sm:text-[70px] md:text-[95px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center'>ITYUKTA <span className='font-semibold text-5xl text-[45px] sm:text-[70px] md:text-[95px]'>2K25</span></h1>
                <p className='font-serif text-white text-[16px] sm:text-[18px] md:text-[22px] text-center mt-[-15px]'>A Two Day National Level Tech Symposium</p>
            </div>
            <div className='mt-3 flex justify-center items-center gap-3'>
                <a className='px-2 md:px-4 py-2 md:text-[21px] text-[19px] rounded-full border border-2-white bg-gradient-to-tr from-[#6439ff] to-[#4f75ff] text-white font-varun' href="https://chatgpt.com/c/677f92bc-3078-8002-890c-42e69b135da4" target="_blank" rel="noopener noreferrer">Register Here</a>
                <a className='px-2 md:px-4 py-2 md:text-[21px] text-[19px] rounded-full border border-2-white hover:bg-gradient-to-tr hover:from-[#6439ff] hover:to-[#4f75ff] transition-all duration-[2s] ease-in-out text-white font-varun' href="https://chatgpt.com/c/677f92bc-3078-8002-890c-42e69b135da4" target="_blank" rel="noopener noreferrer">Watch Intro</a>
            </div>
        </div>
        <img
          className="absolute inset-0 z-[-1] w-full h-full bg-cover"
          style={{ filter: "saturate(0.5)" }}
          src={BG1}
          alt="/"
        />
    </section>
    <section id="about" className="bg-[#0e0d0d] w-full flex flex-col md:flex-row justify-center items-center md:gap-3 gap-1 px-6 sm:px-10 overflow-hidden mt-[-20px] sm:mt-0">
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
</section>
<section id="guests" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-2 overflow-hidden sm:py-24 py-8 px-4'>
  <div className='flex flex-col justify-center items-center gap-4'>
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">CHIEF GUESTS</h1>
    <p className='text-[16px] sm:text-[18px] font-serif text-white text-center'>Meet our distinguished chief guests who are shaping the future of technology</p>
  </div>
  <Chief/>
</section>
<section className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-2 overflow-hidden py-8 px-4'>
  <div className='flex flex-col justify-center items-center gap-4'>
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">GUEST OF HONOUR</h1>
    <p className='text-[16px] sm:text-[18px] font-serif text-white text-center'>Meet our distinguished guests of honours who are shaping the future of technology</p>
  </div>
  <Chief/>
</section>
<section className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-2 overflow-hidden py-8 px-4'>
  <div className='flex flex-col justify-center items-center gap-4'>
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">STUDENT COORDINATORS</h1>
  </div>
  <div className='flex flex-col justify-center items-center gap-5 sm:flex-row py-8 px-4'>
    <div className='flex flex-row justify-center items-center px-3 py-3 gap-1 rounded-[10px] w-[320px] sm:w-[480px] h-[150px] sm:h-[180px] bg-[#0e0d0d] shadow-sm shadow-white transform hover:scale-105 transition-transform duration-300'>
      <div className='w-full px-1 py-1'>
        <img className='rounded-[50%] border-[3px]-white sm:w-[150px] sm:h-[150px] w-[140px] h-[140px] bg-cover' src={G3} alt='Fest Coordinator'/>
      </div>
      <div className='flex flex-col items-start gap-1 w-full'>
        <h1 className='text-[18px] sm:text-[20px] font-kittu font-semibold text-white'>GS Pradeep</h1>
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
        <img className='rounded-[50%] border-[3px]-white w-[150px] h-[150px] bg-cover' src={G3} alt='Fest Coordinator'/>
      </div>
      <div className='flex flex-col items-start gap-1 w-full'>
        <h1 className='text-[18px] sm:text-[20px] font-kittu font-semibold text-white'>GS Pradeep</h1>
        <p className='text-[15px] sm:text-[17px] font-kittu font-semibold text-[#4135eb]'>Fest Coordinator</p>
        <div className='flex items-center gap-3'>
          <InstagramIcon size={19} className='text-white hover:cursor-pointer hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-[1px] py-[1px] rounded-[2px]'/>
          <LinkedinIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-600 px-[1px] py-[1px] rounded-[2px]'/>
          <GithubIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-500 px-[1px] py-[1px] rounded-[2px]'/>
          <TwitterIcon size={19} className='text-white hover:cursor-pointer hover:bg-blue-400 px-[1px] py-[1px] rounded-[2px]'/>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="workshops" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-4 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">WORKSHOPS</h1>
  </div>
  <div className='flex flex-col w-full sm:flex-row items-center justify-center gap-5 mt-3'>
    <div className='flex flex-col justify-center items-start gap-2 font-kittu text-white bg-[#1f1e1e] border border-2-[#000] rounded-xl w-[360px] sm:w-[420px] transform hover:scale-105 transition-transform duration-300'>
      <div className='w-full '>
        <img src={G1} alt="" className='object-cover rounded-t-xl'/>
      </div>
      <div className='px-3 mb-3'>
        <h1 className='text-[18px] sm:text-[22px] font-varun text-transparent bg-gradient-to-tr from-[#378ce7] to-[#67c6e3]  bg-clip-text'>MERN stack</h1>
        <p>Meet our distinguished guests of honours who are shaping the future of technology</p>
        <div className=''>
          <h1 className='text-[17px] sm:text-[18px] text-transparent bg-gradient-to-tr from-[#ff204e] to-[#a0153e] bg-clip-text font-varun'>Outcomes:</h1>
          <ul className='list-disc px-3 ml-3'>
            <li>Handson Project</li>
            <li>Deployment</li>
            <li>Certificate</li>
          </ul>
        </div>
        <p className='text-[18px] sm:text-[20px] font-bold font-varun text-green-500 tracking-wider'>Price:<span>600/-</span></p>
        <button onClick={()=>handelNavigate('/mern')} className='py-2 px-2 w-full font-kittu rounded-full bg-gradient-to-tr from-[#5356ff] to-[#378ce7]'>View Details</button>
      </div>
    </div>
    <div className='flex flex-col justify-center items-start gap-2 font-kittu text-white bg-[#1f1e1e] border border-2-[#000] rounded-xl w-[360px] sm:w-[420px] transform hover:scale-105 transition-transform duration-300'>
      <div className='w-full '>
        <img src={G1} alt="" className='object-cover rounded-t-xl'/>
      </div>
      <div className='px-3 mb-3'>
        <h1 className='text-[18px] sm:text-[22px] font-varun text-transparent bg-gradient-to-tr from-[#378ce7] to-[#67c6e3]  bg-clip-text'>MERN stack</h1>
        <p>Meet our distinguished guests of honours who are shaping the future of technology</p>
        <div className=''>
          <h1 className='text-[17px] sm:text-[18px] text-transparent bg-gradient-to-tr from-[#ff204e] to-[#a0153e] bg-clip-text font-varun'>Outcomes:</h1>
          <ul className='list-disc px-3 ml-3'>
            <li>Handson Project</li>
            <li>Deployment</li>
            <li>Certificate</li>
          </ul>
        </div>
        <p className='text-[18px] sm:text-[20px] font-bold font-varun text-green-500 tracking-wider'>Price:<span>600/-</span></p>
        <button className='py-2 px-2 w-full font-kittu rounded-full bg-gradient-to-tr from-[#5356ff] to-[#378ce7]'>View Details</button>
      </div>
    </div>
    <div className='flex flex-col justify-center items-start gap-2 font-kittu text-white bg-[#1f1e1e] border border-2-[#000] rounded-xl w-[360px] sm:w-[420px] transform hover:scale-105 transition-transform duration-300'>
      <div className='w-full '>
        <img src={G1} alt="" className='object-cover rounded-t-xl'/>
      </div>
      <div className='px-3 mb-3'>
        <h1 className='text-[18px] sm:text-[22px] font-varun text-transparent bg-gradient-to-tr from-[#378ce7] to-[#67c6e3]  bg-clip-text'>MERN stack</h1>
        <p>Meet our distinguished guests of honours who are shaping the future of technology</p>
        <div className=''>
          <h1 className='text-[17px] sm:text-[18px] text-transparent bg-gradient-to-tr from-[#ff204e] to-[#a0153e] bg-clip-text font-varun'>Outcomes:</h1>
          <ul className='list-disc px-3 ml-3'>
            <li>Handson Project</li>
            <li>Deployment</li>
            <li>Certificate</li>
          </ul>
        </div>
        <p className='text-[18px] sm:text-[20px] font-bold font-varun text-green-500 tracking-wider'>Price:<span>600/-</span></p>
        <button className='py-2 px-2 w-full font-kittu rounded-full bg-gradient-to-tr from-[#5356ff] to-[#378ce7]'>View Details</button>
      </div>
    </div>
  </div>
</section>
<section id="events" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-4 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">EVENTS</h1>
  </div>
   <Events/>
</section>
<section id="culturals" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-6 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center gap-2 w-full">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">Culturals and Flashmob</h1>
    <Music size={30} className=' text-blue-600'></Music>
  </div>
  <div className='flex flex-col sm:flex-row justify-center gap-3 w-[95%]  rounded-[10px] shadow-md shadow-white pb-2 transform hover:scale-105 transition-transform duration-300'>
    <div className='flex-1'>
      <img src={Cult} className='w-[100%] h-[100%] object-cover sm:rounded-tl-[12px] sm:rounded-bl-[12px] rounded-tr-[12px] rounded-tl-[12px]' alt="cult"/>
    </div>
    <div className='flex-1 flex flex-col items-start gap-3 px-2 sm:px-1'>
      <h2 className='font-bold font-cult text-[30px] sm:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider'>Cultural Night</h2>
      <p className='text-[16px] sm:text-[18px] text-white font-kittu '>Cultural Night of ITYUKTA 2k25, held on February 24, was a mesmerizing evening that brought together vibrant performances, dazzling lights, and electrifying energy. The event served as a canvas for students to showcase their diverse talents through an array of cultural expressions, including dance, music, drama, and art. Traditional and modern themes harmoniously intertwined as the performers captivated the audience with their creativity and passion. </p>
      <span className='text-[16px] sm:text-[18px] text-white font-kittu flex justify-center gap-1'>
        <Calendar size={20} className="text-blue-600"/>
        <p>Date : Feb 24</p>
      </span>
      <span className='text-[16px] sm:text-[18px] text-white font-kittu flex justify-center  gap-1'>
        <Clock8Icon size={20} className='text-blue-600'/>
        <p>Time : 8pm</p>
      </span>
    </div>
  </div>
  <div className='flex flex-col sm:flex-row justify-center gap-3 w-[95%]  rounded-[10px] shadow-md shadow-white pb-2 transform hover:scale-105 transition-transform duration-300'>
    <div className='flex-1'>
      <img src={Cult} className='w-[100%] h-[100%] object-cover sm:rounded-tl-[12px] sm:rounded-bl-[12px] rounded-tr-[12px] rounded-tl-[12px]' alt="cult"/>
    </div>
    <div className='flex-1 flex flex-col items-start gap-3 px-2 sm:px-1'>
      <h2 className='font-bold font-cult text-[30px] sm:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider'>FlashMob</h2>
      <p className='text-[16px] sm:text-[18px] text-white font-kittu '>Cultural Night of ITYUKTA 2k25, held on February 24, was a mesmerizing evening that brought together vibrant performances, dazzling lights, and electrifying energy. The event served as a canvas for students to showcase their diverse talents through an array of cultural expressions, including dance, music, drama, and art. Traditional and modern themes harmoniously intertwined as the performers captivated the audience with their creativity and passion. </p>
      <span className='text-[16px] sm:text-[18px] text-white font-kittu flex justify-center gap-1'>
        <Calendar size={20} className="text-blue-600"/>
        <p>Date : Feb 25</p>
      </span>
      <span className='text-[16px] sm:text-[18px] text-white font-kittu flex justify-center  gap-1'>
        <Clock8Icon size={20} className='text-blue-600'/>
        <p>Time : 4pm</p>
      </span>
    </div>
  </div>
</section>
<section className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-6 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center gap-2 w-full">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">EVENT CO-ORDINATORS</h1>
  </div>
  <TeamCard/>
</section>
<Footer/>
    </>
  )
}

export default Home
