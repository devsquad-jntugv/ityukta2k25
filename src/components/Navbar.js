import React, { useState,useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png"
import acm from '../assets/acm logo.jpg'
import dev from '../assets/devsquad.png'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const navigate=useNavigate();
  const handelNavigate=(path)=>{
    navigate(path);
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={` text-white  fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled?"bg-[#0e0d0d]":"bg-transparent"}`}>
      <div className="mx-auto px-4 py-2">
        <div className="flex md:justify-around justify-between items-center h-18">
          {/* Logo */}
          <div className="mt-3 bg-transparent">
            <a href="#home" ><img src={logo} alt="logo" loading='lazy' className="h-[70px] w-[70px] rounded-full bg-white"/></a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-[16px] sm:text-[18px] font-kittu">
            <button onClick={() => scrollToSection('home')} className="hover:text-purple-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-500 transition-colors">About</button>
            <button onClick={() => scrollToSection('guests')} className="hover:text-purple-500 transition-colors">Guests</button>
            <button onClick={() => scrollToSection('workshops')} className="hover:text-purple-500 transition-colors">WorkShops</button>
            <button onClick={() => scrollToSection('events')} className="hover:text-purple-500 transition-colors">Events</button>
            <button onClick={() => scrollToSection('culturals')} className="hover:text-purple-500 transition-colors">Culturals & Flashmob</button>
            <button onClick={() => scrollToSection('sponsors')} className="hover:text-purple-500 transition-colors">Sponsors</button>
            <button onClick={()=>handelNavigate('/contact')} className="hover:text-purple-500 transition-colors">Contact</button>
          </div>
          {/*<div className='hidden md:block'>
            <button  onClick={() => scrollToSection('workshops')} className='px-4 py-2 text-[17px] sm:text-[19px] font-kittu rounded-[5px] border border-4-white bg-transparent text-white hover:bg-gradient-to-r from-[#6439ff] to-[#4f75ff] transition-colors duration-150'>Participate</button>
          </div>*/}
          <div className='flex flex-row gap-1 items-center'>
          <div className="mt-3 bg-transparent mr-3 hidden sm:block">
            <a href="#home" ><img src={acm} alt="acm" loading='lazy' className="h-[75px] w-[75px] rounded-full bg-cover"/></a>
          </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden font-kittu bg-[#0e0d0d]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => { scrollToSection('home'); setIsOpen(false); }} 
                    className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700">Home</button>
            <button onClick={() => { scrollToSection('about'); setIsOpen(false); }}
                    className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700">About</button>
            <button onClick={() => { scrollToSection('guests'); setIsOpen(false); }}
                    className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700">Guests</button>
            <button onClick={() => { scrollToSection('workshops'); setIsOpen(false); }}
                    className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700">WorkShops</button>
            <button onClick={() => { scrollToSection('events'); setIsOpen(false); }}
                    className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700">Events</button>
            <button onClick={() => { scrollToSection('culturals'); setIsOpen(false); }}
                    className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700">Culturals</button>
            <button onClick={() => { scrollToSection('sponsors'); setIsOpen(false); }}
                    className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700">Sponsors</button>
            <button onClick={() => { handelNavigate('/contact'); setIsOpen(false); }}
                    className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700">Contact</button>
            <button  onClick={() => {scrollToSection('workshops');setIsOpen(false);}} className='px-4 py-2 text-[17px] sm:text-[19px] font-kittu rounded-[5px] border border-4-white  text-white bg-gradient-to-r from-[#6439ff] to-[#4f75ff] transition-all duration-500'>Participate</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;