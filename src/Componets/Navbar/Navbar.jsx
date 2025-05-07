import React, { useContext } from "react";
import logo from "../../assets/logo (1).png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/Auth";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const Links = (
    <>
      <li>
        <NavLink to="/" className="hover:bg-transparent  hover:text-inherit">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alldoctors"
          className="hover:bg-transparent hover:text-inherit"
        >
          All Doctors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="hover:bg-transparent hover:text-inherit"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="hover:bg-transparent hover:text-inherit">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contack"
          className="hover:bg-transparent hover:text-inherit"
        >
          Contack Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-10 backdrop-blur-sm bg-white/10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <img className="hidden lg:block w-24" src={logo} />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      <img className="lg:hidden w-24" src={logo} />
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center justify-center">
            <div>
              <button
                className=""
                popoverTarget="popover-1"
                style={
                  { anchorName: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <img
                  className="w-12  h-12 rounded-full mr-2"
                  src={user?.photoURL}
                  alt=""
                />
              </button>

              <ul
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto"
                id="popover-1"
                style={
                  { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <Link to={"/userprofile"}>
                  <li>My Profile</li>
                </Link>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <button
              onClick={logOut}
              className="btn bg-red-700 text-white   rounded-2xl"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <Link to={"/createaccount"}>
              <button className="btn   mt-4 rounded-2xl ">
                Create Account
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
