import React from 'react';

const Feedback = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md lg:max-w-xl">
      <h2 className="text-xl font-bold mb-4">Submit Feedback</h2>
      <p className="mb-4 text-gray-600">Fields marked with an asterisk (*) are required.</p>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
          <input type="text" id="name" name="name" className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail *</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No.</label>
          <input type="tel" id="mobile" name="mobile" className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization</label>
          <input type="text" id="organization" name="organization" className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback *</label>
          <textarea id="feedback" name="feedback" rows="4" className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" required></textarea>
        </div>
        <button type="submit" className="w-full bg-cyan-600 text-white p-2 rounded-md hover:bg-cyan-600 transition duration-300">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
