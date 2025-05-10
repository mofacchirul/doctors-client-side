import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Componets/Provider/Auth";
import Footer from "../Componets/Footer/Footer";



const Dashbord = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const HandlesingOut = () => {
    logOut().then(() => {
      navigate("/");
    });
  };
 
  const links = (
    <>
         <li>
           <NavLink to="/dashbord/adminhome" className="hover:bg-transparent  hover:text-inherit">
            Admin Home
           </NavLink>
         </li>
         <li>
           <NavLink
             to="/dashbord/doctorfrom"
             className="hover:bg-transparent hover:text-inherit"
           >
             All Doctors
           </NavLink>
         </li>
         <li>
           <NavLink
             to="/dashbord/blogcard"
             className="hover:bg-transparent hover:text-inherit"
           >
            Blog
           </NavLink>
         </li>
         <li>
           <NavLink to="/dashbord/alluser" className="hover:bg-transparent hover:text-inherit">
             All User
           </NavLink>
         </li>
         <li>
           <NavLink to="/" className="hover:bg-transparent hover:text-inherit">
             Payment History
           </NavLink>
         </li>
      
        
       </>
  );

  return (
    <div className=" bg-base-100">
      <div className="navbar sticky top-0 z-50 backdrop-blur-sm  shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo for Large Screens */}
          <div className="hidden lg:flex">
            <img
              src="https://i.ibb.co.com/j995wbGw/logo-1.png"
              alt="Logo"
              className="w-32"
            />
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Logo for Mobile View */}
        <div className="lg:hidden">
          <img
            src="https://i.ibb.co.com/j995wbGw/logo-1.png"
            alt="Logo"
            className="w-28"
          />
        </div>

        {/* Buttons */}
        <div className="navbar-end space-x-2">
          <details className="dropdown">
            <summary className="btn m-1">Back to Website</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "bg-teal-900 text-white" : ""
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <button
                  className="btn rounded-4xl  mt-3  "
                  onClick={HandlesingOut}
                >
                  Sing Out
                </button>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Dashbord;