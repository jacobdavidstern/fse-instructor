// server.js
import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.get('/api/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  const response = await fetch(
    `https://example.com/stocks/${symbol}?apikey=${API_KEY}`
  );
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
