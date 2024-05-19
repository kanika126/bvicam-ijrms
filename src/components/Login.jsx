import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./dashboard/userDetails";
        }
      });
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md">
    
      <div style={{ width: "400px" }}>
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold mb-3 text-center">Sign In</h3>

          <div className="mb-6">
            <label className="block text-gray-600">Email address</label>
            <input
              type="email"
              className="form-input mt-1 block w-full"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="form-input mt-1 block w-full"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                id="customCheck1"
              />
              <label
                htmlFor="customCheck1"
                className="ml-2 block text-gray-700"
              >
                Remember me
              </label>
            </div>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
          <p className="text-right">
            <a href="/sign-up" className="text-blue-500">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
    
  );
}
