import React, { useState } from "react";

export default function PaperPublish() {
  const [volume, setVolume] = useState("");
  const [issue, setIssue] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can handle the form submission, including file upload
    console.log(volume, issue, title, author, year, file);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-3 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-6">Paper Publication Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="volume" className="block text-gray-700 font-semibold">Volume</label>
          <input
            type="text"
            id="volume"
            className="form-input mt-1 block w-full"
            placeholder="Enter Volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="issue" className="block text-gray-700 font-semibold">Issue</label>
          <input
            type="text"
            id="issue"
            className="form-input mt-1 block w-full"
            placeholder="Enter Issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold">Title</label>
          <input
            type="text"
            id="title"
            className="form-input mt-1 block w-full"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-semibold">Author</label>
          <input
            type="text"
            id="author"
            className="form-input mt-1 block w-full"
            placeholder="Enter Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 font-semibold">Year</label>
          <input
            type="text"
            id="year"
            className="form-input mt-1 block w-full"
            placeholder="Enter Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-semibold">Upload File (PDF/DOC)</label>
          <input
            type="file"
            id="file"
            className="form-input mt-1 block w-full"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-600 text-white py-2 px-4 rounded"
        >
          Publish Paper
        </button>
      </form>
    </div>
  );
}
