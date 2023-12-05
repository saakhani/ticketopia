import React, { useState, useEffect, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import axios from 'axios';
import images from './images.js';
import './EventPage.css';
import './custom-datepicker.css';

import Header from './Header.js';
import { useParams } from 'react-router-dom';

import artExhibitionImage from './images/art_exhibition.jpg';
import techConferenceImage from './images/tech_conference.jpg';
import foodFestivalImage from './images/food_festival.jpg';
import comedyNightImage from './images/comedy_night.jpg';
import fashionShowImage from './images/fashion_show.jpg';
import scienceExpoImage from './images/science_expo.jpg';
import fitnessExpoImage from './images/fitness_expo.jpg';
import craftFairImage from './images/craft_fair.jpg';
import gardenPartyImage from './images/garden_party.jpg';
import wellnessWorkshopImage from './images/wellness_workshop.jpg';



const EventPage = () => {
  const params = useParams();
  const eventID = params.EventID;

  const [eventDetails, setEventDetails] = useState({
    imgSrc: '',
    title: '',
    venue: '',
    description: '',
    vipPrice: 0,
    generalPrice: 0,
  });

  const [eventStatus, setEventStatus] = useState({
    eventTimes: [],
    stringDates: [],
    totalVipTickets: 0,
    totalGeneralTickets: 0,
  });

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [ticketType, setTicketType] = useState('VIP');
  const [ticketPrice, setTicketPrice] = useState(0);
  const [numTickets, setNumTickets] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const prices = {
    VIP: eventDetails.vipPrice,
    General: eventDetails.generalPrice,
  };

  const DateCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="date-custom-input" onClick={onClick} ref={ref}>
      {value || 'select date'}
    </button>
  ));

  useEffect(() => {
    // Fetch event details and status from the server
    axios
      .post('http://localhost:8081/eventDetails', { eventID })
      .then((response) => {
        const eventData = response.data;
  
        if (eventData) {
          
            let imgSrc;

            switch (eventData.title.toLowerCase()) {
                case 'art exhibition':
                  imgSrc = artExhibitionImage;
                  break;
                case 'tech conference':
                  imgSrc = techConferenceImage;
                  break;
                case 'food festival':
                  imgSrc = foodFestivalImage;
                  break;
                case 'comedy night':
                  imgSrc = comedyNightImage;
                  break;
                case 'fashion show':
                  imgSrc = fashionShowImage;
                  break;
                case 'science expo':
                  imgSrc = scienceExpoImage;
                  break;
                case 'fitness expo':
                  imgSrc = fitnessExpoImage;
                  break;
                case 'craft fair':
                  imgSrc = craftFairImage;
                  break;
                case 'garden party':
                  imgSrc = gardenPartyImage;
                  break;
                case 'wellness workshop':
                  imgSrc = wellnessWorkshopImage;
                  break;
                // Add more cases as needed
    
                default:
                  imgSrc = ''; // Default image if no match
                  break;
              }
    

            setEventDetails({
                imgSrc,
                title: eventData.title,
                venue: eventData.venue,
                description: eventData.description,
                vipPrice: eventData.vipPrice,
                generalPrice: eventData.generalPrice,
            });
        
  
          // Set event status details
          setEventStatus({
            eventTimes: eventData.eventStatus.eventTimes || [],
            stringDates: eventData.eventStatus.stringDates || [],
            totalVipTickets: eventData.eventStatus.totalVipTickets || 0,
            totalGeneralTickets: eventData.eventStatus.totalGeneralTickets || 0,
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching event details:', error);
      });
  }, [eventID])
  

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
    setTicketPrice(prices[e.target.value]);
    setNumTickets(1); // Reset numTickets when ticket type changes
  };

  const handleCheckout = () => {
    // Implement checkout logic
    if (!selectedDate) {
      alert('Please select a date');
    } else if (!selectedTime) {
      alert('Please select a time');
    } else if (!ticketType) {
      alert('Please select a ticket type');
    } else if (name === '') {
      alert('Please enter your name');
    } else if (email === '') {
      alert('Please enter your email');
    } else if (phone === '') {
      alert('Please enter your phone number');
    } else {
       // Execute the booking procedure here
       const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
       

       axios
       .post('http://localhost:8081/bookTicket', {
         eventID,
         bookingDate: dateString,
         name, // Convert date to string if needed    
         phone,
         category: ticketType,
         
       })
       .then((response) => {
         // Handle the booking response (success or failure)
         if (response.data.success) {
           // Booking successful, redirect to BookedPage
           window.location.href = '/EventPage/BookedPage';
         } else {
           // Booking failed, show an alert or handle accordingly
           alert('Booking failed. Please try again.');
         }
       })
       .catch((error) => {
         console.error('Error booking ticket:', error);
         alert(error);
       });
     
    }
  };

  return (
    <div className="event-page">
      <div className="header">
        <Header />
      </div>
      <h1>Event Details</h1>
      <div className="event-body">
        <div className="event-details">
          <img src={eventDetails.imgSrc} className="event-image" alt="Event Image" height={400} width={600} />
          <h2 className="event-name">{eventDetails.title}</h2>
          <div className="event-venue">
            <img className="location-icon" alt="icon for location" src={images.location_icon} />
            <div className="venue-name">{eventDetails.venue}</div>
          </div>
          <p className="event-description">{eventDetails.description}</p>
        </div>
        <div className="book-event">
          <h3>select date and time</h3>
          <div className="date-and-time">
            <div className="date-picker">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMMM d, yyyy"
                includeDates={eventStatus.stringDates.map((dateString) => new Date(dateString))}
                customInput={<DateCustomInput />}
              />
            </div>
            <div className="time-selector">
              {eventStatus.eventTimes.length > 0 ? (
                eventStatus.eventTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={selectedTime === time ? 'selected' : 'deselected'}
                  >
                    {time}
                  </button>
                ))
              ) : (
                <div className="no-times">no timings found for selected date</div>
              )}
            </div>
          </div>
          <h3>select tickets</h3>
          <div className="ticket-information">
            <div className="ticket-selector">
              <p className="ticket-type-label">Ticket Type</p>
              <select value={ticketType} onChange={handleTicketTypeChange}>
                <option value="VIP">VIP - ${prices.VIP}</option>
                <option value="General">General - ${prices.General}</option>
              </select>
            </div>
            <div className="ticket-quantity">
              <p className="quantity-label">Quantity</p>
              <input
                className="quantity-input"
                type="number"
                value={numTickets}
                onChange={(e) => setNumTickets(e.target.value)}
                min="1"
                max={ticketType === 'VIP' ? eventStatus.totalVipTickets : eventStatus.totalGeneralTickets}
              />
            </div>
          </div>
          <h3>enter your information</h3>
          <div className="user-info">
            <input className="user-name" type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <input className="user-email" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input className="user-phone" type="text" placeholder="phone" onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="total-price">
            <p className="price-label">Total Price: ${ticketPrice * numTickets}</p>
            <button className="checkout-button" onClick={handleCheckout}>
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
