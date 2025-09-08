import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ role, requiredRole, children }) {
  // Check if the user's role matches the required role
  if (role !== requiredRole) {
    return <Navigate to="/" />; // Redirect to login if not authorized
  }
  return children; // Render the component if authorized
}

export default ProtectedRoute;
