import React, { useState } from 'react';
import "./SearchBoxStatic.css";
import images from './images.js';
import PropTypes from "prop-types";


function SearchBoxStatic({ onSearch, onInputChange}) {
  // State to manage the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    //onInputChange(event.target.value);
  };

  const searchButtonEvent = () => {
    alert("button clicked")
    // onSearch(inputValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };


  //check if any element from search-wrapper is in focus or not
  const isTextBoxFocused = () => {
    return document.activeElement === document.getElementById("search-wrapper");
  };


  return (
    <div className='search-wrapper-static'>
      <input
        className='input-box-static'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="search for an event"
        onKeyPress={handleKeyPress}
      />
      {/* Display the input value */}
      {/* <p>You typed: {inputValue}</p> */}
      <button className='search-button-static' onClick={searchButtonEvent}>
        <img 
            className='search-image-static'
            src={images.search}
            alt="Search Button"
        />
      </button>
    </div>
  );
}

SearchBoxStatic.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default SearchBoxStatic;
