import React from 'react';
import AI from '../../assets/chatbot.jpg';
import { ArrowLeft, Calendar, CheckCircle, Clock, IndianRupee, NotebookPen, PenLineIcon, Timer,AlertTriangleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Scan from '../../assets/chatbotscan.jpg';
const MernPage = () => {
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
      <div className=" flex-1 flex flex-col gap-4 sm:w-1/2">
        {/* Image Section */}
        <div className="w-full">
          <img className="w-full rounded-t-[10px] bg-cover" src={AI} alt="Workshop" />
        </div>
        {/* Workshop Info */}
        <div>
          <h1 className="text-[22px] sm:text-[25px] font-kittu mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Chat-Bot Development</h1>
          <p className="text-[15px] sm:text-[17px] font-kittu leading-relaxed mb-4">
          Join us for an intensive workshop where you'll learn the fundamentals of modern chatbot development. This hands-on session covers Natural Language Processing (NLP), AI-driven conversation design, and integration with popular platforms. You'll work on real-world projects and learn from our resource persons, equipping you with the skills to build intelligent, interactive chatbots.
          </p>

          {/* Prerequisites */}
        <div className='flex flex-col sm:flex-row justify-start gap-3'>
          <div>
            <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <PenLineIcon size={24} className="text-green-500 mr-2" />
                Laptops along with chargers
              </li>
              <li className="flex items-center">
                <PenLineIcon size={24} className="text-green-500 mr-2" />
                Google Cloud account (Gmail/Google Workspace Account)
              </li>
              <li className="flex items-center">
                <PenLineIcon size={24} className="text-green-500 mr-2" />
                Microsoft 365 Account (for Copilot Studio access)
              </li>
              <li className="flex items-center">
                <PenLineIcon size={24} className="text-green-500 mr-2" />
                Laptops along with chargers
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Learning Outcomes:</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Understand the basics of chatbot design, NLP, and AI-powered conversational agents
              </li>
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Learn to design chatbots using Dialogflow ES and CX
              </li>
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Gain hands-on experience
              </li>
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Deploy chatbots and integrate them
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6">
        {/* Workshop Details */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
          <h2 className="text-[20px] sm:text-[24px] font-semibold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Workshop Details</h2>
          <div className="text-sm space-y-2">
            <p className="flex items-center gap-1"><Calendar size={24} className='text-blue-500'/><strong className='font-kittu'>Date :</strong> Feb 24 and 25</p>
            <p className="flex items-center gap-1"><Timer size={24} className='text-blue-500'/><strong className='font-kittu'>Duration :</strong> 2 days</p>
            <p className="flex items-center gap-1"><Clock size={24} className='text-blue-500'/><strong className='font-kittu'>Time :</strong> 12pm to 4pm</p>
            <p className="flex items-center gap-1">
              <NotebookPen  size={24} className='text-blue-500'/>
              <strong className='font-kittu'>Registration Fees :</strong>
              <IndianRupee size={16} className="ml-2 text-yellow-500" />
              600
            </p>
            <p className='flex flex-row items-center gap-1 text-[16px] sm:text-[17px] font-kittu'><AlertTriangleIcon size={24} className='text-red-600'/>Before registering this event make sure that your general registration is completed</p>

          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
          <p className="text-lg font-medium">Register Using Google form QR Code</p>
          <img src={Scan} className='h-[170px] w-[170px] rounded-[3px]' alt="scanner" />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTT0SG4xReEJkDiemadfymWlZl-34TXGag3O9mPUS-KvDO1w/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#6439ff] to-[#4f75ff] text-white px-6 py-2 rounded-lg transition">
            Register
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default MernPage;
