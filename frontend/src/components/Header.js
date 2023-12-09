import React, { useState } from 'react';
import images from "../assets/Images.js";
import "../styles/components/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useAuth } from '../contexts/AuthContext.js';
import Login from './LoginSignUp.js';

import SearchBoxStatic from "./SearchBoxStatic.js";
import ProfileWindow from './ProfileWindow.js';

function Header({inputQueryHeader}) {

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const { isLoggedIn, logout, user } = useAuth();

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
    setIsProfileVisible(true);
  }

  const closeProfileWindow = () => {
    if (isProfileVisible) {
      setIsProfileVisible(false);
    }
  }

  const handleSignUp = (userData) => {
    setIsLoginVisible(false);
  }

    return(
      <div className="header">
        {isLoginVisible && <div className="overlay" onClick={closeLoginWindow}>
          <Login onSignUp = {handleSignUp} onLogin={handleLogin} onClose={closeLoginWindow} onWindowClick={(e) => e.stopPropagation()} />
        </div>
        }
        {isProfileVisible && <div className='profile-overlay' onClick={closeProfileWindow}>
          <ProfileWindow 
            onWindowClick={(e) => e.stopPropagation()}
            onClose = {closeProfileWindow}
          />
        </div>
        }
        <div className="logo">
          <button className="logo-button" onClick={() => window.location.href = '/'}>
            <img src={images.logo_symbol} alt="Logo" />
          </button>
        </div>
        <div className="search-box-static">
          <SearchBoxStatic inputQuery= {inputQueryHeader}/>
        </div>
        {!isLoggedIn && (<button className = "login-button-header" onClick={loginButtonEvent} type="submit">      
          login
        </button>)
        }
        {isLoggedIn && (<button className = "profile-button-header" onClick={profileButtonEvent}>
          <img className = "profile-image" src={require(`../assets/profile-pictures/${user.imgSrc}`)} alt="Profile" />      
          {/* <FontAwesomeIcon icon={icon({name: 'user', style: 'solid'})} style={{color: "#0391cb",}} /> */}
        </button>)
        }
      </div>
    )
    
}


export default Header;
