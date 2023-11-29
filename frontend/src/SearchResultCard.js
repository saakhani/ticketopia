// SearchResultCard.js

import React from 'react';
import './SearchResultCard.css'; // Import the CSS file
import { Outlet, Link } from "react-router-dom";

const SearchResultCard = ({ eventDetailsH }) => {
  const eventDetails = eventDetailsH;


  return (
    <div className="search-result-card">
      <div className="result-image">
        <img src={eventDetails.imgSrc} alt="placeholder" />
      </div>
      <div className="result-title">{eventDetails.title}</div>
      <div className="result-venue">{eventDetails.venue}</div>
      <div className="result-description">{eventDetails.description}</div>
      <Link className="result-link" to ={`/EventPage/${eventDetails.eventID}`} >
        Book Now
      </Link>
    </div>
  );
};

export default SearchResultCard;
