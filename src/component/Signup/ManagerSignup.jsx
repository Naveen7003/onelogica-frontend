import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { managerSignup } from '../../store/Actions/managerActions'; // Import the signup action for managers

const ManagerSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      // Dispatch the manager signup action
      dispatch(managerSignup(formData));
      // Optionally navigate to a success or dashboard page
      // navigate('/manager-dashboard');
    } catch (error) {
      console.log('Signup failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center p-4">
      <div className="bg-white p-6 shadow-xl rounded-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Manager Signup</h1>

        <form onSubmit={SubmitHandler}>
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
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

export default ManagerSignup;
