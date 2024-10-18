import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import Attendance from './Attendance';
// import Profile from './Profile';
// import Documents from './Documents';
// import Overtime from './Overtime';

const EmployeeNavbar = () => {
  return (
    <div className="min-h-fit flex flex-col ">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 shadow-lg text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Employee Portal</h1>
          <ul className="flex space-x-32">
            <li>
              <Link to="/employe/attendance" className="hover:text-gray-300">Attendance</Link>
            </li>
            <li>
              <Link to="/employe/profile" className="hover:text-gray-300">Profile</Link>
            </li>
            <li>
              <Link to="/upload-documents" className="hover:text-gray-300">Documents</Link>
            </li>
            <li>
              <Link to="/leave" className="hover:text-gray-300">Leave</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      {/* <main className="flex-grow p-6">
        <Routes>
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/overtime" element={<Overtime />} />
          <Route path="/leave" element={<Leave />} />
        </Routes>
      </main> */}
    </div>
  );
};

export default EmployeeNavbar;
