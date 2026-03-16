# README: FS3 module-46, Stock Tracker

## Description

Stock Tracker fetches real-time market data, supports search, portfolio tracking, and watchlists.

## Features

- **Stock Search** — Interactively search by ticker symbol or company name with TwelveData API
- **Real-Time Price Display** — Shows current price, daily change, and percentage change
- **Portfolio Tracking** — Enter number of shares owned and calculate total value
- **Favorites, Watchlist** — Save stocks to localStorage for quick access
- **Error Handling** — Clear messages for invalid symbols, network issues, or API errors
- **Responsive Design** — Works across desktop and mobile screen sizes

## Live Demo

**Deployed frontend:**
[https://fullstack-stocktracker.vercel.app](https://fullstack-stocktracker.vercel.app)

**Deployed Backend API (Render):**
[https://fullstack-stocktracker-backend.onrender.com/api/test](https://fullstack-stocktracker-backend.onrender.com/api/test)

> Note: The backend may take a few seconds to wake up on the free Render tier.

## Setup

1. Clone the repo
   ```sh
   git clone https://github.com/jacobdavidstern/fullstack-portfolio.git
   cd major-project-2-stock-tracker
   ```

{Express backend to proxy apikey}
{dotenv for `.env.local`, `apikey=YOUR_API_KEY`}

## Validate JSON responses with Postman:

`https://api.twelvedata.com/time_series?apikey=YOUR_API_KEY&symbol=AAPL&interval=1min&format=json`

Example success:

```json
{
  "symbol": "AAPL",
  "name": "Apple Inc",
  "price": "234.56",
  "change": "-1.23",
  "percent_change": "-0.52"
}
```

Example error:

```json
{
  "code": 400,
  "message": "Symbol not supported"
}
```
