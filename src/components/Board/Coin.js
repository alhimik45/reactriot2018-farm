import React from 'react'
import helpers from "./helpers";
import {Tech} from "../../data";

function getCoin() {
    return helpers.getRandomCoin();
}

export const Coin = props =>
    <img alt="coin" style={{width: 90, height: 90}} src={Tech.coin[getCoin().toLowerCase()].img}/>;