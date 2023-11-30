import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker'; // Assuming you're using react-datepicker
import { addDays } from "date-fns";
import images from "./images.js";
import "./EventPage.css";
import './custom-datepicker.css';

import Header from "./Header.js";
import { useParams } from 'react-router-dom';

const EventPage = () => {
    const params = useParams();
    const eventID = params.EventID;

    const dates = []
    
    //Dummy Data, to be commented out once database is available 
    
    const searchData = [
        {
          eventID: 1,
          title: "Event 1",
          venue: "Venue 1",
          description: "Description 1",
          imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959",
          vipPrice: 100,
          generalPrice: 50
        },
        {
          eventID: 2,
          title: "Event 2",
          venue: "Venue 2",
          description: "Description 2",
          imgSrc: "https://dummyimage.com/600x400/bdbdbd/595959",
					vipPrice: 100,
          generalPrice: 50
        }
        // Add more search results as needed
      ];

    const eventDetails = searchData.filter(event => event.eventID == eventID)[0];

    // @ Marium modify the event status table, so that it also has a String field for time. Add this to primary key
    // @ Mariam from the event list table, extract imgSrc, Event Name, venue, description, general price, VIP price into the following dictionary below

    // const eventDetails = {
    //     'imgSrc': {},
    //     'title':{},
    //     'venue':{},
    //     'description':{},
    //     'vipPrice': {},
    //     'generalPrice': {}
    // };

    //@ Marium from the eventStatus table, list the dates and time with the correct eventID into each respective array below. 
    const eventTimes = [];
    const stringDates = []
    
    for (var stringdate in stringDates){
      dates.append(new Date(stringdate));
    }


    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [ticketType, setTicketType] = useState('VIP');
    const [ticketPrice, setTicketPrice] = useState(eventDetails.vipPrice);
    const [numTickets, setNumTickets] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    
    // Ticket prices
    const prices = {
        'VIP': eventDetails.vipPrice,
        'General': eventDetails.generalPrice 
    };

    const DateCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="date-custom-input" onClick={onClick} ref={ref}>
          {value || 'select date'}
        </button>
      ));
    
    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    
    const handleTicketTypeChange = (e) => {
        setTicketType(e.target.value);
        setTicketPrice(prices[e.target.value]);
    };
    
    const handleCheckout = () => {
        // Implement checkout logic
        if (!selectedDate) {
            alert('Please select a date');
        }
        else if (!selectedTime) {
            alert('Please select a time');
        }
        else if (!ticketType) {
            alert('Please select a ticket type');
        }
        else if (name == '') {
            alert('Please enter your name');
        }
        else if (email == '') {
            alert('Please enter your email');
        }
        else if (phone == '') {
            alert('Please enter your phone number');
        }
        else{
						// @Mariam execute the booking procedure here. The values are given above. Please make sure that the procedure addresses the change in eventStatus table.  
            window.location.href = '/EventPage/BookedPage';
        }
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
                                includeDates = {dates}
                                customInput={<DateCustomInput />}
                            />
                        </div>
                        <div className="time-selector">
                        {
                            eventTimes.length > 0 ? eventTimes.map(time => (
                            <button key={time} onClick={() => handleTimeSelect(time)} className={selectedTime === time ? 'selected' : 'deselected'}>
                                {time}
                            </button>
                            )): <div className='no-times'>no timings found for selected date</div>
                        }
                        </div>
                    </div>
                    <h3>select tickets</h3>
                    <div className="ticket-information">
                        <div className='ticket-selector'>
                            <p className='ticket-type-label'>Ticket Type</p>
                            <select value={ticketType} onChange={handleTicketTypeChange}>
                                {/* <option value="">select ticket type</option> */}
                                <option value="VIP">VIP - ${prices.VIP}</option>
                                <option value="General">General - ${prices.General}</option>                                
                            </select>
                        </div>
                        <div className='ticket-quantity'>
                            <p className='quantity-label'>Quantity</p>
                            <input className='quantity-input' type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} min="1" max="10"/>
                        </div>
                    </div>
                    <h3>enter your information</h3>
                    <div className="user-info">
                        <input className='user-name' type="text" placeholder="name"  onChange={handleNameChange}/>
                        <input className= 'user-email' type="text" placeholder="email" onChange={handleEmailChange}/>
                        <input className = "user-phone" type="text" placeholder="phone" onChange={handlePhoneChange}/>
                    </div>
                    <div className="total-price">
                        <p className="price-label">Total Price: ${ticketPrice * numTickets}</p>
                        <button className='checkout-button' onClick={handleCheckout}>checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default EventPage;
