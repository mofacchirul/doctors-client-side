import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const BestDoctor = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // animation duration in ms
          once: true, // animation only once
        });
      }, []);
  return (
    <div className="py-8 lg:py-12 ">
        <div className='2/3 mx-auto text-center pb-4 '>
            <h1 className='text-4xl md:text-5xl font-bold'>
            About us
            </h1>
            <p>
            Here you can see our insurance plans that include individual group and family plan.
            </p>
        </div>
 <div data-aos="fade-right" className="p-8 flex flex-wrap gap-4 justify-center items-stretch">
      {/* WHY US */}
      <div data-aos="fade-right"  className="bg-white rounded-lg shadow-md p-5 w-full md:w-[300px] flex flex-col h-full">
        <h2 className="text-2xl font-semibold mb-4">WHY US?</h2>
        <p className="text-lg mb-6">what we offer to you</p>
        {[1, 2, 3, 4, 5].map((num, i) => (
          <div key={i} className="flex items-start mb-4">
            <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-4 text-sm text-gray-500">
              {num}
            </div>
            <p className="text-sm text-gray-600">
              Feature number {num} iisque no vaiestatis ericula sapientem cum ei.
            </p>
          </div>
        ))}
      </div>

      {/* Best Doctors */}
      <div   className="bg-white  rounded-lg shadow-md p-5 w-full md:w-[300px] text-center flex flex-col h-full">
        <h3 className="text-2xl font-semibold  ">The best doctors</h3>
        <img
        data-aos="fade-up" 
          src="https://i.ibb.co.com/prvpbq7F/about.png"
          alt="Doctor"
          className="mx-auto h-60 lg:h-72 mb-2  rounded-lg"
        />
        <p className="text-sm text-gray-600">
          Soluta iisque no vaiestatis ericula sapientem cum ei, et usu ignota no vaiestatis ericula sapientem ericula sapientem cum ei, et usu ignota.
        </p>
      </div>

      {/* Last Column with Two Cards */}
      <div className="space-y-3 w-full md:w-[300px] flex flex-col h-full">
        <div data-aos="fade-left" className="bg-white rounded-lg shadow-md p-8 flex-1">
          <h3 className="text-2xl font-semibold  mb-2">Flexible plans</h3>
          <p className="text-sm text-gray-600">
            Soluta iisque no vaiestatis iisque no vaiestatis ericula sapientem ericula sapientem cum ei, et usu ignota cetero.
          </p>
        </div>

        <div data-aos="fade-down"  className="rounded-lg shadow-md p-8 flex-1 bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
          <h3 className="text-xl font-semibold mb-4">BEST FOR YOU</h3>
          <p className="mb-6">
            Soluta iisque no vaiestatis ericula sapientem cum ei, et usu ignota cetero.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-blue-100 transition">
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </div>
    </div>

   
  );
};

export default BestDoctor;
