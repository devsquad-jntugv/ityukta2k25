import React from 'react'
import { useNavigate } from 'react-router-dom'
import AI from '../../assets/Chat.jpg'
import PB from '../../assets/powerbi.jpg'
import Dev from '../../assets/Devops.jpg'
import { BotIcon, Code2, TrendingUp } from 'lucide-react';
const Workshops = () => {
 const navigate=useNavigate();
 const handelNavigate=(path)=>{
    navigate(path);
 }
  return (
    <>
    <div className='flex flex-col w-full sm:flex-row items-center justify-center gap-5 mt-3'>
    <div className='flex flex-col justify-center items-start gap-2 font-kittu text-white bg-[#1f1e1e] border border-2-[#000] rounded-xl w-[360px] sm:w-[420px] transform hover:scale-105 transition-transform duration-300 hover:cursor-pointer'>
      <div className='w-full '>
        <img src={AI} alt="" className='object-cover rounded-t-xl h-[220px] w-full'/>
      </div>
      <div className='px-3 mb-3'>
        <h1 className='text-[18px] sm:text-[22px] font-varun text-transparent bg-gradient-to-tr from-[#378ce7] to-[#67c6e3]  bg-clip-text flex flex-row gap-1 '>CHAT-BOT DEVELOPMENT <BotIcon size={28} className='text-white'/></h1>
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
    <div className='flex flex-col justify-center items-start gap-2 font-kittu text-white bg-[#1f1e1e] border border-2-[#000] rounded-xl w-[360px] sm:w-[420px] transform hover:scale-105 transition-transform duration-300 hover:cursor-pointer'>
      <div className='w-full '>
        <img src={Dev} alt="" className='object-cover rounded-t-xl h-[220px] w-full'/>
      </div>
      <div className='px-3 mb-3'>
        <h1 className='text-[18px] sm:text-[22px] font-varun text-transparent bg-gradient-to-tr from-[#378ce7] to-[#67c6e3]  bg-clip-text flex flex-row gap-1'>DEVOPS <Code2 size={28} className='text-white font-bold'/></h1>
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
    <div className='flex flex-col justify-center items-start gap-2 font-kittu text-white bg-[#1f1e1e] border border-2-[#000] rounded-xl w-[360px] sm:w-[420px] transform hover:scale-105 transition-transform duration-300 hover:cursor-pointer'>
      <div className='w-full '>
        <img src={PB} alt="" className='object-cover rounded-t-xl h-[220px] w-full'/>
      </div>
      <div className='px-3 mb-3'>
        <h1 className='text-[18px] sm:text-[22px] font-varun text-transparent bg-gradient-to-tr from-[#378ce7] to-[#67c6e3]  bg-clip-text flex flex-row gap-1'>POWER BI <TrendingUp size={28} className='text-white font-bold'/></h1>
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
    </>
  )
}

export default Workshops