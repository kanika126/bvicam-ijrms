const mongoose = require("mongoose");

const PaperPublicationSchema = new mongoose.Schema(
  {
    volume: String,
    issue: String,
    title: String,
    author: String,
    year: String,
    file: {
      filename: String, // Name of the uploaded file
      contentType: String, // MIME type of the file (e.g., "application/pdf", "application/msword")
      size: Number, // Size of the file in bytes
      // Add any other properties you may need
    }
  },
  {
    collection: "PaperPublications", // Collection name in MongoDB
    timestamps: true // Adds createdAt and updatedAt fields automatically
  }
);

module.exports = mongoose.model("PaperPublication", PaperPublicationSchema);
