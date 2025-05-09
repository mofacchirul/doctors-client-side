import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Brand */}
          <div>
       <img src="https://i.ibb.co.com/TztKvD0/logo-1.png" alt="" />
            <p className=" text-sm">
              Crafting digital experiences with passion and precision.
            </p>
            <div className='py-3'>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
              <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
            </div>
          </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
            <li>
      <NavLink to='/' className="hover:bg-transparent  hover:text-inherit">Home</NavLink>
    </li>
    <li>
      <NavLink to='/alldoctors' className="hover:bg-transparent hover:text-inherit">All Doctors</NavLink>
    </li>
    <li>
      <NavLink to='/' className="hover:bg-transparent hover:text-inherit">About</NavLink>
    </li>
    <li>
      <NavLink to='/' className="hover:bg-transparent hover:text-inherit">Blog</NavLink>
    </li>
    <li>
      <NavLink to='/' className="hover:bg-transparent hover:text-inherit">Contack Us</NavLink>
    </li>
    </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Hours</h4>
            <ul className='text-gray-500'>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day} - </span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 transition-colors px-3 py-2 text-white font-bold rounded text-sm"
              >
                Subscribe
              </button>
              <img src="https://i.ibb.co.com/nZNTSwb/Payment-img.png" className='h-20' alt="" />
            </form>
          </div>

          {/* Social Links */}
        
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
