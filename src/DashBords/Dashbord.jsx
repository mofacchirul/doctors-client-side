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
    <div className="lg:flex items-center ">
      <>
        <li className="">
          <NavLink
            to="/dashbord/adminhome"
            className={({ isActive }) =>
              isActive ? "bg-teal-900 text-white" : ""
            }
          >
            Admin Home
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/dashbord/coursePost"
            className={({ isActive }) =>
              isActive ? "bg-teal-900 text-white" : ""
            }
          >
            CoursePost
          </NavLink>
        </li>

        <li className="">
          <NavLink
            to="/dashbord/admin_blog"
            className={({ isActive }) =>
              isActive ? "bg-teal-900 text-white" : ""
            }
          >
            Blog Management
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/dashbord/manage_applications"
            className={({ isActive }) =>
              isActive ? "bg-teal-900 text-white" : ""
            }
          >
            Manage Applications
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/dashbord/announcements"
            className={({ isActive }) =>
              isActive ? "bg-teal-900 text-white" : ""
            }
          >
            Announcements
          </NavLink>
        </li>

        <li className="">
          <NavLink
            to="/dashbord/all_user"
            className={({ isActive }) =>
              isActive ? "bg-teal-900 text-white" : ""
            }
          >
            ALL_User
          </NavLink>
        </li>
      </>

      <div className="divider"></div>
    </div>
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
                  className="px-4 mt-3 py-2 bg-amber-500 text-white rounded-tr-2xl rounded-bl-2xl hover:bg-teal-950"
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