import React, { useState } from 'react';
import images from "../assets/Images.js";
import "../styles/components/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useAuth } from '../contexts/AuthContext.js';
import Login from '../components/Login.js';

import SearchBoxStatic from "./SearchBoxStatic.js";

function Header({inputQueryHeader}) {

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


    // console.log(inputQueryHeader);

    return(
        <div className="header">
                  {isLoginVisible &&
        <div className="overlay">
          <Login onLogin={handleLogin} onClose={closeLoginWindow} />
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
            {!isLoggedIn && (
          <button className = "login-button-header"
            onClick={loginButtonEvent} type="submit">      
            login
          </button>
        )}
        {isLoggedIn && (
          <button className = "profile-button-header"
            onClick={profileButtonEvent}>      
            <FontAwesomeIcon icon={icon({name: 'user', style: 'solid'})} style={{color: "#0391cb",}} />
          </button>
        )}
        </div>
    )
    
}


export default Header;
