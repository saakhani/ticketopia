import React, { useEffect, useState } from 'react';
import '../styles/pages/UserPage.css';
import {useAuth} from '../contexts/AuthContext.js';
import Header from '../components/Header.js';

const UserPage = () => {

  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const userDetails = {
    name: user.name,
    email: user.email,
    phone: user.phone,
};

    // Example user data
    useEffect(() => {
    const userDetails = {
        name: user.name,
        email: user.email,
        phone: user.phone,
    };
    setLoading(false);
  }, []);

    // Example event history data, get this from the server depending on user email
    const eventHistory = [
        { bookingId: "B001", eventName: "Concert", eventDate: "2022-07-10", eventTime: "19:00", ticketCategory: "VIP", seatsBooked: 2, price: "$100", status: "Confirmed" },
        { bookingId: "B002", eventName: "Concert", eventDate: "2022-07-10", eventTime: "19:00", ticketCategory: "General", seatsBooked: 3, price: "$50", status: "Confirmed" },
    ];

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
								<img className = "profile-image-user-page" src={require(`../assets/profile-pictures/${userDetails.email}.jpg`)} alt="Profile" />
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