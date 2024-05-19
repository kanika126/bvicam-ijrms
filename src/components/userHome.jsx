import React from "react";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div>
          <h1 className="text-2xl font-bold mb-2">Name: {userData.fname}</h1>
          <h1 className="text-2xl font-bold mb-2">Email: {userData.email}</h1>
          <br />
          <button
            onClick={logOut}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
