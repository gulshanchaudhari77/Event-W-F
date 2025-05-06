import React, { Children } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const OpenRoute = ({children}) => {
    const token=localStorage.getItem("token") || null;

   if(token===null)
    {
        return children
    }  else{
        return <Navigate to='/dashboard'/>
    }
}

export default OpenRoute