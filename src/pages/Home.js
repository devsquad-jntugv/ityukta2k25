import React,{Suspense,useEffect} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../components/styles/home.css'
import { Music, PointerIcon } from 'lucide-react'
import Loading from '../components/Loading.js'
const Header=React.lazy(()=>import('../components/main/Header.js'))
const Navbar=React.lazy(()=>import('../components/Navbar.js'))
const About =React.lazy(()=>import('../components/main/About.js'))
const SCord=React.lazy(()=>import('../components/main/SCord.js'))
const HGuests=React.lazy(()=>import('../components/main/HGuests.js'))
const CGuests=React.lazy(()=>import('../components/main/CGuests.js'))
const Events=React.lazy(()=>import('../components/Events.js'))
const Footer=React.lazy(()=>import('../components/Footer.js'))
const TeamCard=React.lazy(()=>import('../components/Image.js'))
const Workshops=React.lazy(()=>import('../components/main/Workshops.js'))
const Culturals=React.lazy(()=>import('../components/main/Culturals.js'))
const Patrons=React.lazy(()=>import('../components/main/patrons.js'))
const ChairPerson=React.lazy(()=>import('../components/main/ChairPerson.js'))
const Fcord=React.lazy(()=>import('../components/main/Fcord.js'))
const Combo=React.lazy(()=>import('../components/main/Combo.js'))
const General=React.lazy(()=>import('../components/main/General.js'))
const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });

    const hiddenElements =document.querySelectorAll(".hidden-section");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <Suspense fallback={<Loading/>}>
    <Navbar/>
    <section id="home" className=' h-screen w-[100%] px-4 py-3 flex justify-center items-center'>
        <Header/>
    </section>
    <section id="about" className="bg-[#0e0d0d] w-full flex flex-col md:flex-row justify-center items-center md:gap-3 gap-1 px-6 sm:px-10 overflow-hidden mt-[-50px] sm:mt-0">
       <About/>
    </section>
<section id="guests" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-2 overflow-hidden sm:py-24 py-8 px-4'>
  <CGuests/>
</section>
<section className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-2 overflow-hidden py-8 px-4'>
  <HGuests/>
</section>
<section id="guests" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-2 overflow-hidden sm:py-24 py-8 px-4'>
  <Patrons/>
</section>
<section id="guests" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-2 overflow-hidden sm:py-24 py-8 px-4 mx-auto sm:mx-0'>
  <ChairPerson/>
</section>
<section id="guests" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-2 overflow-hidden sm:py-24 py-8 px-4 mx-auto sm:mx-0'>
  <Fcord/>
</section>
<section className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-2 overflow-hidden py-8 px-4'>
  <div className='flex flex-col justify-center items-center gap-4'>
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">STUDENT COORDINATORS</h1>
  </div>
  <SCord/>
</section>
<section id="workshops" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-4 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">WORKSHOPS</h1>
  </div>
  <Workshops/>
  <a href="#combos" className='font-kittu py-2 px-3 text-[18px] sm:text-[20px] bg-gradient-to-tr from-[#6439ff] to-[#4f75ff] mt-[30px] text-white rounded-[5px] hover:cursor-pointer flex flex-row gap-2'>Combo offers available <PointerIcon size={30} className='-rotate-180 text-white'/></a>
</section>
<section id="events" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-4 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">EVENTS</h1>
  </div>
   <Events/>
</section>
<section id="combos" className='bg-[#0e0d0d]  w-full flex flex-col justify-center items-center gap-4 overflow-hidden sm:py-24 py-8 px-4 mx-auto'>
<div className="flex justify-center items-center">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">COMBO GRAB</h1>
  </div>
  <Combo/>
  
</section>
<section id="culturals" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-6 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center gap-2 w-full">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">Culturals and Flashmob</h1>
    <Music size={30} className=' text-blue-600'></Music>
  </div>
  <Culturals/>
</section>
<section id="general" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-6 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center gap-2 w-full">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">REGISTRATION</h1>
  </div>
  <General/>
</section>
<section className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-6 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center gap-2 w-full">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">EVENT CO-ORDINATORS</h1>
  </div>
  <TeamCard/>
</section>
<Footer/>
</Suspense>
  )
}

export default Home
