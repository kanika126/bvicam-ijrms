
import React from 'react';

const Editorial = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full md:w-11/12 bg-white rounded-b-lg shadow-lg p-6 mt-4 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-center  py-4">Aim </h2>
        <p className="text-center mt-2 px-4 pb-4"></p>
        <div className="flex justify-between">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden mr-4 w-1/3">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Editor-in-Chief</h3>
          <p className="text-gray-700">Prof. M. N. Hoda<br/>Director, BVICAM, New Delhi (INDIA)<br/>E-Mail: mca@bvicam.ac.in</p>
        </div>
      </div>
      
      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden mr-4 w-1/3">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Editors</h3>
          <p className="text-gray-700">Prof. A. K. Saini<br/>USMS, Guru Gobind Singh Indraprastha University, New Delhi (INDIA)<br/>E-Mail: draksaini@ipu.ac.in</p>
        </div>
      </div>
      
      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-1/3">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Associate Editors</h3>
          <p className="text-gray-700">Prof. Aasim Zafar<br/>Professor, Dept. of Computer Science, Aligarh Muslim University, Aligarh (INDIA)<br/>E-Mail ID: azafar.cs@amu.ac.in</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Editorial;
