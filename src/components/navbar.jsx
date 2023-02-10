import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="h-[80px] w-screen z-10 fixed drop-shadow-lg bg-zinc-200">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <li className="cursor-pointer">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="platform" smooth={true} offset={-100} duration={500}>
                Platform
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="border-none bg-transparent text-black mr-4">
            Sing In
          </button>
          <button className="px-8 py-3">Sing Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <Bars3Icon className=" w-8 " />
          ) : (
            <XMarkIcon className=" w-8 " />
          )}
        </div>
      </div>

      <ul className={!nav ? "hidden" : " bg-zinc-200 w-full px-8 absolute"}>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platform"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platform
          </Link>
        </li>
        <li className="cursor-pointer border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sing In
          </button>
          <button className="px-8 py-3">Sing Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
