import React from "react";
import Publicaxios from "../../Axios/PublicAxios/PublicAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
const BlogPage = () => {
const axios=Publicaxios()
   const { data: blogs, } = useQuery({
         queryKey: ['blog'],
         queryFn: async () => {
             const res = await axios.get('/blog');
          
             return res.data; 
         }
     });






  return (
    <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
    <Helmet>
                
                <title>Doctor | Blog</title>
            
            </Helmet>
     <div className="lg:w-1/2 w-2/3  mx-auto text-center ">
     <h1 className="text-3xl font-bold text-center mb-6">Health Blogs</h1>
      <p>
      Cold and flu are common during winter, but with home remedies like ginger-lemon tea, steam inhalation, and staying hydrated, you can stay healthy.
      </p>
     </div>
      <div className="grid py-8 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog) => (
          <div key={blog._id} className="bg-white w-[330px] mx-auto shadow-lg duration-300 hover:-translate-y-2 p-1  hover:shadow-lg transition rounded-lg overflow-hidden flex flex-col h-full">
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
