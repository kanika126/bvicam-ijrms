import React from 'react';

const Currentisssue = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full md:w-11/12 bg-white rounded-b-lg shadow-lg p-6 mt-4 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-center py-4">
          Current Issue<br /><br />
          (July-December 2023 Vol.2 Issue 2)<br />
          Editorial<br /><br />
          Table of Contents<br />
        </h2>
        <p className="text-center mt-2 px-4 pb-4"></p>
        <div className="flex justify-center">
          <table className="w-full md:w-2/3 lg:w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-2 px-4">S. No.</th>
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Authors</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr>
                <td className="border border-gray-300 py-2 px-4">1.</td>
                <td className="border border-gray-300 py-2 px-4">
                  <a href="/pdfs/1.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Mental Health in CALD community and related stigmas for Muslim community
                  </a>
                </td>
                <td className="border border-gray-300 py-2 px-4">Saima Durrani</td>
              </tr>
              <tr>
                <td className="border border-gray-300 py-2 px-4">2.</td>
                <td className="border border-gray-300 py-2 px-4">
                  <a href="/pdfs/1.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Exploring the Potential of Metaverse in Software Engineering Education: A Conceptual Framework
                  </a>
                </td>
                <td className="border border-gray-300 py-2 px-4">Rakhee Sharma , M.N.Hoda</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Currentisssue;
