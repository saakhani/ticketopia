const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 8081;

const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Enter your MySQL password
  database: 'se',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/search', (req, res) => {
  const searchQuery = req.body.searchQuery;

  let sql;
  let query;

  if (searchQuery.toLowerCase() === 'all') {
    // If searchQuery is 'all', retrieve all records
    sql = `
      SELECT event_id, event_name, venue, header_img
      FROM eventlist
    `;
  } else {
    // Otherwise, filter records based on case-insensitive event_name or venue
    sql = `
      SELECT event_id, event_name, venue, header_img
      FROM eventlist
      WHERE LOWER(event_name) LIKE ? OR LOWER(venue) LIKE ?
    `;
    query = '%' + searchQuery.toLowerCase() + '%';
  }

  db.query(sql, query ? [query, query] : [], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.post('/eventDetails', (req, res) => {
  const eventID = req.body.eventID;

  // Fetch event details
  const fetchEventDetails = () => {
    return new Promise((resolve, reject) => {
      const detailsSql = `
        SELECT event_id, event_name, venue, vip_fare, general_fare, header_img
        FROM eventlist
        WHERE event_id = ?
      `;
      db.query(detailsSql, [eventID], (err, detailsResults) => {
        if (err) {
          reject(err);
        } else {
          resolve(detailsResults[0]);
        }
      });
    });
  };

  // Fetch event status
  const fetchEventStatus = () => {
    return new Promise((resolve, reject) => {
      const statusSql = `
        SELECT event_date, total_vip_tickets, total_general_tickets, vip_tickets_booked, general_tickets_booked, event_time
        FROM eventstatus
        WHERE event_id = ?
      `;
      db.query(statusSql, [eventID], (err, statusResults) => {
        if (err) {
          reject(err);
        } else {
          resolve(statusResults[0]);
        }
      });
    });
  };

  Promise.all([fetchEventDetails(), fetchEventStatus()])
    .then(([eventDetails, eventStatus]) => {
      const eventData = {
        imgSrc: eventDetails.header_img,
        title: eventDetails.event_name,
        venue: eventDetails.venue,
        description: eventDetails.event_description,
        vipPrice: eventDetails.vip_fare,
        generalPrice: eventDetails.general_fare,
        eventStatus: {
          eventTimes: [eventStatus.event_time], // Modify this based on your event status structure
          stringDates: [eventStatus.event_date.toISOString()], // Modify this based on your event status structure
          totalVipTickets: eventStatus.total_vip_tickets,
          totalGeneralTickets: eventStatus.total_general_tickets,
        },
      };

      res.json(eventData);
    })
    .catch((error) => {
      console.error('Error fetching event details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post('/bookTicket', (req, res) => {
  const { eventID, bookingDate, bookingTime, name, email, phone, category } = req.body;

  // Execute the bookEvent procedure in the database
  const executeBookEventProcedure = () => {
    return new Promise((resolve, reject) => {
      const bookEventProcedure = `
        CALL bookEvent(?, ?, ?, ?, ?, ?, ?);
      `;

      db.query(
        bookEventProcedure,
        [eventID, bookingDate, bookingTime, name, email, phone, category,],
        (err, results) => {
          if (err) {
            // Handle specific SQLSTATE errors or check result values
            if (err.code === '45000') {
              // This is where you handle the specific error
              return reject({ error: true, message: err.message });
            }
            

            // Handle other errors if needed
            return reject(err);
          }

          // Check results to determine success or other conditions
          // Modify this based on what your stored procedure returns
          const success = results && results.affectedRows > 0;

          if (success) {
            resolve({ success: true, message: 'Booking successful' });
          } else {
            reject({ error: true, message: 'Booking failed' });
          }
        }
      );
    });
  };

  // Execute the entire booking procedure
  executeBookEventProcedure()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error('Error booking ticket:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


app.post('/insertData', (req, res) => {
  const { name, email, phone, password } = req.body;

  // Handle the request and insert data into the 'signup' table
  const sql = 'INSERT INTO signup (name, email, phone, password) VALUES (?, ?, ?, ?)';

  // Assuming you have a database connection named 'db'
  db.query(sql, [name, email, phone, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }

    console.log('Data inserted successfully');
    res.status(201).json({ success: true, message: 'Data inserted successfully' });
  });
});



app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Execute the loginProcedure stored procedure in the database
  const loginProcedure = 'CALL loginProcedure(?, ?)';
  db.query(loginProcedure, [email, password], (error, results) => {
    if (error) {
      console.error('Error calling loginProcedure stored procedure:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

    // Assuming loginProcedure procedure doesn't return a message on success
    res.status(200).json({ success: true });
  });
});









app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
