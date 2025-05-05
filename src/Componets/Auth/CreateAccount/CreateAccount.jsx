
import {useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import singup from '../lottie/creatAccout.json'
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import Lottie from "lottie-react";
import Socail from "../Social/Socail";
import { AuthContext } from "../../Provider/Auth";
import { toast } from "react-toastify";

const Createaccount = () => {
  const [view, setView] = useState(true);
  const [views, setViews] = useState(true);
  const {createUser}=useContext(AuthContext);
const naviget = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!validatePassword(formData.password)) {
        setError("Password must contain at least 1 uppercase, 1 lowercase, 1 number, and be 6+ characters long.");
        return;
      }
      console.log(formData);
      
      createUser(formData.email,formData.password)
      .then((result) =>{
        console.log(result.user.email);
        
       toast.success(`${result.user.email} Logged Successfully`)
       naviget('/')
      }
     
      
      )
   
   
    // Backend logic goes here
  };

  return (
    <div className="flex justify-center lg:flex-row-reverse items-center  py-8 lg:py-12 ">
      <div className="w-96 hidden lg:block">
        <Lottie animationData={singup} />
      </div>
      <div className=" p-5 rounded-2xl shadow-2xl bg-white   w-96">
  
        <h3 className="text-2xl  pb-4  font-bold">
              Create your account
            </h3>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
     
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className="block  font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block  font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          {/* Password Field */}
          <div className="relative">
            <label className="block  font-semibold">Password</label>
            <input
              type={view ? "password" : "text"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-[70%] transform -translate-y-1/2  text-lg"
              onClick={() => setView(!view)}
            >
              {view ? <FaRegEyeSlash /> : <FaEye />}
            </button>
          </div>
          {/* Confirm Password Field */}
          <div className="relative">
            <label className="block  font-semibold">
              Confirm Password
            </label>
            <input
              type={views ? "password" : "text"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword} // Correct value binding
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-[70%] transform -translate-y-1/2  text-lg"
              onClick={() => setViews(!views)}
            >
              {views ? <FaRegEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 font-bold    transition"
          >
            Sign Up
          </button>
          <div className="divider">
OR
        </div>
          <div className="mt-4">
            <Socail></Socail>
        </div>
    
          <div className="text-center">
           
            <p className=" text-end">
              Have an account?{" "}
              <Link to="/login" className="underline text-blue-800">
                Log in now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createaccount;