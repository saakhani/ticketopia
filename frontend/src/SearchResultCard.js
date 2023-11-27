// SearchResultCard.js

import React from 'react';
import './SearchResultCard.css'; // Import the CSS file

const SearchResultCard = ({ title, description, link }) => {
  return (
    <div className="search-result-card">
      <div className="result-title">{title}</div>
      <div className="result-description">{description}</div>
      <a href={link} className="result-link" target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default SearchResultCard;
