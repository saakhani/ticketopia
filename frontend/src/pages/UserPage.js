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

    // Example event history data
    const eventHistory = [
        { bookingId: "B001", eventName: "Concert", eventDate: "2022-07-10", eventTime: "19:00", ticketCategory: "VIP", seatsBooked: 2, price: "$100", status: "Confirmed" },
        { bookingId: "B002", eventName: "Concert", eventDate: "2022-07-10", eventTime: "19:00", ticketCategory: "General", seatsBooked: 3, price: "$50", status: "Confirmed" },
    ];

    if (loading) {
      return <div class="loading">loading...</div>;
    }

    return (
        <div className="user-details">
          <Header />
            <h1>User Details</h1>
            <img className = "profile-image" src={require(`../assets/profile-pictures/${userDetails.email}.jpg`)} alt="Profile" />
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
            <p>Phone: {userDetails.phone}</p>

            <h2>Event History</h2>
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
    );
};

export default UserPage;