import React, { useState } from 'react';
import "./UserInputBox.css";
import images from './images.js';
import PropTypes from "prop-types";


function UserInputBox({ onSearch, onInputChange }) {
  // State to manage the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };

  const searchButtonEvent = () => {
    onSearch(inputValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };


  return (
    <div className='search-wrapper'>
      <div className='search-input'>
      {/* Input box with an event handler */}
      <input
        className='input-box'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="search for an event"
        onKeyPress={handleKeyPress}
      />
      {/* Display the input value */}
      {/* <p>You typed: {inputValue}</p> */}
      </div>
      <button
        className="search-button"
        onClick={searchButtonEvent}
        //</div>disabled={!isTextBoxFocused}
        >
        <img 
            className="search-image"
            src={images.search}
            alt="Search Button"
        //   style={{ width: '100px', height: 'auto' }} // Adjust the styling as needed
        />
      </button>
    </div>
  );
}

UserInputBox.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default UserInputBox;
