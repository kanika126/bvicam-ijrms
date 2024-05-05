import React from 'react';

const Downloads = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full md:w-11/12 bg-white rounded-b-lg shadow-lg p-6 mt-4 hover:shadow-xl transition duration-300">
    <h2 className="text-2xl font-bold text-center py-4">Downloads</h2>
    <p className="text-center mt-2 px-4 pb-4"></p>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Document Name</th>
            <th className="px-4 py-2 text-left">Format</th>
            <th className="px-4 py-2 text-left">For Authors</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          <tr>
            <td className="border px-4 py-2">Call for Papers</td>
            <td className="border px-4 py-2">PDF</td>
            <td className="border px-4 py-2">
              <a href="#" className="text-blue-500 hover:underline">Download</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Template for Paper</td>
            <td className="border px-4 py-2">DOC</td>
            <td className="border px-4 py-2">
              <a href="#" className="text-blue-500 hover:underline">Download (DOC)</a><br/>
              <a href="#" className="text-blue-500 hover:underline">Download (PDF)</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
};

export default Downloads;
