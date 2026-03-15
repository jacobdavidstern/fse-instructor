// client/src/routes/ProtectedRoute.jsx

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

const ProtectedRoute = ({ adminOnly = false }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // Not logged in → go to login
  if (!user) return <Navigate to="/login" replace />;

  // Admin-only route but user is not admin
  if (adminOnly && user.role !== 'admin') {
    return <Navigate to={`/${user.client.slug}`} replace />;
  }

  // Client-only route but user IS admin
  if (!adminOnly && user.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  // Allowed → render the layout + nested route
  return <Outlet />;
};

export default ProtectedRoute;
