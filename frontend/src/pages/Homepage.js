
import React, { useState } from 'react';
import "../styles/pages/Homepage.css";
import "../assets/Images.js";
import images from "../assets/Images.js";
import SearchBoxDynamic from "../components/SearchBoxDynamic.js";
import Login from '../components/LoginSignUp.js';
import { useAuth } from '../contexts/AuthContext.js';
import ProfileWindow from '../components/ProfileWindow.js';


  
const Homepage = () => {

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const { isLoggedIn, user} = useAuth();
  const [isProfileVisible, setIsProfileVisible] = useState(false);


  
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

  const handleSignUp = (userData) => {
    setIsLoginVisible(false);
  }

  const profileButtonEvent = () => {
    setIsProfileVisible(true);
  }

  const closeProfileWindow = () => {
    if (isProfileVisible) {
      setIsProfileVisible(false);
    }
  }

  return (
    <div id = "search-simple" className="search-simple">
        {isLoginVisible &&
        <div className="overlay" onClick={closeLoginWindow}>
          <Login onSignUp={handleSignUp} onLogin={handleLogin} onClose={closeLoginWindow} onWindowClick={(e) => e.stopPropagation()}/>
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
          <img className = "profile-image" src={require(`../assets/profile-pictures/${user.imgSrc}`)} alt="Profile" /> 
          </button>
        )}
                {isProfileVisible && <div className='profile-overlay' onClick={closeProfileWindow}>
          <ProfileWindow 
            onWindowClick={(e) => e.stopPropagation()}
            onClose = {closeProfileWindow}
            user={{
              email: 'user@example.com',
              name: 'John Doe'
            }} 
          />
        </div>
        }
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
