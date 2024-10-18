import React, { useState } from 'react';
import EmployeeNavbar from '../Navbar/Employe';
import { useDispatch } from 'react-redux';
import { applyLeave } from '../../store/Actions/employeActions'; // Import your action
import { useNavigate } from 'react-router-dom';

const ApplyLeave = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: ''
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the specific field in the formData state
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simple validation to ensure all fields are filled
    const { leaveType, startDate, endDate } = formData;
    if (!leaveType || !startDate || !endDate) {
      setError('Please fill all fields');
      return;
    }
    dispatch(applyLeave(formData))
    navigate("/leave")
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 flex flex-col justify-between">
      {/* Employee Navbar */}
      <EmployeeNavbar />

      {/* Apply Leave Form */}
      <div className="container mx-auto p-6 flex-grow">
        <div className="bg-white shadow-2xl rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Apply for Leave
          </h2>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-center mb-4">{error}</p>
          )}

          {/* Success Message */}
          {message && (
            <p className="text-green-600 text-center mb-4">{message}</p>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Leave Type */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Leave Type
              </label>
              <select
                name="leaveType" // Set the name for each input
                value={formData.leaveType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              >
                <option value="">Select Leave Type</option>
                <option value="vacation">Vacation</option>
                <option value="sick">Sick Leave</option>
                <option value="personal">Personal Leave</option>
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Apply for Leave
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;
