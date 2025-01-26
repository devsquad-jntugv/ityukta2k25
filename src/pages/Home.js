import React,{Suspense} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Music } from 'lucide-react'
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
const Home = () => {
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
</section>
<section id="events" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-4 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">EVENTS</h1>
  </div>
   <Events/>
</section>
<section id="culturals" className='bg-[#0e0d0d] w-full flex flex-col justify-center items-center gap-6 overflow-hidden sm:py-24 py-8 px-4'>
  <div className="flex justify-center items-center gap-2 w-full">
    <h1 className="font-bold text-[25px] font-varun sm:text-[30px] md:text-[35px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wider text-center border-b-4 border-b-[#6439ff]">Culturals and Flashmob</h1>
    <Music size={30} className=' text-blue-600'></Music>
  </div>
  <Culturals/>
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
