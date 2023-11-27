
import React, { useState } from 'react';
import "./Search.css";
import "./images.js";
import images from "./images.js";
import UserInputBox from "./UserInputBox.js";
import SearchResultCard from "./SearchResultCard.js";

  
const Search = () => {
  const loginButtonEvent = () => {
    alert("Check back later!");
  };
  
  const searchData = [
    {
      title: 'Movie 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://example.com/result1',
    },
    {
      title: 'Movie 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://example.com/result2',
    },
    {
      title: 'Talk 1',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://example.com/result2',
    },
    {
      title: 'Talk 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://example.com/result2',
    },
    {
      title: 'Rave 1',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://example.com/result2',
    },
    {
      title: 'Rave 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://example.com/result2',
    },
    {
      title: 'Concert 1',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://example.com/result2',
    },
    {
      title: 'Concert 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://example.com/result2',
    },
    // Add more search results as needed
  ];
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  };

  // Function to handle search logic
  const handleSearch = (inputValue) => {
    setSearchQuery(inputValue)
    // For simplicity, let's filter the searchData array for matching titles
    const filteredResults = searchData.filter(
      (result) =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
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
            <div className="search-box">
            <UserInputBox onSearch={handleSearch} onInputChange={handleInputChange} />
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