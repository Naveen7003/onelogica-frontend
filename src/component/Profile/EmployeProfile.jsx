import React from 'react';
import EmployeeNavbar from '../Navbar/Employe';
import { useSelector } from 'react-redux';

const EmployeProfile = () => {
  const employe = useSelector((state) => state.employeReducer.employe);
  console.log(employe);

  // Get the latest performance review if available
  const latestReview = employe?.performanceHistory?.length ? employe.performanceHistory[employe.performanceHistory.length - 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
      {/* Employee Navbar */}
      <EmployeeNavbar />

      {/* Profile Section */}
      <div className="container mx-auto p-6 mt-10">
        <div className="bg-white shadow-2xl rounded-lg p-8 max-w-4xl mx-auto">

          <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 mt-6 mb-8">
            {employe?.employename || 'Employee Name'}
          </h2>

          {/* Profile Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col bg-blue-100 p-4 rounded-lg shadow-md">
              <span className="text-blue-700 font-medium text-lg sm:text-base">Username:</span>
              <span className="text-xl sm:text-2xl font-bold text-blue-900">
                {employe?.employename || 'N/A'}
              </span>
            </div>

            <div className="flex flex-col bg-green-100 p-4 rounded-lg shadow-md">
              <span className="text-green-700 font-medium text-lg sm:text-base">Email:</span>
              <span className="text-xl sm:text-2xl font-bold text-green-900">
                {employe?.email || 'N/A'}
              </span>
            </div>

            <div className="flex flex-col bg-purple-100 p-4 rounded-lg shadow-md">
              <span className="text-purple-700 font-medium text-lg sm:text-base">Manager:</span>
              <span className="text-xl sm:text-2xl font-bold text-purple-900">
                {employe?.manager || 'N/A'}
              </span>
            </div>
          </div>

          {/* Additional Job Details */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col bg-red-100 p-4 rounded-lg shadow-md">
              <span className="text-red-700 font-medium text-lg sm:text-base">Job Role:</span>
              <span className="text-xl sm:text-2xl font-bold text-red-900">
                {employe?.jobDetails?.jobRole || 'N/A'}
              </span>
            </div>

            <div className="flex flex-col bg-indigo-100 p-4 rounded-lg shadow-md">
              <span className="text-indigo-700 font-medium text-lg sm:text-base">Department:</span>
              <span className="text-xl sm:text-2xl font-bold text-indigo-900">
                {employe?.jobDetails?.department || 'N/A'}
              </span>
            </div>
          </div>

          {/* Rating Section */}
          <div className="flex flex-col mt-10 bg-yellow-200 p-4 rounded-lg shadow-md">
            <span className="text-yellow-700 font-medium text-lg sm:text-base">Rating:</span>
            <span className="text-2xl sm:text-3xl font-bold text-yellow-900">
              {latestReview ? latestReview.rating : 'No rating available'}
            </span>
          </div>

          {/* Feedback Section */}
          <div className="mt-10">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Feedback:</h3>
            {latestReview?.feedback?.length ? (
              <ul className="list-disc list-inside bg-gray-100 p-4 rounded-lg shadow-md">
                {latestReview.feedback.map((fb, index) => (
                  <li key={index} className="text-lg sm:text-base text-gray-700">
                    {fb}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-lg sm:text-base text-gray-600">No feedback available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeProfile;
