import React from 'react';
import Thiru from '../../assets/thiru.jpg'
import Geeta from '../../assets/geeta.jpg'
import Srikant from '../../assets/srikant.jpg'
import Madhu from '../../assets/Madhu.jpg'
import Venkat from '../../assets/venkat.jpg'
import {LucideArrowLeftCircle} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
const people = [
  {
    id: 1,
    name: "Dr. B. Tirimula Rao",
    role: "Workshops Coordinator",
    designation:"Assistant Professor,Dept.of IT",
    imageUrl: Thiru
  },
  {
    id: 2,
    name: "Mr. P. Venkateswarlu",
    role: "Food Coordinator",
    designation:"Assistant Professor(c),Dept.of IT",
    imageUrl:Venkat
  },
  {
    id: 3,
    name: "Dr. K. Srikanth",
    role: "Workshops and Food Coordinator",
    designation:"Assistant Professor(c),Dept.of IT",
    imageUrl:Srikant
  },
  {
    id: 4,
    name: "Mrs. M. Geetha Madhuri",
    role: "Technical Events Coordinator",
    designation:"Assistant Professor(c),Dept.of IT",
    imageUrl:Geeta
  },
  {
    id: 5,
    name: "Mrs. Madhumita Chanda",
    role: "Technical Events Coordinator",
    designation:"Assistant Professor(c),Dept.of IT",
    imageUrl:Madhu
  },
];

const Support=()=> {
    const navigate=useNavigate();
    const handelNavigate=(path)=>{
        navigate(path);
    }
  return (
    <div className="min-h-screen bg-[#0e0d0d] py-12 px-4 sm:px-6 lg:px-8">
    <button onClick={()=>handelNavigate('/')} className=' absolute top-5 left-5 px-[4px] py-[4px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
    <LucideArrowLeftCircle size={28} className='text-center text-white'/>
    </button>
      <div className="max-w-7xl mx-auto">
        <div className='flex justify-center items-center mb-5'>
            <h2 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">OUR FACULTY TEAM</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {people.map((person) => (
            <div
              key={person.id}
              className="bg-[#0e0d0d] rounded-sm shadow-sm shadow-white overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="w-full sm:h-[220px] h-[230px]">
                  <img
                    className="w-full h-full rounded-sm"
                    src={person.imageUrl}
                    alt="Faculty"
                  />
                </div>
              <div className="px-2 py-2">
                <h3 className="text-[16px] sm:text-[18px] font-semibold font-kittu text-white mb-2">{person.name}</h3>
                <p className="text-purple-500 text-[15px] sm:text-[16px] font-kittu mb-[4px]">{person.role}</p>
                <p className="text-white text-[15px] sm:text-[16px]">{person.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Support;