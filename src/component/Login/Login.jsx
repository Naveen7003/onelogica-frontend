import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { employeSignin } from '../../store/Actions/employeActions';
import { managerSignin } from '../../store/Actions/managerActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'employee', // Default role is employee
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    // Handle login based on role
    if (formData.role === 'employee') {
      // Dispatch employee login action
      dispatch(employeSignin(formData));
      navigate("/employe/profile")
    } else if (formData.role === 'manager') {
      // Dispatch manager login action
      dispatch(managerSignin(formData));
      navigate("/manager/profile")
    }

    // You can navigate based on the role or login success
    // navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center p-4">
      <div className="bg-white p-6 shadow-xl rounded-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

        <form onSubmit={SubmitHandler}>
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

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
              required
            >
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
