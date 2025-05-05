import React, { useEffect } from 'react';
import hero from "../../../assets/hero-doctor-1.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in ms
      once: true, // animation only once
    });
  }, []);
    return (
        <section className="py-8 lg:py-12 px-4 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            {/* Left Text Section */}
            <div className="w-full md:w-1/2 space-y-4 lg:space-y-6">
              <p className="text-gray-500 text-lg">We are here for you</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                What Makes Us Better, <br />
                Makes You Better.
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lacus ex. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos ipsum dolor sit amet.
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
                  Make Appointment
                </button>
                <button className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.028A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z" />
                  </svg>
                </button>
              </div>
            </div>
    
            {/* Right Image Section */}
            <div    data-aos="fade-up"   className="w-full md:w-1/2 relative">
              <div className="">
                <img
                  src={hero} // Replace with your image path
                  alt="Doctor"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
              {/* Social Icons */}
             
<div className="absolute top-1/2 right-0 transform -translate-y-1/2 space-y-4 text-sm text-gray-500">
  <div className="space-x-4 text-2xl">
    <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
    <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
    <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
    <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
  </div>
</div>
            </div>
          </div>
        </section>
      );
    };

export default Banner;