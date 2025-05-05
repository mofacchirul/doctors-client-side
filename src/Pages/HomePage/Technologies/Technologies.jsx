import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Technologies = () => {
      useEffect(() => {
        AOS.init({
          duration: 2000, // animation duration in ms
          once: true, // animation only once
        });
      }, []);
    return (
        <div className='py-8 max-w-6xl space-y-2 mx-auto lg:py-12 px-4 md:px-12 lg:flex items-center justify-between'>
            <div data-aos="fade-down" className=" w-full relative flex flex-col items-center">
              <a
  href="https://youtu.be/eS9Qm4AOOBY?si=fu_ePo3DV7Uz7vcD"
  target="_blank"
  rel="noopener noreferrer"

>
  <img
    src="https://i.ibb.co.com/b50t49ZQ/play-img.png"
    alt="Youtube Stream"
    className=""
  />
</a>
<button className="bg-green-500 transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2  w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.028A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z" />
                  </svg>
                </button>
              </div>

              <div className='w-full space-y-4 lg:space-y-6'>
              <p className="text-gray-500 text-lg">We are here for you</p>
                <h1 className='text-4xl md:text-5xl font-bold'>
                We Have Advanced Technologies
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                 <div className='divider'></div>

                 <p className='text-xl font-medium'>
                 Subscribe to our Newsletter
                 </p>
                
                </div> 
        </div>
    );
};

export default Technologies;