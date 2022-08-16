import React from 'react'
import { useAuth } from '../context/auth-context'
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({children}) => {

    const {user:{isLogged}} = useAuth();
    const location = useLocation();

  return (
    isLogged ? children : <Navigate to="/login" state={{ from: location }} replace />
  )
}
