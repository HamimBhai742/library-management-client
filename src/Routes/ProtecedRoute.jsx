import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
   const token=localStorage.getItem('token')
    // if(token){
    //     return <span className="loading loading-bars loading-lg"></span>
    // }
    if (token) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default ProtectedRoute;