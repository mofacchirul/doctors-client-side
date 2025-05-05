import React, {  useContext, useState,  } from 'react';
import Lottie from 'lottie-react';
import animationData from '../lottie/login.json';

import { FaEye, FaRegEyeSlash } from 'react-icons/fa';

import { Link, useNavigate, } from 'react-router-dom';
import Socail from '../Social/Socail';
import { AuthContext } from '../../Provider/Auth';
import { toast } from 'react-toastify';


const Login = () => {


  // Manage email & password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [view, setView] = useState(true);
  const {signIn}=useContext(AuthContext);
const naviget = useNavigate()


  const HandleLogin = (e) => {
    e.preventDefault();
    
    signIn(email, password)
    .then(result => {
             toast.success(`${result.user.email} Logged Successfully`)
      naviget('/')
        });
    
  };

  

  

  return (
    <div className="flex flex-col  lg:flex-row-reverse items-center justify-center py-8 lg:py-12  ">
      {/* Lottie Animation */}
      <div className="w-full hidden lg:block lg:w-1/2 flex justify-center">
        <Lottie animationData={animationData} />
      </div>

      {/* Login Form */}
      <div className="card w-full max-w-sm shrink-0 rounded-2xl shadow-2xl p-5">
      <h3 className='text-xl text-center  font-bold'>Create your Login</h3>

        {/* Admin Buttons for Autofill */}
     

        <form  onSubmit={HandleLogin}>
          {/* Email Field */}
          <div className="full">
            <label className="label">
              <span className=" text-black font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={email} // Autofill email
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password Field */}
          <div className=" w-full relative">
            <label className="label">
              <span className=" text-black font-semibold">Password</span>
            </label>
            <input
              type={view ? "password" : "text"}
              name="password"
              value={password} // Autofill password
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              className='absolute mt-12 ml-[15rem]'
              onClick={() => setView(!view)}
            >
              {view ? <FaRegEyeSlash /> : <FaEye />}
            </button>
          </div>

         
          

          {/* Login Button */}
          <div className="form-control mt-4">
            <button className="btn btn-block bg-blue-600 text-white font-bold ">Login</button>
          </div>
        </form>
        <div className="divider ">OR</div>
        <Socail />
        <div className='text-end mt-2'>

          <p>
            Have an account? <Link to="/createaccount" className='underline  text-blue-800'>Register now</Link>
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default Login;