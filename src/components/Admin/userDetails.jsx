import React, { useEffect, useState } from "react";
import AdminHome from "./adminHome";
import UserHome from "../userHome";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        if (data.data.userType === "Admin") {
          setIsAdmin(true);
        }

        setUserData(data.data);

        if (data.data === "token expired") {
          alert("Token expired. Please log in again.");
          window.localStorage.clear();
          window.location.href = "./sign-in";
        }
      });
  }, []);

  return isAdmin ? <AdminHome /> : <UserHome userData={userData} />;
}
