import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import profile from '../assets/musk.jpg'
const profiles = [
  {
    name: "Kadali Sai Kishore",
    role: "Treasurer",
    image: profile,
  },
  {
    name: "Kadali Sai Kishore",
    role: "Treasurer",
    image: profile,
  },
  {
    name: "Kadali Sai Kishore",
    role: "Treasurer",
    image: profile,
  },
  {
    name: "Kadali Sai Kishore",
    role: "Treasurer",
    image: profile,
  },
  {
    name: "Kadali Sai Kishore",
    role: "Treasurer",
    image: profile,
  },
  {
    name: "Kadali Sai Kishore",
    role: "Treasurer",
    image: profile,
  },
  {
    name: "Kadali Sai Kishore",
    role: "Treasurer",
    image: profile,
  },
  {
    name: "Kadali Sai Kishore",
    role: "Treasurer",
    image: profile,
  },
  {
    name: "Kadali Sai Kishore",
    role: "Treasurer",
    image: profile,
  },
  {
    name: "Kadali Sai Kishore",
    role: "Treasurer",
    image: profile,
  },
];

const TeamCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = profiles.length;

  // Adjust visible cards based on screen size
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 4;  // lg screen
    if (window.innerWidth >= 768) return 3;   // md screen
    if (window.innerWidth >= 640) return 2;   // sm screen
    return 1;                                 // mobile screen
  };

  const cardsToShow = getVisibleCards();
  const maxScrollIndex = maxIndex - cardsToShow;

  const nextProfile = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxScrollIndex));
  };

  const prevProfile = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex flex-col items-center justify-center p-3 relative text-white m-2">
      
      {/* Left navigation button */}
      {currentIndex > 0 && (
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
          <button 
            onClick={prevProfile}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      )}

      {/* Right navigation button */}
      {currentIndex < maxScrollIndex && (
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
          <button 
            onClick={nextProfile}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      )}

      {/* Profiles container (Horizontal Scroll) */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide px-4">
        {profiles.slice(currentIndex, currentIndex + cardsToShow).map((profile, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(100%/2-1rem)] md:w-[calc(100%/3-1rem)] lg:w-[calc(100%/4-1rem)] flex-shrink-0 flex flex-col items-center bg-[#000000] rounded-[12px]"
          >
            <div className="w-full h-[196px] mb-6 relative">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover rounded-[10px_10px_55px_0px] border border-[15px]-white"
              />
            </div>
            <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
            <p className="text-purple-600 font-medium mb-4">{profile.role}</p>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 gap-2">
        {[...Array(maxScrollIndex + 1)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
