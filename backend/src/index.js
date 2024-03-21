const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const port = 3001;
const app = express();

app.use(cors()); // This will allow all CORS requests. Customize as needed.

// Create a connection pool
const pool = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: 'rootpassword',
  database: 'todolist_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Helper function to query the database
function queryDatabase(sql, callback) {
  pool.query(sql, (error, results, fields) => {
    callback(error, results);
  });
}

app.get('/', (req, res) => {
  res.send('Welcome to the Todo List API!');
});

app.get('/todos', (req, res) => {
  queryDatabase('SELECT * FROM todos', (error, results) => {
    if (error) {
      return res.status(500).send('Error executing the query');
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
