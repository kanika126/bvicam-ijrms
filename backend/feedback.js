const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: false },
    organization: { type: String, required: false },
    feedback: { type: String, required: true },
  },
  {
    collection: "Feedback",
  }
);

mongoose.model("Feedback", FeedbackSchema);
