import React from 'react'
import Dashboard from './component/Dashboard'
import EmployeSignup from './component/Signup/EmployeSignup'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login/Login'
import ManagerSignup from './component/Signup/ManagerSignup'
import EmployeProfile from './component/Profile/EmployeProfile'
import EmployeAttendance from './component/Navbar/EmployeAttendance'
import Leave from './component/Navbar/Leave'
import ApplyLeave from './component/Leave/Applyleave'
import EmployeeOvertime from './component/Navbar/Overtime'
import ManagerProfile from './component/Profile/managerProfile'
import Approveleave from './component/Leave/Approveleave'
import Markreview from './component/Navbar/Markreview'
import Documents from './component/Navbar/Documents'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employe/signup" element={<EmployeSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employe/profile" element={<EmployeProfile />} />
        <Route path="/employe/attendance" element={<EmployeAttendance />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/apply-leave" element={<ApplyLeave />} />
        <Route path="/overtime" element={<EmployeeOvertime />} />

        {/* manager */}
        <Route path="/manager/signup" element={<ManagerSignup />} />
        <Route path="/manager/profile" element={<ManagerProfile />} />
        <Route path="/approve-leave/:employeeId/:leaveId" element={<Approveleave />} />
        <Route path="/approve-leave/:employeeId/:leaveId" element={<Approveleave />} />
        <Route path="/mark-review/:employeeId" element={<Markreview />} />
        <Route path="/upload-documents" element={<Documents />} />

      </Routes>
    </div>
  )
}

export default App