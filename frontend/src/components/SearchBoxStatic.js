import React, { useState } from 'react';
import "../styles/components/SearchBoxStatic.css";
import images from '../assets/Images.js';
import PropTypes from "prop-types";


function SearchBoxStatic({inputQuery}) {
  // State to manage the input value
  const [inputValue, setInputValue] = useState(inputQuery);

  // Event handler to update the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    //onInputChange(event.target.value);
  };

  const searchButtonEvent = () => {
    onSearch(inputValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  const onSearch = (inputValue) => {
    //alert("searching for " + inputValue);
    if (inputValue === '') {
      alert("Please enter a search term")
    }
    else{
      window.location.href = '/Search/' + inputValue;
    }
  }


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
            src={images.search_icon}
            alt="Search Button"
        />
      </button>
    </div>
  );
}

SearchBoxStatic.propTypes = {
  inputQuery: PropTypes.string.isRequired,
};

export default SearchBoxStatic;
