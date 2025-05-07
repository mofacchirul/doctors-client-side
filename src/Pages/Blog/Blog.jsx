import React from "react";

const blogs = [
  {
    id: 1,
    title: "Diet Plan for Diabetic Patients",
    description: "Learn what to eat, what to avoid, and how to manage your routine if you have diabetes.",
    author: "Dr. Rahman",
    date: "May 6, 2025",
    image: "https://i.ibb.co.com/0Rqw9j2q/doc10.png",
  },
  {
    id: 2,
    title: "Dengue Fever: Symptoms and Prevention",
    description: "How to keep your home safe during the rainy season and when to see a doctor.",
    author: "Dr. Ayesha",
    date: "May 3, 2025",
    image: "https://i.ibb.co.com/SGyHv97/doc15.png",
  },
  {
    id: 3,
    title: "Home Remedies for Cold",
    description: "Easy and effective tips to stay healthy during winter and avoid common illnesses.",
    author: "Dr. Karim",
    date: "April 28, 2025",
    image: "https://i.ibb.co.com/6J8c37P4/doc4.png",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
     <div className="w-1/2 mx-auto text-center ">
     <h1 className="text-3xl font-bold text-center mb-6">Health Blogs</h1>
      <p>
      Cold and flu are common during winter, but with home remedies like ginger-lemon tea, steam inhalation, and staying hydrated, you can stay healthy.
      </p>
     </div>
      <div className="grid py-5 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white w-[330px] mx-auto shadow-lg duration-300 hover:-translate-y-2 p-1  hover:shadow-lg transition rounded-lg overflow-hidden flex flex-col h-full">
            <img src={blog.image} alt={blog.title} className="w-60 mx-auto rounded-2xl h-full object-cover" />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Author: {blog.author} | Published: {blog.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
