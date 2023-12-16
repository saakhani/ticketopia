import React, { useEffect, useState } from 'react';
import '../styles/pages/UserPage.css';
import {useAuth} from '../contexts/AuthContext.js';
import Header from '../components/Header.js';
import axios from 'axios';

const UserPage = () => {

	function getImage(imgSrc) {
    try {
      return require(`../assets/profile-pictures/${imgSrc}`);
    } catch (err) {
      return require('../assets/profile-pictures/dummy.jpg');
    }
  }

  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
	const [eventHistory, setEventHistory] = useState([]);


  const userDetails = {
    name: user.name,
    email: user.email,
    phone: user.phone,
 };

//     // Example user data
//     useEffect(() => {
//     const userDetails = {
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//     };
//     setLoading(false);
//   }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8081/fetchTableBooking', {
          email: user.email,
        });

        const { success, data } = response.data;

        if (success) {
          // Process the data and set it in the state
          const processedData = data.map((booking) => ({
            bookingId: `B${booking.booking_id}`,
            eventName: booking.event_name,
            eventDate: booking.booking_date,
            eventTime: booking.booking_time,
            ticketCategory: booking.category,
            seatsBooked: booking.seatsBooked,
            price: `$${booking.price}`,
            status: booking.status,
          }));

          setEventHistory(processedData);
        } else {
          // Handle error
          console.error('Error fetching data:', response.data.message);
        }
      } catch (error) {
        console.error('Error during API call:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
   }, [user.email]);

  
  	//@SAAD: here i want to make request to serve using 'email' to fetch bookings from booking table. use user.email for this it will update after you login. 
    // Example event history data, get this from the server depending on user email
    // const eventHistory = [
    //     { bookingId: "B001", eventName: "Concert", eventDate: "2022-07-10", eventTime: "19:00", ticketCategory: "VIP", seatsBooked: 2, price: "$100", status: "Confirmed" },
    //     { bookingId: "B002", eventName: "Concert", eventDate: "2022-07-10", eventTime: "19:00", ticketCategory: "General", seatsBooked: 3, price: "$50", status: "Confirmed" },
    // ];

    if (loading) {
      return <div class="loading">loading...</div>;
    }

    return (
      <div className="user-page">
				<div className="header">
        	<Header inputQueryHeader={""}/>
      	</div>
				<div className="user-page-content">
          <h1 className='user-details-heading'>User Details</h1>
					<div className="user-details-content">
						<div className="user-image">
							{userDetails.email && (
								<img className = "profile-image-user-page" src={getImage(user.imgSrc)} alt="Profile" />
							)}
							{!userDetails.email && (
								<img className = "profile-image-user-page" src={require(`../assets/profile-pictures/dummy.jpg`)} alt="Profile" />
							)}
								</div>
						<div className="user-details">
							<p className='user-details-name'>{userDetails.name}</p>
							<p className='user-details-email'>{userDetails.email}</p>
							<p className='user-details-phone'>{userDetails.phone}</p>
						</div>		
					</div>
					<div className="event-details-content">
						<h2 className="event-details-heading">Event History</h2>
						<div className="event-history-table">
							<table>
								<thead>
									<tr>
										<th>Booking ID</th>
										<th>Event Name</th>
										<th>Event Date</th>
										<th>Event Time</th>
										<th>Ticket Category</th>
										<th>Seats Booked</th>
										<th>Price</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									{eventHistory.map((event, index) => (
										<tr key={index}>
												<td>{event.bookingId}</td>
												<td>{event.eventName}</td>
												<td>{event.eventDate}</td>
												<td>{event.eventTime}</td>
												<td>{event.ticketCategory}</td>
												<td>{event.seatsBooked}</td>
												<td>{event.price}</td>
												<td>{event.status}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
      </div>
    );
};

export default UserPage;