import { Toaster } from 'react-hot-toast'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginLanding from './pages/LoginLanding'
import Dashboard from './pages/Dashboard'
import Employess from './pages/Employess'
import Leave from './pages/Leave'
import PrintPayslip from './pages/PrintPayslip'
import Settings from './pages/Settings'
import Attendance from './pages/Attendance'
import Payslips from './pages/Payslips'
import Layout from './pages/layout'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/login' element={<LoginLanding />} />

        <Route path='/login/admin' element={<LoginForm 
        role="admin" 
        title="Admin Portal"
        subtitle="Sign in to manage the organization" />} />
        <Route path='/login/employee' element={<LoginForm 
        role="employee" 
        title="Employee Portal"
        subtitle="Sign in to access your account" />} />


        <Route element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/employess' element={<Employess />} />
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/leave' element={<Leave />} />
          <Route path='/payslips' element={<Payslips />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path='/print/payslips/:id' element={<PrintPayslip />} />
        <Route path='*' element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  )
}

export default App


