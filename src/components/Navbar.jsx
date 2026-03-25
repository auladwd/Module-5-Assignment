import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo.png';
import GitImg from '../assets/Git.png';
import { FaAppStore } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { MdInstallDesktop } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-5 sm:px-10 relative">
      <div className="navbar-start">
        <Link to="/home" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-[40px]" />
          <p className="font-bold text-purple-500 ml-2">HERO.IO</p>
        </Link>
      </div>

      <div className="navbar-center">
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <li>
              <NavLink
                to="/home"
                className="flex items-cente border-1 rounded-lg"
              >
                <IoHomeOutline />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className="flex items-cente border-1 rounded-lg"
              >
                <FaAppStore />
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className="flex items-cente border-1 rounded-lg"
              >
                <MdInstallDesktop />
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <div className="flex items-center bg-purple-500 text-white px-3 py-2 rounded-md">
          <img src={GitImg} alt="Git" className="mr-2" />
          <NavLink to="https://github.com/auladwd" className="font-bold">
            About Us
          </NavLink>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden w-full bg-base-100 absolute top-[64px] left-0 shadow-md z-50">
          <ul className="menu menu-vertical p-2">
            <li>
              <NavLink to="/home" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" onClick={() => setIsOpen(false)}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" onClick={() => setIsOpen(false)}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
