
import React, { useState } from 'react';
import "../styles/pages/Homepage.css";
import "../assets/Images.js";
import images from "../assets/Images.js";
import SearchBoxDynamic from "../components/SearchBoxDynamic.js";
import Login from '../components/Login.js';


  
const Homepage = () => {

  const [inputValue, setInputValue] = useState('');
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  // window.location.href = '/search/dummy';

  
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
    if (isLoginVisible) {
      setIsLoginVisible(false);
      alert('You are now logged in with token: ' + token);
    }
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
        <button className = "login-button"
          onClick={loginButtonEvent} type="submit">      
          login
        </button>
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
