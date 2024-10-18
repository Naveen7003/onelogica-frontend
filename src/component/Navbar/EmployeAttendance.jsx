import React, { useState } from 'react';
import EmployeeNavbar from '../Navbar/Employe';
import { useDispatch } from 'react-redux';
import { markAttendance } from '../../store/Actions/employeActions';

const EmployeAttendance = () => {
    const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState('');

  const handleMarkAttendance = () => {
    // Geolocation API to get the user's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;  // Corrected property names
          console.log("Latitude:", latitude, "Longitude:", longitude); // Logging latitude and longitude
          setCoordinates({ currentLatitude: latitude, currentLongitude: longitude });
          
          // Dispatch attendance after setting coordinates
          dispatch(markAttendance({ currentLatitude: latitude, currentLongitude: longitude }))
            .then(() => {
              setMessage('Attendance marked successfully for today.');
              setError('');
            })
            .catch((err) => {
              console.error(err);
              setMessage('Todays Attendance already marked.');
              setError(' marking attendance. Please try again.');
            });
  
          // Clear the message after 3 seconds
          setTimeout(() => setMessage(''), 3000);
        },
        (err) => {
          setError('Error fetching your location. Please allow location access.');
          setMessage('');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setMessage('');
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 flex flex-col justify-between">
      {/* Employee Navbar */}
      <EmployeeNavbar />

      {/* Attendance Page Content */}
      <div className="container mx-auto p-6 flex-grow">
        <div className="bg-white shadow-2xl rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to the Employee Attendance Page
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Mark your attendance for today by clicking the button below.
          </p>

          {/* Success or Error Message */}
          {message && (
            <p className="text-lg font-semibold text-green-600 mb-4">
              {message}
            </p>
          )}
          {error && (
            <p className="text-lg font-semibold text-red-600 mb-4">
              {error}
            </p>
          )}
        </div>
      </div>
      {/* Mark Attendance Button */}
      <div className="bg-white shadow-2xl py-20">
        <div className="text-center">
          <button
            onClick={handleMarkAttendance}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Mark Today’s Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeAttendance;
