# 🐍 Snake Game (React)

A modern React take on the classic Snake arcade game.

Move, eat, grow, survive collisions and the timer, and get a random quote on Game Over.

## Features

- Classic Snake gameplay
- 3‑minute countdown timer
- Game Over screen with a random quote from Quotable API
- Persistent Score tracking in LocalStorage
- React Router multi‑page flow: Home, Game, Game Over
- Leaderboard available on Home and Game Over
- Custom hooks (useTimer, useGameContext, useQuote)
- Score and remaining time displayed on Game

## External API

This project uses the Quotable API to fetch a random quote on the Game Over screen.

Endpoint used:

[Quotable](http://api.quotable.io/random)

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
git clone https://github.com/jacobdavidstern/fse-instructor.git
cd fse-instructor/projects/FS3-m070-Snake-Game
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

## Live Deployment

Live URL: coming soon

## Project Structure

```
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

This project is licensed under the MIT license
A copy of the MIT license is included in the project root.
