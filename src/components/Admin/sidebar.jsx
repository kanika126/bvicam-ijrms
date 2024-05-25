import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
     //logout
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="bg-cyan-600 text-white h-screen w-1/6 p-4 flex flex-col justify-between">
      <div>
        <Link to="/dashboard/paperpublish" className="block py-2 px-4 mb-2 rounded hover:bg-cyan-700">Paper Publish</Link>
        <Link to="/dashboard/paperDetails" className="block py-2 px-4 mb-2 rounded hover:bg-cyan-700">View Papers</Link>
        <Link to="/dashboard/userDetails" className="block py-2 px-4 mb-2 rounded hover:bg-cyan-700">Users</Link>
        <Link to="/dashboard/feedbackDetails" className="block py-2 px-4 mb-2 rounded hover:bg-cyan-700">View Feedback</Link>
        
      </div>
      <div>
        
        <button
          onClick={logOut}
          className="btn btn-primary block py-2 px-4 mt-4 rounded hover:bg-cyan-700"
          style={{ marginTop: 10 }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
