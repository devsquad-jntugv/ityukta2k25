import React, { useState } from 'react';
import treasure from "../assets/treasure.jpg"
import explode from "../assets/explode.jpg"
import reflect from "../assets/reflect.jpg"
import meme from "../assets/meme.jpg"
import bounty from "../assets/bounty.jpg"
import decrypt from "../assets/decrypt.jpg"
import codecrack from "../assets/codecrack.jpg"
import knockknock from "../assets/knockknock.jpg"
import escape from "../assets/escape.jpg"
import project from "../assets/project.jpg"
const technicalEvents = [
  {
    id: 1,
    title: "Project Expo",
    image:project,
    description: "24-hour hackathon to build innovative solutions",
    url: '/project-expo',
  },
  {
    id: 2,
    title: "Knowledge Knockout",
    image:knockknock,
    description: "Robot combat competition",
    url:"/knock"
  },
  {
    id: 3,
    title: "Code Crackathon",
    image:codecrack,
    description: "Technical treasure hunt with coding challenges",
    url:"/code-crack"
  },
  {
    id: 4,
    title: "Tech Escape",
    image:escape,
    description: "Research paper presentation competition",
    url:"/tech-escape"
  },
  {
    id: 5,
    title: "Decrypt-O-PDF",
    image:decrypt,
    description: "Research paper presentation competition",
    url:"/decrypto"
  },
  {
    id: 6,
    title: "Bug Bounty",
    image:bounty,
    description: "Research paper presentation competition",
    url:"/bug-bounty"
  }
];

const nonTechnicalEvents = [
  {
    id: 7,
    title: "Treasure Hunt",
    image:treasure,
    description: "Music and dance competition",
    url:"/treasure-hunt"
  },
  {
    id: 8,
    title: "Rewind & Reflect",
    image:reflect,
    description: "Gaming tournament featuring popular titles",
    url:"/rewind"
  },
  {
    id: 9,
    title: "Exploding Entertainment",
    image:explode,
    description: "Art and photography exhibition",
    url:"/entertain"
  },
  {
    id: 10,
    title: "Meme Master",
    image:meme,
    description: "Cultural talent showcase",
    url:"/meme"
  },
];

const Events=()=> {
  const [showTechnical, setShowTechnical] = useState(true);

  return (
    <div className=" bg-[#0e0d0d] text-white text-[16px] sm:text-[18px]">
      <div className="container px-4 py-8">
        <div className="flex justify-center items-center gap-4 mb-6">
          <button
            onClick={() => setShowTechnical(true)}
            className={`sm:px-4 px-2 sm:py-2 py-1 rounded-full transition-all duration-300 ${
              showTechnical
                ? 'bg-gradient-to-tr from-[#6439ff] to-[#4f75ff] text-white font-varun'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Technical Events
          </button>
          <button
            onClick={() => setShowTechnical(false)}
            className={`sm:px-4 px-2 sm:py-2 py-1 rounded-full transition-all duration-300 ${
              !showTechnical
                ? 'bg-gradient-to-tr from-[#6439ff] to-[#4f75ff] text-white font-varun'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Non-Technical Events
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 hover:cursor-pointer">
           {(showTechnical ? technicalEvents : nonTechnicalEvents).map((event) => (
            <div key={event.id} className="relative rounded-lg bg-black overflow-hidden group">
      {/* Image */}
               <div>
                <img src={event.image} alt="Event1" className="object-cover w-full h-full" loading='lazy'/>
               </div>

      {/* Hover Content */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 via-pink-500/80 to-red-500/80 flex flex-col justify-center items-center text-center text-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 animate-[fadeInSlideUp_0.5s_ease-in-out]">
        <h2 className="text-[20px] sm:text-[22px] font-kittu font-bold">{event.title}</h2>
        <p className="text-[16px] sm:text-[18px]">{event.description}</p>
        <a href={event.url} rel="noopener noreferrer" className="text-white mt-2 px-4 py-2 bg-blue-600 text-[16px] font-varun rounded-[5px]">
          Info
        </a>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default Events ;