// server.js
require('dotenv').config();
require('dotenv').config({ path: '.env.local', override: true });

const express = require('express');
const path = require('path');
const app = express();

// API ROUTE must be FIRST
app.get('/api/album', async (req, res) => {
  try {
    const albumId = req.query.album_id;
    if (!albumId) {
      return res.status(400).json({ error: 'Missing album_id' });
    }

    const albumUrl =
      'https://api.jamendo.com/v3.0/albums/?format=json' +
      '&client_id=' +
      process.env.JAMENDO_CLIENT_ID +
      '&id=' +
      albumId;
    const tracksUrl =
      'https://api.jamendo.com/v3.0/tracks/?format=json' +
      '&client_id=' +
      process.env.JAMENDO_CLIENT_ID +
      '&album_id=' +
      albumId +
      '&order=id_desc'; // id or id_desc

    const [albumRes, tracksRes] = await Promise.all([
      fetch(albumUrl),
      fetch(tracksUrl),
    ]);

    if (!albumRes.ok || !tracksRes.ok) {
      throw new Error(`Jamendo error ${albumRes.status} / ${tracksRes.status}`);
    }

    const albumData = await albumRes.json();
    const tracksData = await tracksRes.json();

    // console.log('Jamendo raw ', { albumData, tracksData });

    const album = albumData.results?.[0] || {};
    const rawTracks = tracksData.results || [];

    // Shape MusicControl.jsx wants
    const tracks = rawTracks.map((track) => ({
      name: track.name,
      artist_name: track.artist_name,
      album_name: album.name || 'Unknown Album',
      image: album.image || 'https://placehold.co/300x300?text=No+Cover',
      duration: track.duration,
      audio: track.audio, // direct streaming link
    }));

    res.set('Cache-Control', 'no-store');
    res.json({ tracks });
  } catch (err) {
    console.error('Jamendo proxy error:', err);
    res.status(500).json({ error: 'Failed to fetch from Jamendo' });
  }
});

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback — MUST be app.use() and LAST
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
