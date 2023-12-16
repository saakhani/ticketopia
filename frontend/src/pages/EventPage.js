import React, { useState, useEffect, forwardRef} from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import images from '../assets/Images.js';
import '../styles/pages/EventPage.css';
import '../styles/components/CustomDatePicker.css';

import Header from '../components/Header.js';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js';

const EventPage = () => {
  const params = useParams();
  const eventID = params.EventID;

  const [loading, setLoading] = useState(true);
  const { isLoggedIn, user } = useAuth();
  const [isEvent, setIsEvent] = useState(true);

  const [eventDetails, setEventDetails] = useState({

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
  const [name, setName] = useState(isLoggedIn ? user.name : '');
  const [email, setEmail] = useState(isLoggedIn ? user.email : '');
  const [phone, setPhone] = useState(isLoggedIn ? user.phone : '');
  

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

            setEventDetails({
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

          setTicketType('General');
          setTicketPrice(eventData.generalPrice);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching event details:', error);
        setEventDetails({
          title: 'Event Not Found',
          venue: '',
          description: '',
          vipPrice: 0,
          generalPrice: 0,
        });
        setLoading(false);
        setIsEvent(false);
      })
  }, [eventID])

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
    setTicketPrice(e.target.value === 'VIP' ? eventDetails.vipPrice : eventDetails.generalPrice);
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
         bookingTime: selectedTime,
         name, 
         email,   
         phone,
         category: ticketType,
         
       })
       .then((response) => {
         // Handle the booking response (success or failure)
         if (response.data.success) {
           // Booking successful, redirect to BookedPage
           window.location.href = '/event/success';
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

  if (loading) {
    return <div class="loading">loading...</div>;
  }

  return (
    <div className="event-page">
      <div className="header">
        <Header inputQueryHeader={""} />
      </div>
      <h1>Event Details</h1>
      <div className="event-body">
        <div className="event-details">
            <img src={require(`../assets/event-images/${eventDetails.title.toLowerCase().replace(/ /g, '_')}.jpg`)} className="event-image" alt="Event" height={400} width={600} />
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
              <option value="General">General - ${eventDetails.generalPrice}</option>
                <option value="VIP">VIP - ${eventDetails.vipPrice}</option>
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
          {!isLoggedIn && (
            <div className="user-info">
              <input className="user-name-input" type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
              <input className="user-email-input" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
              <input className="user-phone-input" type="text" placeholder="phone" onChange={(e) => setPhone(e.target.value)} />
            </div>
          )}
          {isLoggedIn && (
            <div className="user-info">
              <input className="user-name-input" type="text"  value = {user.name} disabled onChange={(e) => setName(e.target.value)} />
              <input className="user-email-input" type="text" value = {user.email} disabled onChange={(e) => setEmail(e.target.value)} />
              <input className="user-phone-input" type="text" value = {user.phone} disabled onChange={(e) => setPhone(e.target.value)} />
            </div>
          )}
          {isEvent && (
            <div className="total-price">
              <p className="price-label">Total Price: ${ticketPrice * numTickets}</p>
                <button className="checkout-button" onClick={handleCheckout}>
                  checkout
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
