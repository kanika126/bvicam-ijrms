import React, { useState } from "react";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType === "Admin" && secretKey !== "Admin") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md">
      <div className=" w-full max-w-md" style={{ width: "1000px" }}> {/* Increased width to full width on small screens, limited to maximum width on larger screens */}
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold mb-3 text-center">Sign Up</h3>
          <div className="mb-3">
            Register As
            <label className="block">
              <input
                type="radio"
                name="UserType"
                value="User"
                onChange={(e) => setUserType(e.target.value)}
                className="mr-2"
              />
              User
            </label>
            <label className="block">
              <input
                type="radio"
                name="UserType"
                value="Admin"
                onChange={(e) => setUserType(e.target.value)}
                className="mr-2"
              />
              Admin
            </label>
          </div>
          {userType === "Admin" && (
            <div className="mb-3">
              <label className="block">Secret Key</label>
              <input
                type="text"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
                className="form-input mt-1 w-full"
              />
            </div>
          )}

          <div className="mb-3">
            <label className="block">First name</label>
            <input
              type="text"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              className="form-input mt-1 w-full"
            />
          </div>

          <div className="mb-3">
            <label className="block">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
              className="form-input mt-1 w-full"
            />
          </div>

          <div className="mb-3">
            <label className="block">Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-input mt-1 w-full"
            />
          </div>

          <div className="mb-3">
            <label className="block">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-input mt-1 w-full"
            />
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-lg"
            >
              Sign Up
            </button>
          </div>
          <p className="text-right">
            Already registered? <a href="/sign-in" className="text-blue-500">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
