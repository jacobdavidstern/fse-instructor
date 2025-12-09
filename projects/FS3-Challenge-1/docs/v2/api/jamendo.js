// api/jamendo.js
// API route to proxy requests to Jamendo API
export default async function handler(req, res) {
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
}
