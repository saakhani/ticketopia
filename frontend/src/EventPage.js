import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker'; // Assuming you're using react-datepicker
import images from "./images.js";
import "./EventPage.css";
import './custom-datepicker.css';

import Header from "./Header.js";

const EventPage = () => {
    const eventDetails ={
        title: "ABC Event",
        venue: "XYZ Venue",
        //generate 100 words of lorem ipsum
        description: " Immerse yourself in a variety of engaging activities that cater to every interest and age group. From interactive workshops and live performances to delicious culinary delights, there's something for everyone.",
        imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959"
      };

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [ticketType, setTicketType] = useState('');
    const [ticketPrice, setTicketPrice] = useState(0);
    const [numTickets, setNumTickets] = useState(1);
    
    // Assuming these are your event times
    // const eventTimes = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM'];
    const eventTimes = [];
    
    // Ticket prices
    const prices = {
        'VIP': 100, // Example price for VIP
        'General': 50 // Example price for General
    };

    const DateCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="date-custom-input" onClick={onClick} ref={ref}>
          {value || 'Select Date'}
        </button>
      ));
    
    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };
    
    const handleTicketTypeChange = (e) => {
        setTicketType(e.target.value);
        setTicketPrice(prices[e.target.value]);
    };
    
    const handleCheckout = () => {
        // Implement checkout logic
        console.log("Checking out", {selectedDate, selectedTime, ticketType, numTickets});
    };
    
    


    return(
        <div className="event-page">
            <div className="header">
                <Header />
            </div>
            <h1>Event Details</h1>
            <div className='event-body'>
                <div className="event-details">
                <img src = {eventDetails.imgSrc} className = "event-image" 
                alt="Event Image" height={400} width={600}/>
                <h2 className="event-name">
                    {eventDetails.title}
                </h2>
                <div className="event-venue">
                    <img className="location-icon" alt="icon for location" src={images.location_icon}/>
                    <div className="venue-name">
                        {eventDetails.venue}
                    </div>
                </div>
                <p className="event-description">
                    {eventDetails.description}
                </p>
                </div>
                <div className="book-event">
                    <h3>select date and time</h3>
                    <div className="date-and-time">
                    <div className = "date-picker">
                        <DatePicker 
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat="MMMM d, yyyy"
                            minDate={new Date()}
                            customInput={<DateCustomInput />}
                        />
                    </div>
                <div className="time-selector">
                    {eventTimes == [] ? eventTimes.map(time => (
                        <button key={time} onClick={() => handleTimeSelect(time)} className={selectedTime === time ? 'selected' : 'deselected'}>
                            {time}
                        </button>
                    )): <div className='no-times'>no timings found for selected date</div>
                }
                </div>
                        </div>

                <select value={ticketType} onChange={handleTicketTypeChange}>
                    <option value="">Select Ticket Type</option>
                    <option value="VIP">VIP - ${prices.VIP}</option>
                    <option value="General">General - ${prices.General}</option>
                </select>
                <input type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} min="1" />
                <button className='checkout-button' onClick={handleCheckout}>checkout</button>
                </div>
            </div>
        </div>
    )

}

export default EventPage;
