import { AlertTriangleIcon, QrCode } from 'lucide-react'
import React from 'react'

const General = () => {
  return (
    <>
      <div className='px-2'>
        <p className='flex flex-row justify-center gap-1 text-[15px] sm:text-[17px] font-kittu text-white'><AlertTriangleIcon size={28} className='text-red-600'/>Make sure that General Registration is done before enrolling(making payment) for any event or Workshop</p>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
        <div className='flex flex-col items-start gap-1 px-2 py-2 rounded-[10px] shadow-sm shadow-white'>
           <p className='text-[17px] sm:text-[18px] text-white font-bold font-kittu py-[2px] border-b-2 border-purple-500'>General Registration(<span className='text-[16px] sm:text-[17px] text-red-600 font-kittu'>Mandatory</span>)</p>
           <div className='flex flex-col items-start gap-[3px] px-2 text-white'>
            <p className=' text-[16px] sm:text-[17px] font-kittu'>One day : 100/person</p>
            <p className=' text-[16px] sm:text-[17px] font-kittu'>Two days: 200/person</p>
           </div>
           <div className='flex-flex-col items-start px-2 gap-[3px] text-white'>
            <p className='text-[16px] sm:text-[17px] font-semibold font-kittu '>Facilities:</p>
            <ul className='list-disc ml-[20px] font-kittu text-[15px] sm:text-[16px]'>
                <li>Food(only afternoon)</li>
                <li>Eligible for enrolling any event or workshop</li>
                <li>No Accomodation</li>
            </ul>
           </div>
        </div>
        <div className='flex flex-col items-start gap-1 px-2 py-2 rounded-[10px] shadow-sm shadow-white'>
           <p className='text-[17px] sm:text-[18px] text-white font-bold font-kittu py-[2px] border-b-2 border-purple-500'>General Registration(<span className='text-[16px] sm:text-[17px] text-red-600 font-kittu'>With Accomodation</span>)</p>
           <div className='flex flex-col items-start gap-[3px] px-2 text-white'>
            <p className=' text-[16px] sm:text-[17px] font-kittu'>One day : 100 + 300/person</p>
            <p className=' text-[16px] sm:text-[17px] font-kittu'>Two days: 200 + 500/person</p>
           </div>
           <div className='flex-flex-col items-start px-2 gap-[3px] text-white'>
            <p className='text-[16px] sm:text-[17px] font-semibold font-kittu '>Facilities:</p>
            <ul className='list-disc ml-[20px] font-kittu text-[15px] sm:text-[16px]'>
                <li>Food</li>
                <li>Eligible for enrolling any event or workshop</li>
                <li className='text-[#ffd000] text-[17px] sm:text-[18px]'>Accomodation is provided</li>
            </ul>
           </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-3'>
        <div className='flex flex-col items-start gap-1 text-white px-2 py-2 font-kittu border-white sm:border-r-2 sm:border-b-0 border-b-2'>
        <h1 className='font-semibold text-[17px] sm:text-[18px]'>Procedure:</h1>
        <ul className='ml-[20px] text-[16px] sm:text-[17px] list-disc'>
            <li>Choose from above plans</li>
            <li>Make payment to provided details</li>
            <li>Register</li>
        </ul>
        </div>
        <div className='flex flex-col items-start gap-1 text-white px-2 py-2 font-kittu'>
        <ul className='ml-[20px] text-[16px] sm:text-[17px] list-disc'>
            <li>UPI ID : 123456789@axl</li>
            <li className='flex flex-row gap-3'>QR - <QrCode size={150} className='text-white'/></li>
        </ul>
        </div>
      </div>
      <a className='text-[17px] sm:text-[19px] w-[200px] text-center py-2 px-2 rounded-[5px] bg-gradient-to-tr from-[#6439ff] to-[#4f75ff] text-white font-kittu' href="#home" rel="noopener noreferrer" target="_blank">Register</a>
    </>
  )
}

export default General