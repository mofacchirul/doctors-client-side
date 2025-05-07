import React from "react";
// import doctorImage from "../assets/d36f3b7d-4144-4929-81ef-673beae2c4d5.png"; // adjust path if needed

const WelcomeSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  p-6 ">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img src="https://i.ibb.co.com/XfVpWhFh/about-image.png" alt="Doctors smiling" className="rounded-lg w-72 lg:w-96 mx-auto object-cover" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-gray-800">
        <p className="mb-4 ">
          Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
          At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments
          and managing their health records.
        </p>

        <p className="mb-4 ">
          Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our
          platform, integrating the latest advancements to improve user experience and deliver superior service.
          Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you
          every step of the way.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Our Vision</h3>
        <p className="">
          Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the
          gap between patients and healthcare providers, making it easier for you to access the care you need, when
          you need it.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
