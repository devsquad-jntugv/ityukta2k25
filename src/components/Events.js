import React, { useState } from 'react';
import { Music, Brain, Gamepad2, Microscope, Bot, Palette, Trophy } from 'lucide-react';
import ludo from "../assets/ludo.jpg"
const technicalEvents = [
  {
    id: 1,
    title: "CodeGolf",
    description: "24-hour hackathon to build innovative solutions",
    url: '',
  },
  {
    id: 2,
    title: "Code Carnivals",
    description: "Robot combat competition",
    icon: <Bot className="w-8 h-8" />,
    url:""
  },
  {
    id: 3,
    title: "Code Debugging",
    description: "Technical treasure hunt with coding challenges",
    icon: <Brain className="w-8 h-8" />,
    url:""
  },
  {
    id: 4,
    title: "Hireveying",
    description: "Research paper presentation competition",
    icon: <Microscope className="w-8 h-8" />,
    url:""
  },
  {
    id: 5,
    title: "Webcanva",
    description: "Research paper presentation competition",
    icon: <Microscope className="w-8 h-8" />,
    url:""
  }
];

const nonTechnicalEvents = [
  {
    id: 6,
    title: "BeatBox Battle",
    description: "Music and dance competition",
    icon: <Music className="w-8 h-8" />,
    url:""
  },
  {
    id: 7,
    title: "GameZone",
    description: "Gaming tournament featuring popular titles",
    icon: <Gamepad2 className="w-8 h-8" />,
    url:""
  },
  {
    id: 8,
    title: "ArtVista",
    description: "Art and photography exhibition",
    icon: <Palette className="w-8 h-8" />,
    url:""
  },
  {
    id: 9,
    title: "TalentHub",
    description: "Cultural talent showcase",
    icon: <Trophy className="w-8 h-8" />,
    url:""
  },
  {
    id: 10,
    title: "BeatBox Battle",
    description: "Music and dance competition",
    icon: <Music className="w-8 h-8" />,
    url:""
  }
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
                <img src={ludo} alt="Event1" className="object-cover w-full h-full" loading='lazy'/>
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