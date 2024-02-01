const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: '52.2.63.46',
  user: 'newuser', 
  password: 'password', 
  database: 'exampledb',
  port: 3306
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});

app.get('/', (req, res) => {
   res.json("Hello from server!");
});

app.get('/categories', (req, res) => {
  connection.query('SELECT * FROM categories', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
