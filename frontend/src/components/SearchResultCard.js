// SearchResultCard.js

import React from 'react';
import '../styles/components/SearchResultCard.css'; // Import the CSS file
import { Outlet, Link } from "react-router-dom";
 
const SearchResultCard = ({ eventDetailsH }) => {
  const eventDetails = eventDetailsH;
 
  return (
    <div className="search-result-card">
      <div className="result-image">
        <img src={require(`../assets/event-images/${eventDetails.title.toLowerCase().replace(/ /g, '-')}.jpg`)} alt={`Event: ${eventDetails.title} at ${eventDetails.venue}`} />
      </div>
      <div className="result-title">{eventDetails.title}</div>
      <div className="result-venue">{eventDetails.venue}</div>
      <div className="result-description">{eventDetails.description}</div>
      <Link className="result-link" to={`/EventPage/${eventDetails.eventID}`}>
        Book Now
      </Link>
    </div>
  ); 
};
 
export default SearchResultCard;
 