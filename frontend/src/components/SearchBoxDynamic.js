import React, { useState } from 'react';
import "../styles/components/SearchBoxDynamic.css";
import images from '../assets/Images.js';


function SearchBoxDynamic() {
  // State to manage the input value
  const [inputValue, setInputValue] = useState('');

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
      window.location.href = '/search/' + inputValue;
    }
  }

  return (
    <div className='search-wrapper'>
      <input
        className='input-box'
        type="text"
        value={inputValue}          
        onChange={handleInputChange}
        placeholder="search for an event"
        onKeyPress={handleKeyPress}
      />
      <button
        className="search-button"
        onClick={searchButtonEvent}>
        <img 
            className="search-image"
            src={images.search_icon}
            alt="Search Button"
        //   style={{ width: '100px', height: 'auto' }} // Adjust the styling as needed
        />
      </button>
    </div>
  );
}

SearchBoxDynamic.propTypes = {};

export default SearchBoxDynamic;
