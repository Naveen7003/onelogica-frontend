import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import EmployeeNavbar from '../Navbar/Employe';

const Leave = () => {
    const navigate = useNavigate();

    // Get leave details from Redux store
    const leave = useSelector((state) => state.employeReducer.employe.leave);
    console.log(leave)
  
    // Calculate remaining leave
    const remainingLeave = leave.totalLeave - leave.usedLeave;
  
    // Navigate to Apply Leave Page
    const handleApplyLeave = () => {
      navigate('/apply-leave'); // Redirect to Apply Leave page
    };
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 flex flex-col justify-between">
      {/* Employee Navbar */}
      <EmployeeNavbar />

      {/* Leave Page Content */}
      <div className="container mx-auto p-6 flex-grow">
        <div className="bg-white shadow-2xl rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Employee Leave Details</h2>

          {/* Total Leave and Remaining Leave */}
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-4">
              <strong>Total Leave:</strong> {leave.totalLeave} days
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Remaining Leave:</strong> {remainingLeave} days
            </p>
          </div>

          {/* Leave History Table */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leave History</h3>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Leave Type</th>
                <th className="px-4 py-2 border">Start Date</th>
                <th className="px-4 py-2 border">End Date</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {leave.leaveHistory && leave.leaveHistory.length > 0 ? (
                leave.leaveHistory.map((leaveItem, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border">{leaveItem.leaveType}</td>
                    <td className="px-4 py-2 border">{new Date(leaveItem.startDate).toLocaleDateString()}</td>
                    <td className="px-4 py-2 border">{new Date(leaveItem.endDate).toLocaleDateString()}</td>
                    <td className="px-4 py-2 border">
                      <span
                        className={`px-2 py-1 rounded-full ${
                          leaveItem.status === 'approved'
                            ? 'bg-green-200 text-green-800'
                            : leaveItem.status === 'rejected'
                            ? 'bg-red-200 text-red-800'
                            : 'bg-yellow-200 text-yellow-800'
                        }`}
                      >
                        {leaveItem.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-2 border text-center" colSpan="4">
                    No leave history available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Apply for Leave Button */}
      <div className="bg-white shadow-2xl py-20">
        <div className="text-center">
          <button
            onClick={handleApplyLeave}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Apply for Leave
          </button>
        </div>
      </div>
    </div>
  )
}

export default Leave