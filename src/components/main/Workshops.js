import React from 'react'
import { useNavigate } from 'react-router-dom'
import AI from '../../assets/chatbot.jpg'
import PB from '../../assets/power.jpg'
import Dev from '../../assets/Devops.jpg'
import { BotIcon} from 'lucide-react';
const Workshops = () => {
 const navigate=useNavigate();
 const handelNavigate=(path)=>{
   alert('make sure your general registration is done');
   navigate(path)
 }
  return (
    <>
    <div className='flex flex-col w-full sm:flex-row items-center justify-center gap-5 mt-3'>
    <div className='flex flex-col justify-center items-start gap-2 font-kittu text-white bg-[#1f1e1e] border border-2-[#000] rounded-xl w-[360px] sm:w-[420px] transition-transform transform hover:scale-105 duration-300 hover:cursor-pointer'>
      <div className='w-full '>
        <img src={AI} alt="" className='rounded-t-xl h-[220px] w-full'/>
      </div>
      <div className='px-3 mb-3'>
        <h1 className='text-[18px] sm:text-[22px] font-varun text-transparent bg-gradient-to-tr from-[#378ce7] to-[#67c6e3]  bg-clip-text flex flex-row gap-1 '>CHAT-BOT DEVELOPMENT <BotIcon size={28} className='text-white'/></h1>
        <p>Join our expert mentors who are transforming the future of chatbot development.</p>
        <a href="#combos" className='text-[#fd2f2f] flex items-center justify-center gap-2'><span className='w-[20px] h-[20px] bg-red-600 rounded-full animate-bulb'></span>Limited Offer Available</a>
        <p></p>
        <div className=''>
          <h1 className='text-[17px] sm:text-[18px] text-transparent bg-gradient-to-tr from-[#ff204e] to-[#a0153e] bg-clip-text font-varun'>Outcomes:</h1>
          <ul className='list-disc px-3 ml-3'>
            <li>Handson Project</li>
            <li>Certificate</li>
          </ul>
        </div>
        <p className='text-[18px] sm:text-[20px] font-bold font-varun text-green-500 tracking-wider'>Price:<span>600/-</span></p>
        <button onClick={()=>handelNavigate('/chatbot')} className='py-2 px-2 w-full font-kittu rounded-full bg-gradient-to-tr from-[#5356ff] to-[#378ce7]'>View Details</button>
      </div>
    </div>
    <div className='flex flex-col justify-center items-start gap-2 font-kittu text-white bg-[#1f1e1e] border border-2-[#000] rounded-xl w-[360px] sm:w-[420px] transition-transform transform hover:scale-105 duration-300 hover:cursor-pointer'>
      <div className='w-full '>
        <img src={Dev} alt="" className=' rounded-t-xl h-[220px] w-full'/>
      </div>
      <div className='px-3 mb-3'>
        <h1 className='text-[18px] sm:text-[22px] font-varun text-transparent bg-gradient-to-tr from-[#378ce7] to-[#67c6e3]  bg-clip-text flex flex-row gap-1'>DEVOPS-CODE TO CLOUD</h1>
        <p>Join our expert mentors who are redefining the future of software development and operations.</p>
        <p className='text-[#e9f32d]'>Combo Offers Available</p>
        <div className=''>
          <h1 className='text-[17px] sm:text-[18px] text-transparent bg-gradient-to-tr from-[#ff204e] to-[#a0153e] bg-clip-text font-varun'>Outcomes:</h1>
          <ul className='list-disc px-3 ml-3'>
            <li>Handson Project</li>
            <li>Certificate</li>
          </ul>
        </div>
        <p className='text-[18px] sm:text-[20px] font-bold font-varun text-green-500 tracking-wider'>Price:<span>600/-</span></p>
        <button onClick={()=>handelNavigate('/devops')} className='py-2 px-2 w-full font-kittu rounded-full bg-gradient-to-tr from-[#5356ff] to-[#378ce7]'>View Details</button>
      </div>
    </div>
    <div className='flex flex-col justify-center items-start gap-2 font-kittu text-white bg-[#1f1e1e] border border-2-[#000] rounded-xl w-[360px] sm:w-[420px] transition-transform transform hover:scale-105 duration-300 hover:cursor-pointer'>
      <div className='w-full '>
        <img src={PB} alt="" className=' rounded-t-xl h-[220px] w-full'/>
      </div>
      <div className='px-3 mb-3'>
        <h1 className='text-[18px] sm:text-[22px] font-varun text-transparent bg-gradient-to-tr from-[#378ce7] to-[#67c6e3]  bg-clip-text flex flex-row gap-1'>POWER BI</h1>
        <p>Join our skilled instructors who are unlocking the power of data visualization and analytics.</p>
        <p className='text-[#e9f32d]'>Combo Offers Available</p>
        <div className=''>
          <h1 className='text-[17px] sm:text-[18px] text-transparent bg-gradient-to-tr from-[#ff204e] to-[#a0153e] bg-clip-text font-varun'>Outcomes:</h1>
          <ul className='list-disc px-3 ml-3'>
            <li>Handson Project</li>
            <li>Certificate</li>
          </ul>
        </div>
        <p className='text-[18px] sm:text-[20px] font-bold font-varun text-green-500 tracking-wider'>Price:<span>600/-</span></p>
        <button onClick={()=>handelNavigate('/powerbi')} className='py-2 px-2 w-full font-kittu rounded-full bg-gradient-to-tr from-[#5356ff] to-[#378ce7]'>View Details</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default Workshops