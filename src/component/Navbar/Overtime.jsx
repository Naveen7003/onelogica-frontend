import React from 'react';
import { useSelector } from 'react-redux';
import EmployeeNavbar from '../Navbar/Employe';

const EmployeeOvertime = () => {
  // Access overtime data from the Redux store
  const { overtime } = useSelector((state) => state.employeReducer.employe.overtime);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 flex flex-col justify-between">
      {/* Employee Navbar */}
      <EmployeeNavbar />

      {/* Overtime Details Section */}
      <div className="container mx-auto p-6 flex-grow">
        <div className="bg-white shadow-2xl rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Overtime Details
          </h2>

          {/* Overtime Table */}
          {overtime && overtime.length > 0 ? (
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Overtime Type</th>
                  <th className="px-4 py-2 border">Hours Worked</th>
                </tr>
              </thead>
              <tbody>
                {overtime.map((ot, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border">{new Date(ot.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2 border">{ot.type}</td>
                    <td className="px-4 py-2 border">{ot.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-600">No overtime records available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeOvertime;
