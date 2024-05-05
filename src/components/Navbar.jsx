import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="http://bvicam.in/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://www.bvicam.ac.in/indiacom/images/BVICAM-Logo.png" className="h-20" alt="Logo" />
          </a>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
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
          <div className="flex items-center">
            <ul className="flex justify-center flex-row font-medium mt-0 mx-32 space-x-8 rtl:space-x-reverse text-sm ">
              <li>
                <a href="/home" className="text-white dark:text-white hover:underline" aria-current="page">Home</a>
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
              <li className="relative">
                <a href="/" className="text-white dark:text-white hover:underline">Process</a>
                <ul className="absolute hidden mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Step 1</a></li>
                    <li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Step 2</a></li>
                    <li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Step 3</a></li>
                </ul>
              </li>
              <li>
                <a href="/download" className="text-white dark:text-white hover:underline">Download</a>
              </li>
              <li>
                <a href="/contactus" className="text-white dark:text-white hover:underline">Contact Us</a>
              </li>
              <li>
                <a href="/feedback" className="text-white dark:text-white hover:underline">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
