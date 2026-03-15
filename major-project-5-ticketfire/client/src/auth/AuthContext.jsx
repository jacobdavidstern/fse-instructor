// client/src/auth/AuthContext.jsx

import { createContext, useState, useEffect } from 'react';
import { apiFetch } from '../api/api';

export const AuthContext = createContext(null); // eslint-disable-line

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. INITIAL LOAD (refresh)
  useEffect(() => {
    const init = async () => {
      const stored = localStorage.getItem('user');
      const token = localStorage.getItem('token');

      if (!stored || !token) {
        setLoading(false);
        return;
      }

      try {
        const parsedUser = JSON.parse(stored);
        setUser(parsedUser);

        // ADMIN GUARD — admins have no client
        if (parsedUser.role === 'admin') {
          setClient(null);
          setLoading(false);
          return;
        }

        // Fetch fresh client data
        const freshClient = await apiFetch(`/api/${parsedUser.client.slug}`);
        setClient(freshClient);
      } catch (err) {
        console.error('Auth init error:', err);
        localStorage.clear();
      }

      setLoading(false);
    };

    init();
  }, []);

  // 2. LOGIN FLOW (preload client)
  const login = async (data) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    setUser(data.user);

    // ADMIN GUARD — admins have no client
    if (data.user.role === 'admin') {
      setClient(null);
      setLoading(false);
      return;
    }

    // Fetch client BEFORE navigation
    const freshClient = await apiFetch(`/api/${data.user.client.slug}`);
    setClient(freshClient);

    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setClient(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        client,
        loading,
        login,
        logout,
        setClient,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
