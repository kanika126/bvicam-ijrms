import React from 'react';

const Currentisssue21 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full md:w-11/12 bg-white rounded-b-lg shadow-lg p-6 mt-4 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-center py-4">
          Current Issue<br /><br />
          (July-December 2023 Vol.2 Issue 1)<br />
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
                  <a href="/pdfs/silicon-transporters.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Insight into Silicon Transporters in Major Cereal Crops of Poaceae: A Bioinformatics Approach
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Arvind Kumar Yadav and Abha Gupta</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">2</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/elearning-paradigm.pdf" target="_blank" className="text-blue-600 hover:underline">
                    A Qualitative Investigation of the e-learning Paradigm for up-scaling Skills during Pandemic
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Ankit Kumar</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">3</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/covid19-data-analysis.pdf" target="_blank" className="text-blue-600 hover:underline">
                    A Study of Covid-19 Outbreak Data Analysis using Machine Learning Methods: A Case Study of India
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Ramjeet Singh Yadav</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">4</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/nn-random-key-gen.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Probabilistic Neural Network based Shared Random Key Generation for Trellis Coded Wireless Cryptosystem
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Anusha.T and Venkatesan. R</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">5</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/public-shaming-analyzer.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Public Shaming Analyzer using Random Forest Classifier
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Romin Katre, Chirag Narkar and Harsh Kore</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">6</td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href="/pdfs/fake-news-detection.pdf" target="_blank" className="text-blue-600 hover:underline">
                    Fake News Detection in Social Media using Cross and Bi-encoders-based approach
                  </a>
                </td>
                <td className="border border-gray-400 px-4 py-2">Rayees Ahmad Dar and Rana Hashmy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Currentisssue21;
