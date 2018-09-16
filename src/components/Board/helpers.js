const getRandomCell = (grid) => {
    const width = grid.length;
    const height = grid[0].length;

    const rndX = Math.floor(Math.random() * (width));
    const rndY = Math.floor(Math.random() * (height));

    return [rndX, rndY]
};

module.exports = {getRandomCell};