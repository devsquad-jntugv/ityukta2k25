import React from 'react';
import { Calendar, Phone, IndianRupee, QrCode, ArrowRight } from 'lucide-react';

const Mern=()=> {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Workshop Banner - Left Side */}
      <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0">
        <img 
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070"
          alt="Workshop Banner"
          className="w-full h-[400px] lg:h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center lg:hidden">
          <h1 className="text-4xl font-bold text-white text-center px-4">
            Web Development Workshop 2024
          </h1>
        </div>
      </div>
      {/* Content - Right Side */}
      <div className="lg:w-1/2 px-4 lg:px-12 py-8 lg:py-12 lg:overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          {/* Title - Visible only on desktop */}
          <h1 className="hidden lg:block text-4xl font-bold text-gray-900 mb-8">
            Web Development Workshop 2024
          </h1>

          {/* Workshop Details */}
          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Workshop</h2>
              <p className="text-gray-600 leading-relaxed">
                Join us for an intensive hands-on workshop where you'll learn the latest
                web development technologies and best practices. This workshop is perfect
                for beginners and intermediate developers looking to enhance their skills
                in modern web development.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Modern JavaScript fundamentals and ES6+ features</li>
                <li>React.js and state management</li>
                <li>Building responsive layouts with Tailwind CSS</li>
                <li>API integration and best practices</li>
                <li>Development workflow and tools</li>
              </ul>
            </div>
          </div>

          {/* Event Information Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b pb-4">
              Event Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-gray-600">March 15, 2024 | 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Contact</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <IndianRupee className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Registration Fee</p>
                  <p className="text-gray-600">₹1999/- per person</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="font-medium mb-2">UPI Payment</p>
                <p className="text-gray-600 mb-2">workshop@upi</p>
                <div className="bg-gray-100 p-4 rounded-lg flex justify-center">
                  <QrCode className="w-32 h-32" />
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                Register Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mern;