import React, { useState } from "react";
import { toast } from "react-toastify";
import Securecaxios from "../../../Axios/SecureAxios/SecureAxios";
const Img_key = import.meta.env.VITE_IMG_KEY;
const image_hosting = `https://api.imgbb.com/1/upload?key=${Img_key}`;
const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    date: "",
  });
const axios=Securecaxios()
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
  
      return;
    }
  
    const form = new FormData();
    form.append("image", imageFile);
  
  
      const res = await fetch(image_hosting, {
        method: "POST",
        body: form,
      });
  
      const data = await res.json();
      const imageUrl = data.data.url;
  
      const blogData = {
        ...formData,
        image: imageUrl,
      };
     axios.post('/blog',blogData)
      toast.success("Blog submitted successfully!");
  
      e.target.reset();
  
   
  };
  

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            rows="4"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input
            type="text"
            name="author"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            name="date"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded"
            onChange={handleImageChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
