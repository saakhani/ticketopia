// SearchResultCard.js

import React from 'react';
import './SearchResultCard.css'; // Import the CSS file
import { Outlet, Link } from "react-router-dom";

const SearchResultCard = ({ titleH, venueH, descriptionH, imgSrcH }) => {
  const eventDetails = {
    title: titleH,
    venue: venueH,
    description: descriptionH,
    imgSrc: imgSrcH
  };


  return (
    <div className="search-result-card">
      <div className="result-image">
        <img src={eventDetails.imgSrc} alt="placeholder" />
      </div>
      <div className="result-title">{eventDetails.title}</div>
      <div className="result-venue">{eventDetails.venue}</div>
      <div className="result-description">{eventDetails.description}</div>
      <Link to={{pathname: "/EventPage", state: eventDetails}} className="result-link">
        Book Now
      </Link>
    </div>
  );
};

export default SearchResultCard;
