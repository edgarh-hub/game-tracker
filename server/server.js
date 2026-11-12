const express = require('express');
const sqlite3 = require('sqlite3');
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

// API stuff, first one is GET 
app.get('/api/games', (req, res) => {
  const sql = 'SELECT * FROM games';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// tell it which port to use
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});

// POST API 
app.post('/api/games', (req, res) => {
  db.run('INSERT INTO games (title, genre, status) VALUES (?, ?, ?)', [req.body.title, req.body.genre, req.body.status], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// PUT API
app.put('/api/games/:id', (req, res) => {
  db.run('UPDATE games SET title = ?, genre = ?, status = ? WHERE id = ?', [req.body.title, req.body.genre, req.body.status, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// DELETE API
app.delete('/api/games/:id', (req, res) => {
  db.run('DELETE FROM games WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});
