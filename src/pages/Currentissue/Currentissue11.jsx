import React from 'react';

const Currentisssue11 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full md:w-11/12 bg-white rounded-b-lg shadow-lg p-6 mt-4 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-center py-4">
          Current Issue<br /><br />
          (July-December 2023 Vol.1 Issue 1)<br />
          Editorial<br /><br />
          Table of Contents<br />
        </h2>
        <p className="text-center mt-2 px-4 pb-4"></p>
        <div className="flex justify-center">
          <table className="w-full md:w-2/3 lg:w-1/2 border-collapse border border-gray-400">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="border border-gray-400 px-4 py-2">S.No.</th>
                <th className="border border-gray-400 px-4 py-2">Title</th>
                <th className="border border-gray-400 px-4 py-2">Authors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/strengthening-media-literacy.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Strengthening Media Literacy to combat Fake News: Analysis of Case Studies from India
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Sheel Nidhi Tripathi</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">2</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/precision-farming.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Precision Farming using Machine Learning and IoT
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Yogesh Pingle, Smit Master, Sachin Kundar, Rahul Gandhi</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">3</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/transforming-education.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Transforming Education for a Dynamic World: Navigating Challenges and Strategies
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Rakhee Sharma and Ritika Malik</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">4</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/facial-emotions-detection.pdf" target="_blank" className="text-blue-600 hover:underline">
                    IHMCNN-LSTM: Improved Hybrid Model for Facial Emotions Detection
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Arpita Nagpal</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">5</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/security-privacy-industry.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Security and Privacy Issues in Industry 5.0
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Sarita Nehra</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Currentisssue11;
