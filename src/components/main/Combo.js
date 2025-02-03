import React from 'react'

const Combo = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-[100%] mt-3'>
    <h1 className='text-white text-[22px] sm:text-[24px] font-kittu'>Individual Register</h1>
    <div className='flex flex-col justify-center items-center gap-2 w-full'>
    <a  href="#workshops" className='w-full flex justify-center items-center'><div className='flex flex-col justify-center items-center gap-2 py-2 px-4 w-[90%] rounded-[10px] bg-white hover:cursor-pointer hover:bg-gray-300 transition-colors duration-150'>
      <p className='text-[18px] sm:text-[20px] font-kittu'>Workshop-600/person</p>
      <p  className='text-[16px] sm:text-[18px] font-kittu font-semicold'>Normal Pricing</p>
    </div></a>
    <a  href="https://docs.google.com/forms/d/e/1FAIpQLSel0Yw-ffJP4_jY0fqiY1wfoZ2Pv4DR8nYaCVxQaVAMXZJ3-Q/viewform?usp=header" target="_blank" rel="noopener noreferrer" className='w-full flex justify-center items-center'><div className='flex flex-col justify-center items-center gap-2 py-2 px-4 w-[90%] rounded-[10px] bg-white hover:cursor-pointer hover:bg-gray-300 transition-colors duration-150'>
      <p className='text-[18px] sm:text-[20px] font-kittu'>Combo (Power BI Workshop + Devops Workshop)</p>
      <p  className='text-[16px] sm:text-[18px] font-kittu font-semibold'>Price : 1000/-</p>
    </div></a>
    </div>
  </div>
  <div className='flex flex-col justify-center items-center w-[100%]'>
    <h1 className='text-white text-[22px] sm:text-[24px] font-kittu'>Team Register</h1>
    <div className='flex flex-col justify-center items-center gap-2 w-full'>
    <a href=" https://forms.gle/Dym1DooDyN7witRd6" className='w-full flex justify-center items-center' target="_blank" rel="noopener noreferrer"><div className='flex flex-col justify-center items-center gap-2 py-2 px-4 w-[90%] rounded-[10px] bg-white hover:cursor-pointer hover:bg-gray-300 transition-colors duration-150'>
      <p className='text-[20px] sm:text-[22px] font-bold font-kittu py-[2px] border-b-4  border-black bg-transparent outline-none'>Bulk Offer 1</p>
      <p className='text-[18px] sm:text-[20px] font-kittu'>(Power BI Workshop + Devops Workshop)</p>
      <p className='text-[20px] sm:text-[22px] font-kittu'>Group of 5 members at a time</p>
      <p  className='text-[17px] sm:text-[19px] font-kittu'>Price : 800/person</p>
      <p  className='text-[16px] sm:text-[18px] font-kittu font-semibold'>Total : 4000/-</p>
    </div></a>
    <a href=" https://forms.gle/FyECQCvmgRa2nag78" className='w-full flex justify-center items-center' target="_blank" rel="noopener noreferrer"><div className='flex flex-col justify-center items-center gap-2 py-2 px-4 w-[90%] rounded-[10px] bg-white hover:cursor-pointer hover:bg-gray-300 transition-colors duration-150'>
      <p className='text-[20px] sm:text-[22px] font-bold font-kittu py-[2px] border-b-4  border-black bg-transparent outline-none hover:cursor-pointer'>Bulk Offer 2</p>
      <p className='text-[18px] sm:text-[20px] font-kittu'>(Power BI Workshop + Devops Workshop)</p>
      <p className='text-[20px] sm:text-[22px] font-kittu'>Group of 10 members at a time</p>
      <p  className='text-[17px] sm:text-[19px] font-kittu'>Price : 700/person</p>
      <p  className='text-[16px] sm:text-[18px] font-kittu font-semibold'>Total : 7000/-</p>
    </div></a>
    <a href="https://forms.gle/aWhu1WavGrQrZ3iE7" className='w-full flex justify-center items-center' target="_blank" rel="noopener noreferrer"><div className='flex flex-col justify-center items-center gap-2 py-2 px-4 w-[90%] rounded-[10px] bg-white hover:cursor-pointer hover:bg-gray-300 transition-colors duration-150'>
      <p className='text-[20px] sm:text-[22px] font-bold font-kittu py-[2px] border-b-4  border-black bg-transparent outline-none '>Bulk Offer 3</p>
      <p className='text-[18px] sm:text-[20px] font-kittu'>(Power BI Workshop <span className='text-red-700'>(or)</span> Devops Workshop)</p>
      <p className='text-[20px] sm:text-[22px] font-kittu'>Group of 10 members at a time</p>
      <p  className='text-[17px] sm:text-[19px] font-kittu'>Price : 400/person</p>
      <p  className='text-[16px] sm:text-[18px] font-kittu font-semibold'>Total : 4000/-</p>
    </div></a>
    </div>
    </div>
    </>
  )
}

export default Combo