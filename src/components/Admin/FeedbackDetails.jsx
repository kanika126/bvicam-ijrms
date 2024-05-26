import React, { useEffect, useState } from "react";
import FeedbackList from "./FeedbackList";
import Feedback from "../../pages/Feedback";


export default function FeedbackDetails() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allFeedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data, "feedbackData");
        if (data.status === "ok") {
          setFeedbackData(data.data);
          if (data.data.userType === "Admin") {
            setIsAdmin(true);
          }
        } else {
          setError(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching feedback:", error);
        setError("Error fetching feedback");
      });
  }, []);

  return (
    <div>
      {isAdmin ? (
        <>
          {error && <p>{error}</p>}
          <FeedbackList feedbackData={feedbackData} />
        </>
      ) : (
        <FeedbackList />
      )}
    </div>
  );
}

