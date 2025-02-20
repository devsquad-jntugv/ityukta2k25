import React from 'react';
import AI from '../../assets/power.jpg';
import { ArrowLeft, Calendar, CheckCircle, Clock, IndianRupee, NotebookPen, PenLineIcon, Timer,AlertTriangleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Scan from "../../assets/powerbiscan.jpg";
const PowerBI = () => {
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
      <div className="flex-1 flex flex-col gap-4">
        {/* Image Section */}
        <div className="w-full">
          <img className="w-full rounded-t-[10px] bg-cover" src={AI} alt="Workshop" />
        </div>
        {/* Workshop Info */}
        <div>
          <h1 className="text-[22px] sm:text-[25px] font-kittu mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Visual Wizards:The Power BI Experience</h1>
          <p className="text-[15px] sm:text-[17px] font-kittu leading-relaxed mb-4">
          Unlock the power of data with our hands-on Power BI workshop! Dive into data visualization and advanced reporting techniques to transform raw data into meaningful insights. Learn to build interactive dashboards and real-time analytics solutions using industry best practices.  
          </p>

          {/* Prerequisites */}
        <div className='flex flex-col sm:flex-row justify-start gap-3'>
          <div>
            <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
            <ul className="space-y-2 text-[17px] sm:[18px] font-kittu">
              <li className="flex items-center">
                <PenLineIcon size={24} className="text-green-500 mr-2" />
                Laptops along with chargers
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Learning Outcomes:</h2>
            <ul className="space-y-2 text-[17px] sm:[18px] font-kittu">
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Learn how to create interactive and insightful dashboards using Power BI’s visualization tools.
              </li>
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Transform & Model Data
              </li>
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Connect Multiple Data Sources
              </li>
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Build Real-Time Reports 
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
          <div className="text-sm space-y-2 text-[16px] sm:text-[17px] font-kittu">
            <p className="flex items-center gap-1"><Calendar size={24} className='text-blue-500'/><strong className='font-kittu'>Date :</strong> Feb 25</p>
            <p className="flex items-center gap-1"><Timer size={24} className='text-blue-500'/><strong className='font-kittu'>Duration :</strong>1 day</p>
            <p className="flex items-center gap-1"><Clock size={24} className='text-blue-500'/><strong className='font-kittu'>Time :</strong> 10am to 2pm</p>
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
          <p className="text-lg font-medium">Pay Using Google form QR Code</p>
          <img src={Scan} className='w-[170px] h-[170px] rounded-[3px]' alt="scanner" />
          <a href=" https://forms.gle/DD1MRpbcuZFFmBuu6" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#6439ff] to-[#4f75ff] text-white px-6 py-2 rounded-lg transition">
            Register
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default PowerBI;
