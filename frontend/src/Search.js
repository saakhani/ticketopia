
import React, { useState} from 'react';
import "./Search.css";
import "./images.js";
import SearchResultCard from "./SearchResultCard.js";
import Header from './Header.js';
import { useParams } from "react-router-dom";

  
const Search = () => {

  

  const params = useParams();
  const [searchQuery] = useState(params.SearchBoxQuery);

  //@Mariam add code here to fetch data from backend Store it in searchData. Please use a for loop/other methods
  //to change the variable names of the extracted data from the sql queries to match the following entry
  // {
  //   eventID: {},
  //   title: {},
  //   venue: {},
  //   description: {},
  //   imgSrc: {}
  // },

  const searchData = [
    {
      eventID: 1,
      title: "Event 1",
      venue: "Venue 1",
      description: "Description 1",
      imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959"
    },
    {
      eventID: 2,
      title: "Event 2",
      venue: "Venue 2",
      description: "Description 2",
      imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959"
    },
    {
      eventID: 3,  
      title: "Event 3",
      venue: "Venue 3",
      description: "Description 3",
      imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959"
    },
    {
      eventID: 4,  
      title: "Event 4",
      venue: "Venue 4",
      description: "Description 4",
      imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959"
    },
    {
      eventID: 5,  
      title: "Event 5",
      venue: "Venue 5",
      description: "Description 5",
      imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959"
    },
    {
      eventID: 6,  
      title: "Event 6",
      venue: "Venue 6",
      description: "Description 6",
      imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959"
    },
    {
      eventID: 7,  
      title: "Event 7",
      venue: "Venue 7",
      description: "Description 7",
      imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959"
    }
    // Add more search results as needed
  ];

  const [searchResults, setSearchResults] = useState(searchData);

  return (
    <div className="search-page">
      <div className="search-header">
        <Header inputQueryHeader={searchQuery} />
      </div>
      <div className="search-result-container">
        {searchResults.map((searchResult) => (
          <SearchResultCard eventDetailsH={searchResult}/>
        ))}
      </div>
    </div>
  );
};  

export default Search;