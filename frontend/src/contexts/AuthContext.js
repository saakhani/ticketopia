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
    setUser({
      name: 'Saad Lakhani',
      email: 'm.lakhani.24471@khi.iba.edu.pk',
      phone: '+92 322 2828114',
      imgSrc: 'm.lakhani.24471@khi.iba.edu.pk.jpg'
    });
  }, []);



  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = () => {
    // Perform your login logic
    // set user data from backend
    setUser({
      name: 'Saad Lakhani',
      email: 'm.lakhani.24471@khi.iba.edu.pk',
      phone: '+92 322 2828114',
      imgSrc: 'm.lakhani.24471@khi.iba.edu.pk.jpg'
    });


    setIsLoggedIn(true);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // Expires in 7 days
    document.cookie = `authToken=your_token_here; expires=${expirationDate.toUTCString()}; secure; path=/`;

  };

  const logout = () => {
    // Perform your logout logic
    setIsLoggedIn(false);
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; path=/;';
    setUser({});
  };

  return (
    <AuthContext.Provider value={{  user, isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
