 
import './App.css' 
import {Navigate , Route , Routes} from "react-router-dom"
import Login from './pages/login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { useContext } from 'react'
import CreateContext from './context/createContext.jsx'
import DashboardLayout from './layouts/dashboardlayout.jsx'
import Project from './pages/Project.jsx'
import  User from './pages/Users.jsx'
import Settings from './pages/Setting.jsx'

function ProtectedRoute({children}) {
  const {isAuthenticated} = useContext(CreateContext)
  if(!isAuthenticated){
    return <Navigate to="/login" replace />
  }
  return children
}

function App() { 
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/projects" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Project />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/users" element={
        <ProtectedRoute>
          <DashboardLayout>
            <User />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Settings />    
      </DashboardLayout>
        </ProtectedRoute>
      } />

    </Routes>
  )
}

export default App
