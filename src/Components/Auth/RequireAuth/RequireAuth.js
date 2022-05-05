import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = () => {
    const location = useLocation();
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default RequireAuth;