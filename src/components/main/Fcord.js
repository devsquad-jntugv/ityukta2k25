import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'
import image1 from '../../assets/Rozi Mam.jpg'
import image2 from '../../assets/Manasa Mam.jpg'
import image3 from '../../assets/anilsir.jpg'
//import { LucideArrowRightCircle } from 'lucide-react'
//import { useNavigate } from 'react-router-dom'
const Fcord = () => {
  /*const navigate=useNavigate();
  const handelNavigate=(path)=>{
    navigate(path);
  }*/
  return (
    <>
      <motion.div
            variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.5}}
            className='flex flex-col justify-center items-center gap-4 pb-2'>
                <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">FACULTY COORDINATORS</h1>
        </motion.div>
<motion.div variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.5}} className='w-full flex flex-col justify-center items-center sm:flex-row mx-auto gap-5'>
  <div className="flex flex-col  items-center rounded-sm shadow-sm shadow-white mt-3  w-[310px] max-w-lg">
  <div className="w-full sm:h-[220px] h-[230px]">
    <img
      className="w-full h-full rounded-sm"
      src={image3}
      alt="1"
    />
  </div>
  <div className="flex flex-col justify-start items-start py-4 px-2 sm:px-4 w-full">
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-[19px] sm:text-[21px] font-kittu text-white leading-tight">
      Mr. Anil Wurity
      </h1>
      <p className="text-[16px] sm:text-[17px] font-kittu text-[#5131e1]">
        Faculty Coordinator
      </p>
      <p className="text-[15px] sm:text-[16px] font-kittu text-white leading-snug">
        Assistant Professor,Dept.of IT
      </p>
    </div>
    
  </div>
</div>
  <div className="flex flex-col  items-center rounded-sm shadow-sm shadow-white mt-3 w-[310px] max-w-lg">
  <div className="w-full sm:h-[220px] h-[230px]">
    <img
      className="w-full h-full rounded-sm"
      src={image1}
      alt="2"
    />
  </div>
  <div className="flex flex-col justify-start items-start py-4 px-2 sm:px-4 w-full">
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-[19px] sm:text-[21px] font-kittu text-white leading-tight">
        Mrs.Roje Spandana Rajeti
      </h1>
      <p className="text-[16px] sm:text-[17px] font-kittu text-[#5131e1]">
        Faculty Coordinator
      </p>
      <p className="text-[15px] sm:text-[16px] font-kittu text-white leading-snug">
        Assistant Professor,Dept.of IT
      </p>
    </div>
    
  </div>
</div>
<div className="flex flex-col items-center rounded-sm shadow-sm shadow-white mt-3 w-[310px] max-w-lg">
  <div className="w-full sm:h-[220px] h-[230px]">
    <img
      className="w-full h-full rounded-sm"
      src={image2}
      alt="3"
    />
  </div>
  <div className="flex flex-col justify-start items-start py-4 px-2 sm:px-4 w-full">
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-[19px] sm:text-[21px] font-kittu text-white leading-tight">
        Mrs.Bobbadi Manasa
      </h1>
      <p className="text-[16px] sm:text-[17px] font-kittu text-[#5131e1]">
        Faculty Coordinator
      </p>
      <p className="text-[15px] sm:text-[16px] font-kittu text-white leading-snug">
        Assistant Professor,Dept.of IT
      </p>
    </div>
    
  </div>
</div>
{/*<button onClick={()=>handelNavigate('/faculty')} className='px-[4px] py-[4px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
    <LucideArrowRightCircle size={28} className='text-center text-white'/>
</button>*/}
</motion.div> 
    </>
  )
}

export default Fcord