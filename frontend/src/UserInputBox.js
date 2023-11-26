import React, { useState } from 'react';
import "./UserInputBox.css";

function UserInputBox() {
  // State to manage the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='search-box'>
      {/* Input box with an event handler */}
      <input
        className='input-box'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="search for an event"
      />

      {/* Display the input value */}
      {/* <p>You typed: {inputValue}</p> */}
    </div>
  );
}

export default UserInputBox;
