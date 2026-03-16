// server.js

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// Cors first
app.use(
  cors({
    origin: [
      'https://fullstack-stocktracker.vercel.app',
      'http://127.0.0.1:5500',
    ],
  })
);

// Optional: JSON parsing
app.use(express.json());

// Routes
app.get('/api/stock/quote', async (req, res) => {
  const symbol = req.query.symbol;
  const response = await fetch(
    `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API_KEY}`
  );
  const data = await response.json();
  res.json(data);
});

app.get('/api/stock/search', async (req, res) => {
  const name = req.query.name;
  const response = await fetch(
    `https://api.twelvedata.com/stocks?name=${name}&apikey=${API_KEY}`
  );
  const data = await response.json();
  res.json(data);
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({
    status: 'ok',
    apiKeyLoaded: Boolean(process.env.API_KEY),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
