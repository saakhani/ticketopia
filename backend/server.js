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
  database: 'signup',
});

// Check if the connection to the database is successful
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Sample endpoint for user registration
app.post('/Signup/signup', (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  // Perform validation if needed

  // Insert data into MySQL database
  const sql = 'INSERT INTO login (firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
  const values = [firstname, lastname, email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('User registered successfully');
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
