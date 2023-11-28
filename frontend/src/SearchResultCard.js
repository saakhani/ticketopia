// SearchResultCard.js

import React from 'react';
import './SearchResultCard.css'; // Import the CSS file

const SearchResultCard = ({ title, venue, description, link }) => {
  return (
    <div className="search-result-card">
      <div className="result-image">
        <img src="https://dummyimage.com/600x400/bdbdbd/595959" alt="placeholder" />
      </div>
      <div className="result-title">{title}</div>
      <div className="result-venue">{venue}</div>
      <div className="result-description">{description}</div>
      <a href={link} className="result-link" target="_blank" rel="noopener noreferrer">
        Book Now
      </a>
    </div>
  );
};

export default SearchResultCard;
