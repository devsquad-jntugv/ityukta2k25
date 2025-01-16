import { ArrowLeft } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e5928632-6bd3-4a98-b85f-1e9b18c84769");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("your message sent successfully")
        }
      };
      const handelSubmit=(e)=>{
        const form=e.target;
        onSubmit(e);
        form.reset();
      }
      const navigate=useNavigate()
      const handleNavigate=(path)=>{
        navigate(path);
      }
  return (
    <>
    <div className='bg-[#0e0d0d] w-[100%] py-4 px-4'>
        <button className='px-2 py-2'><ArrowLeft size={30} onClick={()=>handleNavigate('/')} className='text-white bg-gradient-to-tr from-[#6439ff] to-[#4f75ff] rounded-full'/></button>
    </div>
    <div className='bg-[#0e0d0d] h-screen w-[100%] px-4 py-3 flex justify-center items-center'>
        <section className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <div className='flex flex-col gap-2 bg-[#0e0d0d] px-2 py-2  w-full rounded-md shadow-sm shadow-white'>
                <h1 className='text-[18px] sm:text-[20px] font-kittu font-extrabold bg-gradient-to-r from-[#6439ff] to-[#4f75ff] bg-clip-text text-transparent text-center mt-2'>Contact Us</h1>
                <form className='md:w-[400px] sm:w-[350px] w-[310px] flex flex-col gap-2 px-3 py-3' onSubmit={(e)=>handelSubmit(e)}>
                    <input type="text" required placeholder='Your Name' className=' px-2 py-2 outline-none border-none rounded-sm text-white text-[17px] font-varun shadow-sm shadow-blue-300 hover:outline-gray-500 focus:outline-blue-500 mb-2 bg-transparent' name="name"/>
                    <input type="email" required placeholder="Your Email" className=' px-2 py-2 outline-none border-none rounded-sm text-white text-[17px] font-varun shadow-sm shadow-blue-300 hover:outline-gray-500 focus:outline-blue-500 mb-2 bg-transparent' name="email"/>
                    <input type="text" required placeholder="Subject" className=' px-2 py-2 outline-none border-none rounded-sm text-white text-[17px] font-varun shadow-sm shadow-blue-300 hover:outline-gray-500 focus:outline-blue-500 mb-2 bg-transparent' name="subject"/>
                    <textarea placeholder='Message' rows={4} cols={5} className=' px-2 py-2 outline-none border-none rounded-sm text-white text-[17px] font-varun shadow-sm shadow-blue-300 hover:outline-gray-500 focus:outline-blue-500 mb-2 bg-transparent' name="message"></textarea>
                    <button className='w-full px-2 py-2 bg-gradient-to-tr from-[#6439ff] to-[#4f75ff] text-[18px] text-white font-kittu rounded-[10px]'>Submit</button>
                </form>
            </div>
            <div className='bg-white px-3 py-3 rounded-[10px]'>
                <h1 className='text-[20px] text-black font-kittu font-bold '>Google Maps</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.9416772721406!2d83.37305143699739!3d18.15109001465625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef0baf9f2a11%3A0xdb0b518115b27e07!2sJNTU-GV%20COLLEGE%20OF%20ENGINEERING%20VIZIANAGARAM!5e0!3m2!1sen!2sin!4v1736930388038!5m2!1sen!2sin" width="500" height="380" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='px-2 py-2 sm:w-[400px] md:w-[500px] w-[310px] sm:h-[350px] md:h-[380px] h-[300px]'></iframe>
            </div>
        </section>
    </div>
    </>
  )
}

export default Contact