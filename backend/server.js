// In your server.js or equivalent file
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 8081;

const cors = require('cors');

app.use(cors());


// Middleware to parse JSON data
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Enter your MySQL password
  database: 'se',
});

// Check if the connection to the database is successful
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


app.post('/search', (req, res) => {
  const searchQuery = req.body.searchQuery;

  
  const sql = `
    SELECT event_id, event_name, venue, vip_fare, general_fare
    FROM eventlist
    WHERE event_name LIKE ? OR venue LIKE ?
  `;
  
  const query = '%' + searchQuery + '%';
  db.query(sql, [query, query], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
