export const calcDollars = gameState =>
  Object.keys(gameState.currencies)
    .map(currency => gameState.currencies[currency] * gameState.exchangeRates[currency])
    .reduce((prev, curr) => prev + curr, 0)