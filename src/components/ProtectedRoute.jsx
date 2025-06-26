import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const {isAuthenticated} = useContext(AuthContext);
    
  return (
    <div>
      {isAuthenticated? <Outlet/> : <Navigate to='/login'/>}
    </div>
  )
}

export default ProtectedRoute
