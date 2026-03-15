// server.js

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.use(
  cors({
    origin: 'http://127.0.0.1:5500',
  })
);

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
