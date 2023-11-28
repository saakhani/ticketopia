
import React, { useState } from 'react';
import "./Search.css";
import "./images.js";
import images from "./images.js";
import UserInputBox from "./UserInputBox.js";
import SearchResultCard from "./SearchResultCard.js";
import { Outlet, Link } from "react-router-dom";

  
const Search = () => {
  
  const loginButtonEvent = (e) => {
    e.preventDefault();
    alert("Check back later!");
  };
  
  const searchData = [
    {
      title: "Event 1",
      venue: "Venue 1",
      description: "Description 1",
      link: "https://www.google.com/"
    },
    {
      title: "Event 2",
      venue: "Venue 2",
      description: "Description 2",
      link: "https://www.google.com/"
    },
    {
      title: "Event 3",
      venue: "Venue 3",
      description: "Description 3",
      link: "https://www.google.com/"
    },
    {
      title: "Event 4",
      venue: "Venue 4",
      description: "Description 4",
      link: "https://www.google.com/"
    },
    {
      title: "Event 5",
      venue: "Venue 5",
      description: "Description 5",
      link: "https://www.google.com/"
    },
    {
      title: "Event 6",
      venue: "Venue 6",
      description: "Description 6",
      link: "https://www.google.com/"
    },
    {
      title: "Event 7",
      venue: "Venue 7",
      description: "Description 7",
      link: "https://www.google.com/"
    },
    {
      title: "Event 8",
      venue: "Venue 8",
      description: "Description 8",
      link: "https://www.google.com/"
    },
    {
      title: "Event 9",
      venue: "Venue 9",
      description: "Description 9",
      link: "https://www.google.com/"
    },
    {
      title: "Event 10",
      venue: "Venue 10",
      description: "Description 10",
      link: "https://www.google.com/"
    },
    //Add 5 more
    {
      title: "Event 11",
      venue: "Venue 11",
      description: "Description 11",
      link: "https://www.google.com/"
    },
    {
      title: "Event 12",
      venue: "Venue 12",
      description: "Description 12",
      link: "https://www.google.com/"
    },
    {
      title: "Event 13",
      venue: "Venue 13",
      description: "Description 13",
      link: "https://www.google.com/"
    },
    {
      title: "Event 14",
      venue: "Venue 14",
      description: "Description 14",
      link: "https://www.google.com/"
    },
    {
      title: "Event 15",
      venue: "Venue 15",
      description: "Description 15",
      link: "https://www.google.com/"
    }
    // Add more search results as needed
  ];
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  };

  // Function to handle search logic
  const handleSearch = (inputValue) => {
    const searchWords = inputValue.toLowerCase().split(/\s+/);
    //perform an SQL query with searchWords
    setSearchResults(searchData);
  
  };
  
  

  //reset search results when UserInputBox moves out of focus and login-button is not clicked
  const resetSearch = () => {
    setSearchResults([]);
  };

  //check if login-button is in focus or not
  const isLoginButtonFocused = () => {
    return document.activeElement === document.getElementById("login-button");
  };

  //check if UserInputBox is in focus or not
  const isUserInputBoxFocused = () => {
    return document.activeElement === document.getElementById("input-box");
  };

  //perform resetSearch() when UserInputBox moves in focus
  const handleUserInputBoxFocus = () => {
      resetSearch();
  };



  return (
    <div className="search-simple">
      <div className="div">
        <div className="group">
          <img className="ticketopia" alt="Ticketopia" src= {images.logo_hor}/>
        </div>
        <div className="text-wrapper">
          welcome!
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="search-box"
            onFocus={handleUserInputBoxFocus}>
            <UserInputBox onSearch={handleSearch} onInputChange={handleInputChange}/>
            </div>
          </div>
        </div>
        <div className="search-result-container">
          {searchResults.map((result, index) => (
            <SearchResultCard key={index} {...result} />
          ))}
        </div>
      </div>
      <button className = "login-button"
        onClick={loginButtonEvent} type="submit">      
        login
      </button>
    </div>
  );
};  

export default Search;