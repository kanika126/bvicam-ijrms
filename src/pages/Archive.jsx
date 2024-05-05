import React from 'react';

const Archive = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full md:w-11/12 bg-white rounded-b-lg shadow-lg p-6 mt-4 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-center  py-4">Archive </h2>
        <p className="text-center mt-2 px-4 pb-4"></p>
        <p className="text-lg text-center">
        Year 2023     :    [Vol. 2 No. 1] [Vol. 2 No.2]
        <br></br><br></br>
        Year 2022     :    [Vol. 1 No. 1] [Vol. 1 No.2]
        </p>
        <br></br>
        <br></br>
        <img src="https://bvicam.ac.in/ijrms/images/IJRMSPoster.jpg" alt="IJRMS" className="block mx-auto max-h-64"></img>
      </div>
    </div>
  );
};

export default Archive;
