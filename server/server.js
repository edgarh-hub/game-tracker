const express = require('express');
const mysql = require('sqlite3');
const cors = require('cors');

const app = express(); 
app.use(cors());
app.use(express.json());

// error message and connection success messages. 
const db = new sqlite3.Database('./game.db', (err) => {
  if (err) {
    console.error('Database failed to connect', err.message);
  } else {
    console.log('Database connected');
  }
});

// creates table if it doesnt exisit 
db.run(`CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  genre TEXT,
  status TEXT
)`);


