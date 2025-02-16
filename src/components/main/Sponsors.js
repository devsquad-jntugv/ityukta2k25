import React from 'react'
import Person from '../../assets/IcSponsor.png'
import Hippo from '../../assets/hippo.png'
import Chennai from '../../assets/Chennai.png'
const sponsors=[
    {
        id:1,
        name:"Chennai Shopping Mall",
        logo:Chennai,
        address:"Vizianagarm",
        
    },
    {
        id:2,
        name:"HippoCloud Technologies pvt.ltd",
        logo:Hippo,
        address:"Vizag",
        url:"https://hippoclouds.com/"
    },
    {
        id:3,
        name:"IC Computers",
        logo:Person,
        address:"Vizag",
        url:"https://www.instagram.com/iccomputerworld/"
    },
]
const Sponsors = () => {
  return (
    <div className='w-full bg-[#0e0ed0d] sm:px-4 sm:py-4 px-2 py-2 flex flex-col justify-center items-center sm:flex-row gap-3'>
     {sponsors.map((sponsor)=>{
        return(
            <div key={sponsor.id} className='flex flex-col items-start gap-1 rounded-[10px] shadow-sm shadow-white'>
                <a href={sponsor.url} rel="noopener noreferrer"><img src={sponsor.logo} alt={sponsor.name} className='w-[320px] h-[220px] rounded-t-[8px] bg-cover'/></a>
                <div className='flex flex-col items-start gap-[2px] px-2 py-[2px]'>
                    <h1 className='text-[17px] sm:text-[19px] font-semibold font-kittu text-white'>{sponsor.name}</h1>
                    <p className='text-[15px] sm:text-[16px] font-kittu text-white'>{sponsor.address}</p>
                </div>
            </div>
        )
     })}
    </div>
  )
}

export default Sponsors