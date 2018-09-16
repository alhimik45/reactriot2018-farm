import React from 'react'
import helpers from "./helpers";
import {Tech} from "../../data";

function getCoin() {
    return helpers.getRandomCoin();
}

export const Coin = props => {
    return <img onClick={props.onClick}
                style={{width: 80, height: 80}}
                alt="coin"
                src={Tech.coin[getCoin().toLowerCase()].img}/>
};