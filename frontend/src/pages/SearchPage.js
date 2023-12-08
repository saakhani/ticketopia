import React, { useState, useEffect } from 'react';
import "../styles/pages/SearchPage.css";
import SearchResultCard from "../components/SearchResultCard.js";
import Header from '../components/Header.js';
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const params = useParams();
  const [searchQuery] = useState(params.SearchBoxQuery);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchQuery }),
    })
      .then(response => response.json())
      .then(data => {
        const searchData = data.map(item => {
          return {
            eventID: item.event_id,
            title: item.event_name,
            venue: item.venue,
            description: item.description,
          };
        });

        setSearchResults(searchData);
      })
      .catch(error => console.error('Error fetching search results:', error));
  }, [searchQuery]);

  return (
    <div className="search-page">
      <div className="search-header">
        <Header inputQueryHeader={searchQuery} />
      </div>
      <div className="search-result-container">
        {searchResults.map((searchResult) => (
          <SearchResultCard eventDetailsH={searchResult} key={searchResult.eventID} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
