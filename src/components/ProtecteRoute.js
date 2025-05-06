import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtecteRoute = () => {
    const token=localStorage.getItem("token")
    console.log("Token in prorout ", token);

  return token ? <Outlet/> : <Navigate to="/login"/>;
  
}

export default ProtecteRoute