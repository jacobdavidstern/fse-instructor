# README: Challenge Project Music Player, Vibe Player

Single‑page React music player using the Jamendo API

- Play/pause and cycle through tracks
- Environment variable setup for API key
- Graceful "Loading..." if no API key found
- Bootstrap + FontAwesome (CDN) for styling
- Deployed on Vercel for reproducible hosting
- App corresponds to [Guitarred album on Jamendo](https://www.jamendo.com/album/611338/guitarred)

## Demo

**Deployed frontend:**
[https://fullstack-music-player-seven.vercel.app/](https://fullstack-music-player-seven.vercel.app/)

**Deployed Backend API (Render):**
[https://fullstack-music-player-backend-miye.onrender.com/](https://fullstack-music-player-backend-miye.onrender.com/)

> Note: The backend may take a minute to wake up on the free Render tier.

## Setup

1. Clone the repo

```sh
git clone https://github.com/jacobdavidstern/fullstack-portfolio.git
cd challenge-project-music-player
```

2. Install dependencies

```sh
npm install
```

3. Secure a free Jamendo developer API key at (https://developer.jamendo.com/v3.0)

4. Create `.env` for Express server PORT

```sh
PORT=3000
```

5. Create `.env.local` for Jamendo API key

```sh
JAMENDO_CLIENT_ID=YOUR_CLIENT_ID
```

6. Run Express Backend API key server in a separate terminal for dev

```sh
node server.js
```

7. Run Vite Frontend Dev server, hot‑reload React

```sh
npm run dev
```

8. Build production assets including Rollup bundle for prod

```sh
npm run build
npm start
```

## Tech Stack

- React
- Vite
- Express
- Bootstrap
- FontAwesome

## JSON Validation

To validate JSON returned with your Jamendo client_id and Postman, GET
(https://api.jamendo.com/v3.0/tracks/?client_id=YOUR_CLIENT_ID&format=json&album_id=611338&order=id_asc)
returns all the track data and album art for the album Guitarred by OWER
(https://www.jamendo.com/album/611338/guitarred)
