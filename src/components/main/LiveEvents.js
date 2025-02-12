import React from 'react';
import CodeHunt from '../../assets/codeHunt.jpg'
import Free from '../../assets/freefire.jpg'
const events = [
  {
    id: 1,
    title: 'CodeHunt',
    image: CodeHunt,
    date: 'February 16 , 2025',
    time: '10:00 AM',
    link:'https://forms.gle/bPGU6TnxCUToQS8g7'
  },
  {
    id: 2,
    title: 'FreeFire',
    image: Free,
    date: 'February 16 , 2025',
    link:'https://forms.gle/pY26aBVXV4TJ9xED7'
  },
];

const LiveEvents=()=> {
  return (
    <div className="min-h-screen bg-[#0e0d0d] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h1 className="sm:text-4xl text-2xl font-bold text-white mb-4 font-kittu">Current Events</h1>
          <p className="text-gray-400 text-lg font-kittu sm:text-[18px] text-[16px]">Join us for exciting pre-event competitions!</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 py-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative group rounded-xl overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5"
            >
              <div className="bg-gray-900 rounded-[10px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {event.icon}
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-400">
                      
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <a href={event.link} className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-transform hover:scale-105 " target='_blank' rel="noopener noreferrer">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveEvents;