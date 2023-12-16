// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Images from '../assets/Images.js';

const AuthContext = createContext();

//@SAAD: the email that you send here i will use that to fetch data from signup table and set that 
//below instead of dummy data

export const AuthProvider = ({ children }) => {

  const getEmailFromCookie = () => {
    const cookies = document.cookie.split('; ');
    const emailCookie = cookies.find(cookie => cookie.startsWith('userEmail='));
    return emailCookie ? emailCookie.split('=')[1] : null;
  };

  const [email, setEmail] = useState(getEmailFromCookie());



  // useEffect(() => {
  //   // Check if there's a token in cookies
  //   const storedToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  //   if (storedToken) {
  //     setIsLoggedIn(true);
  //     setEmail(getEmailFromCookie());
  //   }

  //   // @Marium fetch information from backend using 'email' and set user accordingly.

  //   setUser({
  //     name: 'Saad Lakhani',         //replace this part
  //     email: 'm.lakhani.24471@khi.iba.edu.pk',
  //     phone: '+92 322 2828114',
  //     imgSrc: 'm.lakhani.24471@khi.iba.edu.pk.jpg' //set this to be the email.jpg
  //   });
  // }, []);

  useEffect(() => {
    // Check if there's a token in cookies
    const storedToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (storedToken) {
      setIsLoggedIn(true);
      setEmail(getEmailFromCookie());
  
      // Fetch user information from backend using 'email'
      axios.post('http://localhost:8081/fetchUser', {
        email: getEmailFromCookie(),
      })
      .then((response) => {
        const { success, data } = response.data;
  
        if (success) {
          // Set user information based on the fetched data
          setUser({
            name: data.name,
            email: getEmailFromCookie(),
            phone: data.phone,
            imgSrc: `${getEmailFromCookie()}.jpg`,
          });
        } else {
          console.error('Error fetching user data:', response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
    }
  }, []);

  



  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = (emailParam) => {
    // Perform your login logic
    // set user data from backend

    setEmail(emailParam);
    
    // use name, email, phone from db using "emailParam"

    setUser({
      name: 'Saad Lakhani',     //replace this part with actual information
      email: 'm.lakhani.24471@khi.iba.edu.pk',
      phone: '+92 322 2828114',
      imgSrc: "dummy.jpg" // @Marium make this email.jpg
    });


    setIsLoggedIn(true);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // Expires in 7 days
    document.cookie = `authToken=your_token_here; expires=${expirationDate.toUTCString()}; secure; path=/`;
    document.cookie = `userEmail=${emailParam}; expires=${expirationDate.toUTCString()}; secure; path=/`;
  };

  const logout = () => {
    // Perform your logout logic
    setIsLoggedIn(false);
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; path=/;';
    document.cookie = 'userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; path=/;';
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
