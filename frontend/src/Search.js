
import React from "react";
import "./Search.css";
import "./images.js";
import images from "./images.js";
import UserInputBox from "./UserInputBox.js";
import SearchResultCard from "./SearchResultCard.js";

const loginButtonEvent = () => {
  alert("Check back later!");
};

const searchData = [
  {
    title: 'Result 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/result1',
  },
  {
    title: 'Result 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com/result2',
  },
  {
    title: 'Result 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com/result2',
  },
  {
    title: 'Result 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com/result2',
  },
  {
    title: 'Result 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com/result2',
  },
  {
    title: 'Result 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com/result2',
  },
  {
    title: 'Result 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com/result2',
  },
  // Add more search results as needed
];


  
function Search(){
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
                <UserInputBox />
            </div>
          </div>
        </div>
        <div className="search-result-container">
          {searchData.map((result, index) => (
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