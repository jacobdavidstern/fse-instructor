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

## Setup

1. Clone the repo
   ```sh
   git clone https://github.com/jacobdavidstern/fse-instructor.git
   cd projects/FS3-m046-Stock-Tracker
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
