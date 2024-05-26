import React from 'react';

const Currentisssue12 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full md:w-11/12 bg-white rounded-b-lg shadow-lg p-6 mt-4 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-center py-4">
          Current Issue<br /><br />
          (July-December 2023 Vol.1 Issue 2)<br />
          Editorial<br /><br />
          Table of Contents<br />
        </h2>
        <p className="text-center mt-2 px-4 pb-4"></p>
        <div className="flex justify-center">
          <table className="w-full md:w-2/3 lg:w-1/2 border-collapse border border-gray-400">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="border border-gray-400 px-4 py-2">S. No.</th>
                <th className="border border-gray-400 px-4 py-2">Title</th>
                <th className="border border-gray-400 px-4 py-2">Authors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/analyzing-partition.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Analyzing Partition of Punjab 1947 through the lens of Print Media
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Priyanka Yadav</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">2</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/solar-smart-inverter.pdf" target="_blank" className="text-blue-600 hover:underline">
                    A New Technique for Implementation of Solar based Smart Inverter
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Geetanjali Udgirkar, Radhika R, Karthik Santosh and Harish R</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">3</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/comparative-analysis.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Comparative Analysis between Communication and Distribution Channels of APPLE and AMUL
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Ritika Malik and Loveleen Kaur Walia</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">4</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/chat-sentiment-analysis.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Determining the Polarity and Statistics of Chat based on Sentiment Analysis
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Piyush Anand, Raj Gupta, Kunal Chaudhary and Abdul Aleem</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">5</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/effect-of-coronavirus.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Effect of Corona Virus on Multi-Disease Patients using Association Rule Mining
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Vijai Dev and Preetvanti Singh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Currentisssue12;
