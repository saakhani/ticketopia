import React from "react";
import images from "./images.js";
import "./BookedPage.css";
import Header from "./Header.js";

import SearchBoxStatic from "./SearchBoxStatic.js";

const bookedPage = () => {

    const handleBackToHome = () => {
        // Implement back to home logic
        window.location.href = '/';
    }

    return(
        <div className="successful-booking-page">
            <div className="header">
                <Header />
            </div>
            <div className="successful-booking-body">
                <div className="successful-booking-message">
                    <h1>Booking Successful!</h1>
                    <p>You will shortly receive payment instructions on email.</p>
                </div>
                <button className="back-to-home-button" onClick={handleBackToHome}>
                    back to home
                </button>
            </div>
        </div>
    )

}

export default bookedPage;
