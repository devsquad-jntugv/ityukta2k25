import React from 'react'
import Person from '../../assets/IcSponsor.png'
import Hippo from '../../assets/hippo.png'
import Chennai from '../../assets/Chennai.png'
import Village from '../../assets/village.jpg'
import Village2 from '../../assets/village2.png'
import Code from '../../assets/cscodenz.jpg'

const sponsors=[
    {
        id:1,
        name:"Village Minds pvt.ltd",
        logo:Village,
        address:"Vizianagarm",
         url:"https://villageminds.in/"
        
    },
    {
        id:2,
        name:"Village Sports",
        logo:Village2,
        address:"Vizianagarm",
        
    },
    {
      id:3,
      name:"HippoCloud Technologies",
      logo:Hippo,
      address:"Vizag",
      url:"https://hippoclouds.com/"
    },
    {
        id:4,
        name:"Chennai Shopping Mall",
        logo:Chennai,
        address:"Vizianagarm",
        
    },
    {
      id:5,
      name:"CS Codenz",
      logo:Code,
      address:"Andhra Pradesh",
       url:"https://www.cscodenz.org/"
      
  },
    {
        id:6,
        name:"IC Computers",
        logo:Person,
        address:"Vizag",
        url:"https://www.instagram.com/iccomputerworld/"
    },
]
const Sponsors = () => {
  return (
    <div className='bg-[#0e0ed0d] sm:px-4 sm:py-4 px-2 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center sm:flex-row gap-3 flex-wrap'>
  {sponsors.map((sponsor) => {
    return (
      <div key={sponsor.id}
      className='flex flex-col items-start gap-1 rounded-[10px] shadow-sm shadow-white max-w-[250px] transition-shadow duration-300"'>
        <a href={sponsor.url} rel="noopener noreferrer">
          <img src={sponsor.logo} alt={sponsor.name} className='w-[310px] h-[160px] rounded-t-[8px] bg-cover' />
        </a>
        <div className='flex flex-col items-start gap-[2px] px-2 py-[2px] text-justify w-full max-w-[250px]'>
          <p className='text-[15px] sm:text-[17px] font-semibold font-kittu text-white'>
            {sponsor.name}
          </p>
          <p className='text-[15px] sm:text-[16px] font-kittu text-white'>
            {sponsor.address}
          </p>
        </div>
      </div>
    );
  })}
</div>

  )
}

export default Sponsors