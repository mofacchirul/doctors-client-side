import React, { useState } from "react";
import { toast } from "react-toastify";
import Securecaxios from "../../../Axios/SecureAxios/SecureAxios";

const Img_key = import.meta.env.VITE_IMG_KEY;
const image_hosting = `https://api.imgbb.com/1/upload?key=${Img_key}`;

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    specialty: "",
    experience: "",
    about: "",
    appointment_fee: "",
  });
   const axios =Securecaxios()
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please upload a doctor image.");
      return;
    }

    // Upload image to imgbb
    const form = new FormData();
    form.append("image", imageFile);

    try {
      const res = await fetch(image_hosting, {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error("Image upload failed");
      }

      const imageUrl = data.data.url;

      const doctorData = {
        ...formData,
        appointment_fee: Number(formData.appointment_fee),
        img: imageUrl,
      };

      console.log("Submitted Doctor Data:", doctorData);

      // Backend API call করলে এখানে axios.post দিয়ে পাঠাও
   axios.post('/alldoctor',doctorData)
      toast.success("Doctor added successfully!");

      // Reset form
      e.target.reset();
    } catch (error) {
      console.error("Image upload failed", error);
      alert("Image upload failed!");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Doctor</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">

       <div className="grid grid-cols-2 gap-2">
         {/* Name */}
         <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Degree */}
        <div>
          <label className="block mb-1 font-medium">Degree</label>
          <input
            type="text"
            name="degree"
            className="w-full border p-2 rounded"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </div>

        {/* Specialty */}
        <div>
          <label className="block mb-1 font-medium">Specialty</label>
          <input
            type="text"
            name="specialty"
            className="w-full border p-2 rounded"
            value={formData.specialty}
            onChange={handleChange}
            required
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block mb-1 font-medium">Experience</label>
          <input
            type="text"
            name="experience"
            className="w-full border p-2 rounded"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
         {/* Appointment Fee */}
         <div>
          <label className="block mb-1 font-medium">Appointment Fee ($)</label>
          <input
            type="number"
            name="appointment_fee"
            className="w-full border p-2 rounded"
            value={formData.appointment_fee}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Doctor Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded"
            onChange={handleImageChange}
            required
          />
        </div>
       </div>

        {/* About */}
        <div>
          <label className="block mb-1 font-medium">About</label>
          <textarea
            name="about"
            className="w-full border p-2 rounded"
            rows="3"
            value={formData.about}
            onChange={handleChange}
            required
          ></textarea>
        </div>

       

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
