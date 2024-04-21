import React from 'react';

const Navbar = () => {
  return (
    <>

<nav class=" border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="http://bvicam.in/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://www.bvicam.ac.in/indiacom/images/BVICAM-Logo.png" class="h-20" alt="Flowbite Logo" />
            
        </a>
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">International Journal of Research in<br></br>
            Multidisciplinary Studies (IJRMS)<br></br>
            (An official Journal of BVICAM, New Delhi)</span>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
        <a href="http://bvicam.in/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://bvicam.ac.in/ijrms/images/imp%20logo.png" class="h-20" alt="Flowbite Logo" />
            </a>
        </div>
    </div>
</nav>
<nav class="bg-gray-400 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto ">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#" class="text-black dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="text-black dark:text-white hover:underline">Company</a>
                </li>
                <li>
                    <a href="#" class="text-black dark:text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" class="text-black dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</>
  );
};

export default Navbar;