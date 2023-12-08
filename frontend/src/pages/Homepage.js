
import React, { useState } from 'react';
import "../styles/pages/Homepage.css";
import "../assets/Images.js";
import images from "../assets/Images.js";
import SearchBoxDynamic from "../components/SearchBoxDynamic.js";
import Login from '../components/Login.js';
import { useAuth } from '../contexts/AuthContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


  
const Homepage = () => {

  const [inputValue, setInputValue] = useState('');
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const { isLoggedIn, logout } = useAuth();


  
  const loginButtonEvent = (e) => {
    e.preventDefault();
    setIsLoginVisible(true);
  };

  const closeLoginWindow = () => {
    if (isLoginVisible) {
      setIsLoginVisible(false);
    }
  }

  const handleLogin = (token) => {
    setIsLoginVisible(false);
    // alert('You are now logged in with token: ' + token);
  }

  const profileButtonEvent = () => {
    logout()
  }

  return (
    <div id = "search-simple" className="search-simple">
        {isLoginVisible &&
        <div className="overlay">
          <Login onLogin={handleLogin} onClose={closeLoginWindow} />
        </div>
        }
        <div className="logo">
          <img className="ticketopia" alt="Ticketopia" src= {images.logo_hor}/>
        </div>
        {!isLoggedIn && (
          <button className = "login-button"
            onClick={loginButtonEvent} type="submit">      
            login
          </button>
        )}
        {isLoggedIn && (
          <button className = "profile-button"
            onClick={profileButtonEvent}>      
            <FontAwesomeIcon icon={icon({name: 'user', style: 'solid'})} style={{color: "#0391cb",}} />
          </button>
        )}
        <div className="welcome-headline">
          welcome!
        </div>
        <div className="search-box">
          <SearchBoxDynamic />
        </div>
    </div>
  );
};  

export default Homepage;
