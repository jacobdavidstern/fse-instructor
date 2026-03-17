# 🐍 Snake Game (React)

A modern React take on the classic Snake arcade game.

Move, eat, grow, survive collisions and the timer, and get a random quote on Game Over.

## Features

- Classic Snake gameplay
- 3‑minute countdown timer
- Game Over screen with a random quote from Advice Slip API (Quotable didn't deploy)
- Persistent Score tracking in LocalStorage
- React Router multi‑page flow: Home, Game, Game Over
- Leaderboard available on Home and Game Over page with name entry and Anonymous default
- Custom hooks (useTimer, useGameContext, useQuote)
- Score and remaining time displayed on Game page

## External API

This project uses the Advice Slip API to fetch a random quote on the Game Over screen.

Endpoint used:

[Advice Slip](https://api.adviceslip.com/advice)

If the API request fails, a console error is generated and a fallback message shown.

## How to Play

- Start the game
- Use arrow keys to move
- Eat food to grow
- Avoid walls and your own tail
- Survive until the timer hits zero

## Setup

Clone the repository

```sh
git clone https://github.com/jacobdavidstern/fullstack-portfolio.git
cd major-project-3-snake-game
```

Install dependencies

```sh
npm install
```

Run the development server

```sh
npm run dev
```

Open the app in your browser at the URL shown in your terminal, usually http://localhost:5173.

## Live Demo

**Deployed frontend:**
[https://fullstack-snake-game.vercel.app](https://fullstack-snake-game.vercel.app)

<!--
**Deployed Backend API (Render):**
[https://fullstack-stocktracker-backend.onrender.com/api/test](https://fullstack-stocktracker-backend.onrender.com/api/test)
> Note: The backend may take a minute to wake up on the free Render tier.
-->

## Project Structure

```mermaid
src/
├── context/
│   ├── GameContext.js        # Game state context
│   └── GameProvider.jsx      # Game state context provider
├── hooks/
│   ├── useLocalStorage.js    # Custom hook for localStorage
│   ├── useGame.js            # Custom hook for game operations
│   ├── useGameContext.js     # Custom hook for game context
│   ├── useQuote.js           # Custom hook for game context
│   └── useTimer.js           # Custom hook for game timer
├── pages/
│   ├── Home.jsx              # Welcome screen
│   ├── Game.jsx              # Main game screen
│   └── GameOver.jsx          # Game over screen
├── components/
│   ├── Navigation.jsx        # App navigation
│   ├── GameBoard.jsx         # Main game component
│   ├── ScoreDisplay.jsx      # Score and stats
│   └── Timer.jsx             # Game timer (if needed)
├── utils/
│   └── formatDuration.js     # Display seconds as M:SS
├── App.jsx                   # Routes and context providers
├── main.jsx                  # App entry point
└── constants.js              # Constants (static)
```

## License

This project is licensed under the MIT license.
A copy of the MIT license is included in the project root.
