import React, { useState } from "react";

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

  const doctors =
  [
    {
      "name": "Dr. Richard James",
      "degree": "MBBS",
      "specialty": "General Physician",
      "experience": "4 Years",
      "about": "Focuses on preventive medicine and routine checkups.",
      "appointment_fee": 50,
      "img": "https://i.ibb.co.com/QvSYkx29/doc1.png"
    },
    {
      "name": "Dr. Salma Kabir",
      "degree": "MBBS, BCS (Health)",
      "specialty": "General Physician",
      "experience": "6 Years",
      "about": "Experienced in treating general health issues and infections.",
      "appointment_fee": 55,
      "img": "https://i.ibb.co.com/LDy60J4y/doc2.png"
    },
    {
      "name": "Dr. Mahira Sultana",
      "degree": "MBBS, DGO",
      "specialty": "Gynecologist",
      "experience": "8 Years",
      "about": "Women's reproductive health and maternity care specialist.",
      "appointment_fee": 65,
      "img": "https://i.ibb.co.com/SGyHv97/doc15.png"
    },
    {
      "name": "Dr. Nabila Khan",
      "degree": "MBBS, FCPS (Gynecology)",
      "specialty": "Gynecologist",
      "experience": "7 Years",
      "about": "Expert in infertility treatment and high-risk pregnancies.",
      "appointment_fee": 70,
      "img": "https://i.ibb.co.com/SwNCLcDz/doc3.png"
    },
    {
      "name": "Dr. Anika Rahman",
      "degree": "MBBS, MD (Dermatology)",
      "specialty": "Dermatologist",
      "experience": "5 Years",
      "about": "Specialist in skin diseases and cosmetic dermatology.",
      "appointment_fee": 60,
      "img": "https://i.ibb.co.com/0RZzKRFV/doc5.png"
    },
    {
      "name": "Dr. Farid Uddin",
      "degree": "MBBS, FCPS (Skin & VD)",
      "specialty": "Dermatologist",
      "experience": "6 Years",
      "about": "Treats eczema, acne, and fungal infections effectively.",
      "appointment_fee": 58,
      "img": "https://i.ibb.co.com/6J8c37P4/doc4.png"
    },
    {
      "name": "Dr. Farzana Chowdhury",
      "degree": "MBBS, MD (Pediatrics)",
      "specialty": "Pediatrician",
      "experience": "6 Years",
      "about": "Specialist in newborn and child health.",
      "appointment_fee": 60,
      "img": "https://i.ibb.co.com/C5h6VmXJ/doc6.png"
    },
    {
      "name": "Dr. Asif Noor",
      "degree": "MBBS, FCPS (Pediatrics)",
      "specialty": "Pediatrician",
      "experience": "5 Years",
      "about": "Provides vaccines and treats childhood diseases.",
      "appointment_fee": 55,
      "img": "https://i.ibb.co.com/xqzv7LN4/doc7.png"
    },
    {
      "name": "Dr. Shaila Nasrin",
      "degree": "MBBS, FCPS (Neurology)",
      "specialty": "Neurologist",
      "experience": "7 Years",
      "about": "Expert in epilepsy, stroke, and nervous system disorders.",
      "appointment_fee": 80,
      "img": "https://i.ibb.co.com/k6vygFZM/doc9.png"
    },
    {
      "name": "Dr. Rezaul Karim",
      "degree": "MBBS, MD (Neurology)",
      "specialty": "Neurologist",
      "experience": "9 Years",
      "about": "Focuses on migraines, seizures, and brain health.",
      "appointment_fee": 85,
      "img": "https://i.ibb.co.com/LDCY8QNg/doc8.png"
    },
    {
      "name": "Dr. Sumaiya Hossain",
      "degree": "MBBS, MD (Gastroenterology)",
      "specialty": "Gastroenterologist",
      "experience": "6 Years",
      "about": "Expert in liver, stomach, and digestive tract issues.",
      "appointment_fee": 75,
      "img": "https://i.ibb.co.com/0pRmv9k0/doc11.png"
    },
    {
      "name": "Dr. Tanvir Hasan",
      "degree": "MBBS, FCPS (Gastroenterology)",
      "specialty": "Gastroenterologist",
      "experience": "8 Years",
      "about": "Treats ulcers, IBS, and chronic liver disease.",
      "appointment_fee": 78,
      "img": "https://i.ibb.co.com/0Rqw9j2q/doc10.png"
    },
    {
      "name": "Dr. Tasnim Akter",
      "degree": "MBBS, DCH",
      "specialty": "Pediatrician",
      "experience": "4 Years",
      "about": "Takes care of child nutrition and common illnesses.",
      "appointment_fee": 50,
      "img": "https://i.ibb.co.com/qtfnX3p/doc13.png"
    },
    {
      "name": "Dr. Rafiq Siddique",
      "degree": "MBBS",
      "specialty": "General Physician",
      "experience": "3 Years",
      "about": "Handles general illness and health advice.",
      "appointment_fee": 45,
      "img": "https://i.ibb.co.com/227V7nz/doc12.png"
    },
    {
      "name": "Dr. Lubna Nahar",
      "degree": "MBBS, MS (Gynecology)",
      "specialty": "Gynecologist",
      "experience": "10 Years",
      "about": "Specialist in reproductive and menstrual issues.",
      "appointment_fee": 72,
      "img": "https://i.ibb.co.com/SGyHv97/doc15.png"
    },
    {
      "name": "Dr. Asif Noor",
      "degree": "MBBS, FCPS (Pediatrics)",
      "specialty": "Pediatricians",
      "experience": "5 Years",
      "about": "Provides vaccines and treats childhood diseases.",
      "appointment_fee": 55,
      "img": "https://i.ibb.co.com/gM1kV4dS/doc14.png"
    }
    
  ]
  
  const filteredDoctors =
    selectedCategory === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialty === selectedCategory);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Category Buttons */}
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      <div className="lg:col-span-2">
          <div className="bg-white p-3 rounded-lg  space-y-2">
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

      {/* Doctor Cards */}
      <div className="lg:col-span-9">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctors.map((doctor, index) => (
          <div
            key={index}
            className=" rounded-xl duration-300 hover:-translate-y-2  p-2 border  border-solid border-[#cbbbd2] hover:shadow-lg transition"
          >
           <div className="w-full  rounded-lg overflow-hidden">
  <img
    src={doctor.img}
    alt={doctor.name}
    className="w-60 mx-auto rounded-2xl  h-full object-cover"
  />
</div>
               <p className="text-sm text-green-600">
               Available
               </p>
            <h3 className="text-xl font-semibold ">{doctor.name}</h3>
            <p className="text-sm"><strong></strong> {doctor.specialty}</p>
          </div>
        ))}
      </div>
    
      </div>
      </div>
     
    </div>
  );
};

export default DoctorList;
