import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import Riya from "../assets/Riya.png";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-gray-400 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex">
          <img src={Riya} className="h-20 rounded-full border-4 border-yellow-500" />
          <div className="text-4xl font-serif font-extrabold pt-5 text-white p-6">My Portfolio</div>
        </div>

        <div className="hidden md:flex gap-6">
          <a href="#" className="text-2xl hover:text-blue-800 font-extrabold text-white font-serif">
            Home
          </a>
          <a href="#" className="text-2xl hover:text-blue-800 font-extrabold text-white font-serif">
            About
          </a>
          <a href="src/component/Contact.jsx" className="text-2xl font-extrabold text-white hover:text-blue-800 font-serif">
            Contact Us
          </a>
          <a href="src/component/Expertise.jsx" className="text-2xl font-extrabold text-white hover:text-blue-800 font-serif">
            Expertise Technologies
          </a>
          <a href="src/component/Project.jsx" className="text-2xl font-extrabold text-white hover:text-blue-800 font-serif">
            Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1l6EWOEC-rQGn2QEMXVOr0_-jxVpwM4GO/view?usp=sharing"
            className="hidden md:flex border-4 border-red-500 px-4 py-1 items-center gap-2 text-white font-extrabold rounded-[5px] hover:text-black transition duration-200"
          >
            Download CV
            <FiDownload />
          </a>
        </div>

        <div className="md:hidden text-4xl" onClick={toggleMenu}>
          {showMenu ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden bg-pink-200 px-4 py-2">
          <a href="#" className="block py-2 hover:text-red-500 font-serif">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-red-500 font-serif">
            About
          </a>
          <a href="src/component/Contact.jsx" className="block py-2 hover:text-red-500 font-serif">
            Contact Us
          </a>
          <a href="src/component/Expertise.jsx" className="block py-2 hover:text-blue-800 font-serif">
            Expertise Technologies
          </a>
          <a href="src/component/Project.jsx" className="block py-2 hover:text-blue-800 font-serif">
            Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1l6EWOEC-rQGn2QEMXVOr0_-jxVpwM4GO/view?usp=sharing"
            className="block border border-red-500 px-4 py-1 mt-4 text-white font-bold rounded-[5px] hover:text-red-300 transition duration-200"
          >
            Download CV <FiDownload />
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
