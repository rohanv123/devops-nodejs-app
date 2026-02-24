const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: 'root',
  password: 'root',
  database: 'testdb'
});

app.get('/', (req, res) => {
  res.send("DevOps CI/CD Pipeline Working Successfully!");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
