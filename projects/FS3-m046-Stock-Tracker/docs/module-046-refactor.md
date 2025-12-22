Refactor To Do List

SOC (separation of concerns)

- split stock lookup into separate functions for symbol and name, based on string length
- split update local storage data ops into separate functions
- split render local storage data ops into separate functions

DRY (do-not repeat yourself)

- parameterize all local storage operations
- including render, at init
- no specialized portfolio or watchlist functions
- note: buttons and event listeners have features unique to their implementations

// saveStorage() [DRY]

- savePortfolio()
- saveWatchlist()

// fetchQuote [SOC]

- keep fetchQuote
- fetchBySymbol for strings under 5 chars
- fetchByName for strings >= 5 chars

[DRY]
// portfolioContainer.addEventListener('click', (e) => {
// watchlistContainer.addEventListener('click', (e) => {

- parameterize to stockContainer.addEventListener

if (refreshBtn) {
// DRY: Parameterize refresh/re-render operations
// SOP: Create refresh and render functions

// render() [DRY]

- renderPortfolio()
- renderWatchlist()

[DRY] (I patched these, but need to debug)
addStockToStorage() is never used
removeStockFromStorage() is never nused
clearStorage() is never used

[low priority]
// instructor wanted # of unique stocks rather than # of shares in HUD
// decide whether to overwrite or add shares to portfolio when shares are in portfolio

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
