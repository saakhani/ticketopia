
import React, { useState } from 'react';
import "./Homepage.css";
import "./images.js";
import images from "./images.js";
import SearchBoxDynamic from "./SearchBoxDynamic.js";
import SearchResultCard from "./SearchResultCard.js";
import { Outlet, Link } from "react-router-dom";


  
const Homepage = () => {

  const [inputValue, setInputValue] = useState('');

  // window.location.href = '/search/dummy';

  
  const loginButtonEvent = (e) => {
    e.preventDefault();
    alert("Check back later!");
  };

  return (
    <div className="search-simple">
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