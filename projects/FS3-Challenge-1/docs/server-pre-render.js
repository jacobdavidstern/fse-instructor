// server.js
require('dotenv').config();
require('dotenv').config({ path: '.env.local', override: true });

const express = require('express');
const app = express();

app.get('/api/jamendo', async (req, res) => {
  try {
    const url =
      'https://api.jamendo.com/v3.0/tracks/?format=json' +
      '&client_id=' +
      process.env.JAMENDO_CLIENT_ID +
      '&' +
      new URLSearchParams(req.query).toString();

    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error('Jamendo proxy error', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
});
