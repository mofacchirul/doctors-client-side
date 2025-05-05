import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div
  className="hero bg-fixed min-h-1/2"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/W4Q9w308/download-2.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <section className="py-8 lg:py-12 px-4 md:px-12">
           <div className=" max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
             {/* Left Text Section */}
             <div className="w-full md:w-1/2 space-y-4 lg:space-y-6">

               <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
               We Believe in a Healthier You
               </h1>
               <p className="text-white">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lacus ex. 
                 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos ipsum dolor sit amet.
               </p>
               <div className="flex items-center space-x-4">
                 <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
                 Get A Consultant
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
               <div className="relative z-10">
                 <img
                   src="https://i.ibb.co.com/kVphP6W8/download.jpg" // Replace with your image path
                   alt="Doctor"
                   className="w-full rounded-2xl max-w-sm mx-auto"
                 />
               </div>
               {/* Social Icons */}
              
 
             </div>
           </div>
         </section>
</div>
        </div>
    );
};

export default HeroSection;