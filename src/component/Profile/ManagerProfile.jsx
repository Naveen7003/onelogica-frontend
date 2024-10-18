import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allemploye } from '../../store/Actions/allemployeactions';

const ManagerProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.allemployeReducer.allemploye); // Fetch employee data from Redux

  // Function to handle navigation to the leave request review page
  const handleLeaveRequest = (employeeId, leaveId) => {
    navigate(`/approve-leave/${employeeId}/${leaveId}`); // Navigate to ApproveLeave component with employeeId and leaveId
  };

  // Function to handle marking a review
  const handleMarkReview = (employeeId) => {
    navigate(`/mark-review/${employeeId}`)
    // Logic for marking review
  };

  useEffect(() => {
    dispatch(allemploye());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Employee List</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {employees?.map((employee) => (
          <div key={employee._id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{employee.employename}</h2>
            <p className="text-gray-600 mb-2">Email: {employee.email}</p>
            <p className="text-gray-600 mb-2">Department: {employee.jobDetails.department}</p>
            <p className="text-gray-600 mb-4">Role: {employee.jobDetails.jobRole}</p>

            {/* Check if there are any pending leave requests */}
            {employee.leave.leaveHistory?.some((leave) => leave.status === 'pending') ? (
              <>
                <p className="text-red-500 font-semibold mb-4">
                  Pending Leave Requests: {employee.leave.leaveHistory.filter((leave) => leave.status === 'pending').length}
                </p>

                {/* Leave Request Review Button */}
                {employee.leave.leaveHistory
                  .filter((leave) => leave.status === 'pending')
                  .map((leave) => (
                    <button
                      key={leave._id}
                      onClick={() => handleLeaveRequest(employee._id, leave._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mb-2"
                    >
                      Leave Request
                    </button>
                  ))}
              </>
            ) : (
              <p className="text-gray-500 mb-4">No Pending Leave Requests</p>
            )}

            {/* Mark Review and Mark Overtime Buttons */}
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => handleLeaveRequest(employee._id)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              >
                Approve leave
              </button>
              <button
                onClick={() => handleMarkReview(employee._id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
              >
                Mark Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagerProfile;
