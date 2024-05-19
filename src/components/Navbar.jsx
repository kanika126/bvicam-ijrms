import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="http://bvicam.in/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://www.bvicam.ac.in/indiacom/images/BVICAM-Logo.png" className="h-20" alt="Logo" />
          </a>
          <span className="self-center text-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
            International Journal of Research in<br />
            Multidisciplinary Studies (IJRMS)<br />
            (An official Journal of BVICAM, New Delhi)
          </span>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="http://bvicam.in/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://bvicam.ac.in/ijrms/images/imp%20logo.png" className="h-20" alt="Logo" />
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-cyan-600 dark:bg-gray-700 size-full">
        <div className="max-w-screen-xl px-4 py-3 m-px ">
          <div className="flex items-center  text-center">
            <ul className="flex justify-center flex-row font-medium mt-0 mx-32 space-x-8 rtl:space-x-reverse text-sm ">
              <li>
                <a href="/" className="text-white dark:text-white hover:underline" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/callforpaper" className="text-white dark:text-white hover:underline">Call for Papers</a>
              </li>
              <li>
                <a href="/editorial" className="text-white dark:text-white hover:underline">Editorial Board</a>
              </li>
              <li>
                <a href="/aim" className="text-white dark:text-white hover:underline">Aim & Scope</a>
              </li>
              <li>
                <a href="/currentissue" className="text-white dark:text-white hover:underline">Current Issue</a>
              </li>
              <li>
                <a href="/archive" className="text-white dark:text-white hover:underline">Archive</a>
              </li>
              <li className="relative" onBlur={() => setIsMenuOpen(false)}>
      <a href="/p" className="text-white dark:text-white hover:underline" onClick={toggleDropdown}>
        Process
      </a>
      <ul className={`absolute ${isMenuOpen ? '' : 'hidden'} mt-2 w-48 bg-white rounded-lg shadow-lg`} id="dropdown-menu">
                    <li><a href="/p" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Plagiarism Policy</a></li>
                    <li><a href="/p" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Ethical Complaince for Authors</a></li>
                    <li><a href="/p" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Copyright & Ownership</a></li>
                    <li><a href="/p" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Download</a></li>
                </ul>
              </li>
              <li>
                <a href="/contactus" className="text-white dark:text-white hover:underline">Contact Us</a>
              </li>
              <li>
                <a href="/feedback" className="text-white dark:text-white hover:underline">Feedback</a>
              </li>
              <li>
                <a href="/sign-in" className="text-white dark:text-white hover:underline">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
