# Refactor StockTracker To Do

## SOC (separation of concerns)

- [ ] Split stock lookup into separate functions for symbol and name (based on string length)
- [ ] Split update localStorage operations into separate functions
- [ ] Split render localStorage operations into separate functions

## DRY (do-not repeat yourself)

- [ ] Parameterize all localStorage operations
- [ ] Parameterize render logic (including initial render)
- [ ] Remove specialized portfolio/watchlist functions
- [ ] Preserve unique button + event listener behavior where necessary

### saveStorage() [DRY]

- [ ] Replace savePortfolio()
- [ ] Replace saveWatchlist()
- [ ] Implement a single saveStorage(type, data)

### fetchQuote [SOC]

- [ ] Keep fetchQuote() as the unified entry point
- [ ] Add fetchBySymbol() for strings < 5 chars
- [ ] Add fetchByName() for strings ≥ 5 chars

## Event Listener Consolidation [DRY]

Original duplicated listeners:

```js
// portfolioContainer.addEventListener('click', (e) => {
// watchlistContainer.addEventListener('click', (e) => {
```

Refactor:

- [ ] Create a single stockContainer.addEventListener(...)
- [ ] Ensure container type determines behavior

## Refresh Button [DRY] + [SOC]

- [ ] Create a unified refresh() function
- [ ] Create a unified render() function
- [ ] Replace renderPortfolio() and renderWatchlist() with parameterized calls

## Low Priority

- [ ] Decide whether adding an existing stock should overwrite or increment shares
- [ ] Decide whether HUD should show unique stocks or total shares

## API Reference

```json
/*
    {
      "symbol": "AAPL",
      "name": "Apple Inc",
      "price": "234.56",
      "change": "-1.23",
      "percent_change": "-0.52"
    }
    json
    {
      "code": 400,
      "message": "Symbol not supported"
    }
*/
```
