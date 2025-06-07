// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { approveLeave } from '../../store/Actions/managerActions';

// const ApproveLeave = () => {
//   const { employeeId, leaveId } = useParams(); // Get the employeeId and leaveId from URL
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const employee = useSelector((state) =>
//     state.allemployeReducer.allemploye.find((emp) => emp._id === employeeId)
//   );

//   const [leaveDetails, setLeaveDetails] = useState(null);

//   // Find the specific leave from leaveHistory based on leaveId
//   useEffect(() => {
//     if (employee && employee.leave.leaveHistory) {
//       const leave = employee.leave.leaveHistory.find((leave) => leave._id === leaveId);
//       setLeaveDetails(leave);
//     }
//   }, [employee, leaveId]);

//   const handleApproveLeave = () => {
//     // Dispatch an action to approve the leave
//     dispatch(approveLeave({employeeId, leaveId, action:"approve"}));
//     navigate("/manager/profile")
//   };

//   const handleRejectLeave = () => {
//     // Dispatch an action to approve the leave
//     dispatch(approveLeave({employeeId, leaveId,action:"reject"}));
//     navigate("/manager/profile")
//   };

//   if (!leaveDetails) {
//     return <p>Loading leave details...</p>;
//   }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Leave Approval</h2>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Leave Type</label>
//           <input
//             type="text"
//             value={leaveDetails.leaveType}
//             readOnly
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Start Date</label>
//           <input
//             type="date"
//             value={new Date(leaveDetails.startDate).toISOString().substring(0, 10)}
//             readOnly
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">End Date</label>
//           <input
//             type="date"
//             value={new Date(leaveDetails.endDate).toISOString().substring(0, 10)}
//             readOnly
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <button
//           onClick={handleApproveLeave}
//           className="w-full mb-2 bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-300"
//         >
//           Approve Leave
//         </button>
//         <button
//           onClick={handleRejectLeave}
//           className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-300"
//         >
//           Reject Leave
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ApproveLeave
