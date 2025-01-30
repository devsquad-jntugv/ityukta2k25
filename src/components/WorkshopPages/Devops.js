import React from 'react';
import AI from '../../assets/Chat.jpg';
import { ArrowLeft, Calendar, CheckCircle, Clock, IndianRupee, LucideBadgeIndianRupee, NotebookPen, PenLineIcon, QrCode, Timer,AlertTriangleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Devops = () => {
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
          <img className="w-full h-[500px] rounded-t-[10px] bg-cover" src={AI} alt="Workshop" />
        </div>
        {/* Workshop Info */}
        <div>
          <h1 className="text-[22px] sm:text-[25px] font-kittu mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Devops : Code to Cloud</h1>
          <p className="text-[15px] sm:text-[17px] font-kittu leading-relaxed mb-4">
          Elevate your software development process with our immersive DevOps workshop! Master the art of continuous integration, deployment automation, and cloud orchestration to build high-performing, scalable systems.Gain hands-on experience with real-world projects and expert guidance to transform your DevOps skills.
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
                Learn the principles and benefits of DevOps.
              </li>
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Gain hands-on experience with CI/CD pipelines.
              </li>
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Learn how to automate software testing and deployment.
              </li>
              <li className="flex items-center">
                <CheckCircle size={24} className="text-green-500 mr-2" />
                Learn about cloud services (AWS, Azure, GCP) in a DevOps environment.
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6 sm:w-1/2">
        {/* Workshop Details */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
          <h2 className="text-[20px] sm:text-[24px] font-semibold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Workshop Details</h2>
          <div className="text-sm space-y-2 text-[16px] sm:text-[17px] font-kittu">
            <p className="flex items-center gap-1"><Calendar size={24} className='text-blue-500'/><strong className='font-kittu'>Date :</strong> Feb 24th</p>
            <p className="flex items-center gap-1"><Timer size={24} className='text-blue-500'/><strong className='font-kittu'>Duration :</strong>1 day</p>
            <p className="flex items-center gap-1"><Clock size={24} className='text-blue-500'/><strong className='font-kittu'>Time :</strong> 10am to 4pm</p>
            <p className="flex items-center gap-1">
              <NotebookPen  size={24} className='text-blue-500'/>
              <strong className='font-kittu'>Registration Fees :</strong>
              <IndianRupee size={16} className="ml-2 text-yellow-500" />
              600
            </p>
            <p className='flex flex-row items-center gap-1 text-[16px] sm:text-[17px] font-kittu'><AlertTriangleIcon size={24} className='text-red-600'/>Before registering this event make sure that your general registration is completed</p>
            <p className='flex items-center gap-1'><LucideBadgeIndianRupee size={24} className='text-blue-500'/><strong>UPI ID :</strong> 1234567890@sbi</p>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
          <p className="text-lg font-medium">Pay Using QR Code</p>
          <QrCode size={80} />
          <button className="bg-gradient-to-r from-[#6439ff] to-[#4f75ff] text-white px-6 py-2 rounded-lg transition">
            Register
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Devops;
