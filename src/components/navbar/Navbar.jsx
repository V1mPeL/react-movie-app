import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="w-screen flex justify-center mb-[50px]">
      <div className="px-5 flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
        <div>
          <Link to="/" className="text-3xl font-bold">
            MOVIEBASE
          </Link>
        </div>
        <div className="hidden md:flex gap-[20px] text-xl">
          <Link to="/" className="hover:text-blue-700 transition duration-300">
            Home
          </Link>
          <Link
            to="/search"
            className="hover:text-blue-700 transition duration-300"
          >
            Search
          </Link>
        </div>

        {/* Hamburger */}
        <div onClick={handleNav} className="md:hidden z-10">
          {nav ? (
            <AiOutlineClose className="text-white" size={20} />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>

        {/* Mobile menu dropdown */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "absolute text-white left-0 top-0 w-full bg-[#1E1E1E] px-4 py-7 flex flex-col"
              : "absolute left-[-200%]"
          }
        >
          <div className="w-screen h-1/5 flex flex-col items-center gap-[50px]">
            <h1>BEACHES.</h1>
            <Link to="/" className="border-b">
              Home
            </Link>
            <Link to="/search" className="border-b">
              Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
