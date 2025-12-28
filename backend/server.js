require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.get('/', (req, res) => {
  res.send('Memory Recap Backend with MongoDB is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
