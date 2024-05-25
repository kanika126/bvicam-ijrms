import React, { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeedbackList() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllFeedback();
  }, [searchQuery]);

  const getAllFeedback = () => {
    fetch(`http://localhost:5000/getAllFeedback?search=${searchQuery}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "feedbackData");
        setFeedbackData(data.data);
      });
  };

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div style={{ height: "calc(100vh - 40px)", overflowY: "auto" }}>
      <div className="flex items-center justify-center">
        <div className="auth-wrapper text-center">
          <div className="auth-inner" style={{ width: "fit-content", border: "1px solid rgba(0, 0, 0, 0.1)", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "4px" }}>
            <h3 className="text-xl font-bold mb-3">Feedbacks</h3>
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
                {searchQuery.length > 0 ? `Records Found ${feedbackData.length}` : `Total Records ${feedbackData.length}`}
              </span>
            </div>
            <table style={{ width: 700 }}>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Organization</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {feedbackData.map((f) => {
                  return (
                    <tr key={f._id} style={{ textAlign: "center" }}>
                      <td>{f.name}</td>
                      <td>{f.email}</td>
                      <td>{f.mobile}</td>
                      <td>{f.organization}</td>
                      <td>{f.feedback}</td>
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
