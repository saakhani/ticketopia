import React from "react";
import images from "./images.js";
import "./EventPage.css";

import Header from "./Header.js";

const EventPage = () => {

    const eventDetails ={
        title: "ABC Event",
        venue: "XYZ Venue",
        //generate 100 words of lorem ipsum
        description: " Immerse yourself in a variety of engaging activities that cater to every interest and age group. From interactive workshops and live performances to delicious culinary delights, there's something for everyone.",
        imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959"
      };


    return(
        <div className="event-page">
            <div className="header">
                <Header />
            </div>
            <h1>Event Details</h1>
            <div className="event-details">
                <img src = {eventDetails.imgSrc} className = "event-image" 
                alt="Event Image" height={400} width={600}/>
                <h2 className="event-name">
                    {eventDetails.title}
                </h2>
                <div className="event-venue">
                    <img className="location-icon" alt="icon for location" src={images.location_icon}/>
                    {eventDetails.venue}
                </div>
                <p className="event-description">
                    {eventDetails.description}
                </p>
            </div>
        </div>
    )

}

export default EventPage;
