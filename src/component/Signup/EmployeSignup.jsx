import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { employeSignup } from '../../store/Actions/employeActions';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employename: '', // keeping employename as per your API
    email: '',
    password: '',
    manager: '',
    jobRole: '',
    department: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    // Simple Validation
    if (!formData.employename || !formData.email || !formData.password || !formData.jobRole || !formData.department || !formData.contact) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      dispatch(employeSignup(formData));
      navigate("/employe/profile")
      // navigate('/success'); // You can navigate to a success page after signup
    } catch (error) {
      console.log('Signup failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center p-4">
      <div className="bg-white p-6 shadow-xl rounded-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Signup</h1>

        <form onSubmit={SubmitHandler}>
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Employee Name</label>
            <input
              type="text"
              name="employename" // corrected to employename as per API
              value={formData.employename} // use employename from the state
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Manager</label>
            <input
              type="text"
              name="manager"
              value={formData.manager}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
              required
            />
          </div>

          <div className="flex space-x-3 mb-3">
            <div className="w-1/2">
              <label className="block text-gray-700 font-semibold mb-1">Job Role</label>
              <input
                type="text"
                name="jobRole"
                value={formData.jobRole}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700 font-semibold mb-1">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
