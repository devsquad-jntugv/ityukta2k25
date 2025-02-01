import React from 'react'
import { useNavigate } from 'react-router-dom';
import De from '../../assets/knockknock.jpg'
import Scan from "../../assets/techscan.jpg"
import {Calendar,Timer,Clock,NotebookPen,IndianRupee,ArrowLeft, AlertTriangleIcon } from 'lucide-react';
const KnowKnock=()=> {
    const navigate=useNavigate();
    const handelNavigate=(path)=>{
        navigate(path);
    }
  return (
    <>
    <div className='bg-[#0e0d0d] pt-8 pb-1 px-6 w-full z-[-1]'>
        <button onClick={()=>handelNavigate('/')} className='flex items-center gap-2 bg-gradient-to-tr from-[#6439ff] to-[#4f75ff] text-[18px] sm:text-[20px] px-2 py-2 rounded-[5px] text-white'><ArrowLeft size={24} className='text-white'/>Home</button>
    </div>
    <div className="bg-[#0e0d0d] px-4 py-8 text-white flex flex-col gap-6 sm:flex-row sm:justify-between w-full">
      {/* Left Section */}
      <div className="flex flex-col gap-4 sm:w-1/2">
        {/* Image Section */}
        <div className="w-full">
          <img className="w-full rounded-t-[10px] bg-cover" src={De} alt="Event" />
        </div>
        {/* Workshop Info */}
        <div>
          <h1 className="text-[22px] sm:text-[25px] font-kittu mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Knowledge Knockout</h1>
          <p className="text-[15px] sm:text-[17px] font-kittu leading-relaxed mb-4">
          Knowledge Knockout is an engaging technical event designed to test participants' expertise and understanding in a particular topic.The event challenges their knowledge and analytical skills.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex sm:flex-col flex-col-reverse gap-2 sm:w-1/2">
        {/* Workshop Details */}
        <div className='flex flex-col gap-2'>
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
          <h2 className="text-[20px] sm:text-[24px] font-semibold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Event Details</h2>
          <div className="text-sm space-y-2">
            <p className="flex items-center gap-1 font-kittu"><Calendar size={24} className='text-blue-500'/><strong className='font-kittu'>Date :</strong> Feb 24</p>
            <p className="flex items-center gap-1 font-kittu"><Timer size={24} className='text-blue-500'/><strong className='font-kittu'>Duration :</strong>2 hour</p>
            <p className="flex items-center gap-1 font-kittu"><Clock size={24} className='text-blue-500'/><strong className='font-kittu'>Time :</strong>11am</p>
            <p className="flex items-center gap-1 font-kittu">
              <NotebookPen  size={24} className='text-blue-500'/>
              <strong className='font-kittu'>Registration Fees :</strong>
              <IndianRupee size={16} className="ml-2 text-yellow-500"/>
              50
            </p>
            <p className='flex flex-row items-center gap-1 text-[16px] sm:text-[17px] font-kittu'><AlertTriangleIcon size={24} className='text-red-600'/>Before registering this event make sure that your general registration is completed</p>
        
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
          <p className="text-lg font-medium">Register Using QR Code</p>
          <img src={Scan} alt="scanner" className='w-[170px] h-[170px] roounded-[3px]' />
          <a href="https://forms.gle/3FqMtuMDSrTEcEyp6" target='_blank' rel="noopener noreferrer" className="bg-gradient-to-r from-[#6439ff] to-[#4f75ff] text-white px-6 py-2 rounded-lg transition">
            Register
          </a>
        </div>
        </div>
        <div className="bg-[#1a1a1a] px-4 py-3 rounded-lg shadow-lg flex flex-col items-start gap-2">
          <h1 className="text-[20px] sm:text-[24px] font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Event Description</h1>
          <ul className='list-disc ml-[30px] text-[16px] sm:text-[17px] font-kittu text-white'>
            <li>Participants must select one subject from the three available options.</li>
            <li>An exam will be conducted based on the chosen subject.</li>
            <li>Participants will be evaluated based on their performance in the exam.</li>
            <li>The participant(s) scoring the highest marks will be declared the winner(s).</li>
            <li><span className='text-[#ff8c2d]'>Participant certificate</span> is provided for everyone,<span className='text-[#ff8c2d]'>for winners Merit certificate</span> is given</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default KnowKnock