import React, { useEffect, useState } from "react";
import FeedbackList from "./FeedbackList";

export default function PaperDetails() {
  const [feedbackData, setFeedbackData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/getAllFeedback", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "feedbackData");
        setFeedbackData(data.data);
      });
  }, []);

  return <PaperList PaperData={PaperData} />;
}