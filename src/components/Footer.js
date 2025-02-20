import React from 'react'
import {Youtube,Instagram,Linkedin} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate=useNavigate();
    const handelNavigate=(path)=>{
      navigate(path);
    }
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div className='bg-[#000000] w-full'>
     <footer className='bg-[#000000] w-full overflow-hidden flex flex-col items-start gap-3 sm:justify-around sm:flex-row sm:items-center py-4 px-4'>
         <div className='flex flex-col py-2 px-2 items-start gap-2 text-white'>
           <h1 className='text-[18px] font-kittu bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>ITYUKTA 2k25</h1>
           <p className='text-[16px] font-varun'>A National Level Technical-fest | JNTU-GV IT</p>
           <p className='text-[16px] font-varun'>Follow us for updates on :</p>
           <div className='flex gap-2 items-center justify-start transition-all'>
             
             <a href="https://www.instagram.com/ityukta_2k25?igsh=ZjZ3NDJ2NTB5MDl2" target='_blank' rel="noopener noreferrer"><Instagram size={22} className='hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-[1px] py-[1px] rounded-[2px] hover:cursor-pointer'/></a>
             <a href=" https://www.linkedin.com/company/ityukta2k25/" target="_blank" rel='noopener noreferrer'><Linkedin size={22} className='hover:bg-blue-500 px-[1px] py-[1px] rounded-[2px] hover:cursor-pointer'/></a>
             <a href="https://www.youtube.com/watch?v=eD-OdHHcayg" target="_blank" rel="noopener noreferrer"><Youtube size={22} className='hover:bg-red-600 px-[1px] py-[1px] rounded-[2px] hover:cursor-pointer'/></a>
           </div>
           <p className='text-[16px] font-varun'>Email: ityukta2k25@gmail.com</p>
           <p className='text-[16px] font-kittu'>Contact: 8074543896 , 9573548001</p>
         </div>
         <div className='flex flex-col py-2 px-2 items-start gap-2 text-white'>
           <p onClick={() => scrollToSection('home')} className='text-[16px] font-varun hover:cursor-pointer hover:text-purple-400'>Home</p>
           <p onClick={() => scrollToSection('about')} className='text-[16px] font-varun hover:cursor-pointer hover:text-purple-400'>About</p>
           <p onClick={() => scrollToSection('workshops')} className='text-[16px] font-varun hover:cursor-pointer hover:text-purple-400'>Workshops</p>
           <p onClick={() => scrollToSection('events')} className='text-[16px] font-varun hover:cursor-pointer hover:text-purple-400'>Events</p>
         </div>
         <div className='flex flex-col py-2 px-2 items-start gap-2 text-white'>
           <p onClick={()=>handelNavigate('/contact')} className='text-[16px] font-varun hover:cursor-pointer hover:text-purple-400'>Contact</p>
           <p onClick={() => scrollToSection('sponsors')} className='text-[16px] font-varun hover:cursor-pointer hover:text-purple-400'>Sponsors</p>
           <p onClick={() => scrollToSection('guests')} className='text-[16px] font-varun hover:cursor-pointer hover:text-purple-400'>Guests</p>
           <p onClick={() => scrollToSection('culturals')} className='text-[16px] font-varun hover:cursor-pointer hover:text-purple-400'>Culturals & Flashmob</p>
         </div>
     </footer>
     <p className='text-[12px] sm:text-[15px] font-kittu text-center text-white'>Copyright ©2025 All rights reserved | JNTU-GV | Dept.of IT,Yukta DevSquad</p>
    </div>
  )
}

export default Footer