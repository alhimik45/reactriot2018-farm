import {Tech} from "../../data";

const getRandomCell = (grid) => {
    const width = grid.length;
    const height = grid[0].length;

    const rndX = Math.floor(Math.random() * (width));
    const rndY = Math.floor(Math.random() * (height));

    return [rndX, rndY]
};

const getRandomCoin = () => {
    const keys = Object.keys(Tech.coin);
    const rnd = Math.floor(Math.random() * (keys.length));
    return keys[rnd];
};

export default {getRandomCell, getRandomCoin};