import React, { useState, useEffect } from 'react';
import "../styles/pages/SearchPage.css";
import SearchResultCard from "../components/SearchResultCard.js";
import Header from '../components/Header.js';
import { useParams } from "react-router-dom";

// Import images statically
import artExhibitionImage from '../assets/event-images/art_exhibition.jpg';
import techConferenceImage from '../assets/event-images/tech_conference.jpg';
import foodFestivalImage from '../assets/event-images/food_festival.jpg';
import comedyNightImage from '../assets/event-images/comedy_night.jpg';
import fashionShowImage from '../assets/event-images/fashion_show.jpg';
import scienceExpoImage from '../assets/event-images/science_expo.jpg';
import fitnessExpoImage from '../assets/event-images/fitness_expo.jpg';
import craftFairImage from '../assets/event-images/craft_fair.jpg';
import gardenPartyImage from '../assets/event-images/garden_party.jpg';
import wellnessWorkshopImage from '../assets/event-images/wellness_workshop.jpg';


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
          // let imgSrc;

          // // Use a switch or if-else statement to select the correct image import
          // switch (item.event_name.toLowerCase()) {
          //   case 'art exhibition':
          //     imgSrc = artExhibitionImage;
          //     break;
          //   case 'tech conference':
          //     imgSrc = techConferenceImage;
          //     break;
          //   case 'food festival':
          //     imgSrc = foodFestivalImage;
          //     break;
          //   case 'comedy night':
          //     imgSrc = comedyNightImage;
          //     break;
          //   case 'fashion show':
          //     imgSrc = fashionShowImage;
          //     break;
          //   case 'science expo':
          //     imgSrc = scienceExpoImage;
          //     break;
          //   case 'fitness expo':
          //     imgSrc = fitnessExpoImage;
          //     break;
          //   case 'craft fair':
          //     imgSrc = craftFairImage;
          //     break;
          //   case 'garden party':
          //     imgSrc = gardenPartyImage;
          //     break;
          //   case 'wellness workshop':
          //     imgSrc = wellnessWorkshopImage;
          //     break;
          //   // Add more cases as needed

          //   default:
          //     imgSrc = ''; // Default image if no match
          //     break;
          // }

          return {
            eventID: item.event_id,
            title: item.event_name,
            venue: item.venue,
            description: item.description,
            // imgSrc: imgSrc,
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
