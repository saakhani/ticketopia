import React, { useState } from 'react';
import "./UserInputBox.css";
import images from './images.js';


function UserInputBox() {
  // State to manage the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [isTextBoxFocused, setIsTextBoxFocused] = useState(false);
  const handleTextBoxFocus = () => {
    setIsTextBoxFocused(true);
  };


  const searchButtonEvent = () => {
    alert(`User Input: ${inputValue}`);
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
        onFocus={handleTextBoxFocus}
        placeholder="search for an event"
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

export default UserInputBox;
