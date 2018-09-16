export const calcHashs = gameState =>
  gameState.grid.flatMap(line =>
    line
      .filter(item => item && item.hashes)
      .map(item => item.hashes))
    .reduce((prev, curr) => prev + curr, 0)