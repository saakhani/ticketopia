// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  useEffect(() => {
    // Check if there's a token in cookies
    const storedToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);



  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Perform your login logic
    setIsLoggedIn(true);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // Expires in 7 days
    document.cookie = `authToken=your_token_here; expires=${expirationDate.toUTCString()}; secure; path=/`;

  };

  const logout = () => {
    // Perform your logout logic
    setIsLoggedIn(false);
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; path=/;';
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
