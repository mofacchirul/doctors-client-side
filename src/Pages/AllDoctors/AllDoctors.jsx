import React, { useState } from "react";
import Coursestan from "./UseTanStack";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const DoctorList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist"
  ];

  const [doctors, loading] = Coursestan();

  if (loading || !doctors) {
    return <div className="text-center text-lg font-semibold py-10">Loading...</div>;
  }

  const filteredDoctors =
    selectedCategory === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialty === selectedCategory);

  return (
    <div className="p-4 max-w-[1350px] mx-auto">
      <Helmet>
                      
                      <title>Doctor | All Doctor</title>
                  
                  </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-2">
          <div className="bg-white p-3 rounded-lg space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-lg border transition font-medium ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-9">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                className="rounded-xl duration-300 hover:-translate-y-2 p-2 border border-solid border-[#cbbbd2] hover:shadow-lg transition"
              >
                <div className="w-full rounded-lg overflow-hidden">
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-60 mx-auto rounded-2xl h-full object-cover"
                  />
                </div>
                <p className="text-sm text-blue-400">Available</p>
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
<div className="flex justify-between items-center">
<p className="text-sm">{doctor.specialty}</p>
<Link to={`/all_doctors_detels/${doctor._id}`}>
<p className="text-blue-400 flex items-center justify-center text-sm">
  ReadMore.....
<GoArrowRight className="mt-2 text-xl" /> 
</p>
</Link>
</div>
         </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
