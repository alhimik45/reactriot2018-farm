import React from 'react'
import './Cell.css'
import { Fan } from './Fan'
import { Gpu } from './Gpu'
import { Asic } from './Asic'
import {Coin} from "./Coin";

let itemSelector = (item) => ({
  universal: (onSwitchCurrency) => <Gpu {...item} onSwitchCurrency={onSwitchCurrency}/>,
  fan: () => <Fan {...item}/>,
  asic: () => <Asic {...item}/>,
  coin: () => <Coin {...item}/>
}[item.type])

export const Cell = props => {
    const onSwitchCurrency = props.item && props.item.type === 'coin'
        ? null
        : props.onSwitchCurrency;

    return (props.item
            ? <div className="cell-item cell-full-item">
                {itemSelector(props.item)(onSwitchCurrency)}
            </div>
            : <div
                className={`cell-item cell-empty-item ${props.itemToBuy ? "cell-hover" : ""}`}
                onClick={props.onClick}>
                {props.itemToBuy ? <div className="preview">{itemSelector(props.itemToBuy)(null)}</div> : ""}
                &nbsp;
            </div>
    )
}