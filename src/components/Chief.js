import React from 'react'
import { Mic, Calendar, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
const Chief = () => {
    const chiefGuests = [
        {
          name: "Dr. Sarah Mitchell",
          role: "AI Research Director",
          company: "DeepMind",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
          bio: "Leading researcher in artificial intelligence and machine learning, with groundbreaking work in neural networks.",
          session: "Future of AI in Technology",
          venue: "Main Auditorium",
          date: "March 15, 2024 - 10:00 AM",
          social: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          }
        },
        {
          name: "Mark Anderson",
          role: "Chief Technology Officer",
          company: "SpaceX",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
          bio: "Pioneering engineer with extensive experience in spacecraft systems and sustainable energy solutions.",
          session: "Space Technology and Innovation",
          venue: "Innovation Hub",
          date: "March 16, 2024 - 2:00 PM",
          social: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          }
        },
        {
          name: "Dr. Elena Rodriguez",
          role: "Quantum Computing Expert",
          company: "IBM Research",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
          bio: "Leading authority in quantum computing and its applications in cryptography and optimization.",
          session: "Quantum Computing Revolution",
          venue: "Tech Center",
          date: "March 17, 2024 - 11:30 AM",
          social: {
            twitter: "#",
            linkedin: "#",
            github: "#"
          }
        }
      ];
      return (
        <div className="w-full flex flex-col justify-center items-center sm:flex-row font-kittu">
          <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chiefGuests.map((guest, index) => (
                <div key={index} className="bg-[#0e0d0d] rounded-sm shadow-md shadow-[#fef3f3] overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="relative h-[200px]">
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-semibold text-white">{guest.name}</h3>
                      <p className="text-white">{guest.role}</p>
                      <p className="text-white text-sm">{guest.company}</p>
                    </div>
                  </div>
                  <div className="p-6 font-kittu">
                    <p className="text-white mb-4">{guest.bio}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-white">
                        <Mic className="w-5 h-5 mr-2" />
                        <span>{guest.session}</span>
                      </div>
                      <div className="flex items-center text-white">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{guest.venue}</span>
                      </div>
                      <div className="flex items-center text-white">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{guest.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 pt-4 border-t font-kittu">
                      {guest.social.twitter && (
                        <a href={guest.social.twitter} className="text-white hover:text-blue-400">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {guest.social.linkedin && (
                        <a href={guest.social.linkedin} className="text-white hover:text-blue-700">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {guest.social.github && (
                        <a href={guest.social.github} className="text-white hover:text-blue-700">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
      )
}

export default Chief