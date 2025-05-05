import React from 'react';
import about from "../../../assets/about-img.jpg"
import img1 from "../../../assets/service-thumbnail01.png"
import img2 from "../../../assets/service-thumbnail02.png"
import img3 from "../../../assets/service-thumbnail03.png"
const ClinicIntro = () => {
  return (
    <div className=" max-w-5xl mx-auto py-8 lg:py-12 px-4 ">
      {/* Top service icons row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <div className="flex items-center  space-x-4">
          <img src={img1} alt="service" className="w-10 h-10" />
          <div>
            <h4 className="font-semibold text-gray-800">Specialised Service</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={img2} alt="24/7" className="w-10 h-10" />
          <div>
            <h4 className="font-semibold text-gray-800">24/7 Advanced Care</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={img3} alt="result" className="w-10 h-10" />
          <div>
            <h4 className="font-semibold text-gray-800">Get Result Online</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>

      {/* Main Section with Video & Text */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Video/Image Section */}
        <div className="relative">
          <img src={about} alt="Doctor" className="rounded-lg" />
          
        </div>

        {/* Right Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Short Story About <br /> Mededin Clinic.
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <p className="text-gray-600 mb-4">
            Sed do eius mod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostru 
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-purple-100 p-4 rounded text-center">
              <h3 className="text-xl font-bold text-purple-700">1000+</h3>
              <p className="text-sm text-gray-600">Happy Patients</p>
            </div>
            <div className="bg-green-100 p-4 rounded text-center">
              <h3 className="text-xl font-bold text-green-700">215+</h3>
              <p className="text-sm text-gray-600">Expert Doctors</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded text-center">
              <h3 className="text-xl font-bold text-yellow-700">315+</h3>
              <p className="text-sm text-gray-600">Hospital Rooms</p>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center">
              <h3 className="text-xl font-bold text-gray-700">106+</h3>
              <p className="text-sm text-gray-600">Award Winner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicIntro;
