import React, { useEffect, useState } from "react";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminHome({}) {
  //setting state
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllUser();
  }, [searchQuery]);

  //fetching all user
  const getAllUser = () => {
    fetch(`http://localhost:5000/getAllUser?search=${searchQuery}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };

  //deleting user
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:5000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    }
  };

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div style={{ height: "calc(100vh - 40px)", overflowY: "auto" }}>
      <div className="flex items-center justify-center">
        <div className="auth-wrapper text-center">
          <div className="auth-inner" style={{ width: "fit-content", border: "1px solid rgba(0, 0, 0, 0.1)", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "4px" }}>
            <h3 className="text-xl font-bold mb-3">Users</h3>
            <div style={{ position: "relative", marginBottom: 10 }}>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ position: "absolute", left: 10, top: 13, color: "black" }}
              />
              <input
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
                style={{
                  padding: "8px 32px 8px 32px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
              <span
                style={{ position: "absolute", right: 10, top: 8, color: "#aaa" }}
              >
                {searchQuery.length > 0 ? `Records Found ${data.length}` : `Total Records ${data.length}`}
              </span>
            </div>
            <table style={{ width: 700 }}>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Type</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((i) => {
                  return (
                    <tr key={i._id} style={{ textAlign: "center" }}>
                      <td>{i.fname}</td>
                      <td>{i.email}</td>
                      <td>{i.userType}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => deleteUser(i._id, i.fname)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
