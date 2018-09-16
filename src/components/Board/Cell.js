import React from 'react'
import './Cell.css'
import { Fan } from './Fan'
import { Gpu } from './Gpu'
import { Asic } from './Asic'

let itemSelector = (item) => ({
  universal: (onSwitchCurrency) => <Gpu {...item} onSwitchCurrency={onSwitchCurrency}/>,
  fan: () => <Fan {...item}/>,
  asic: () => <Asic {...item}/>
}[item.type])

export const Cell = props =>
  props.item ?
    <div className="cell-item cell-full-item">
      {itemSelector(props.item)(props.onSwitchCurrency)}
    </div>
    : <div
      className={`cell-item cell-empty-item ${props.itemToBuy ? "cell-hover" : ""}`}
      onClick={props.onClick}>
      {props.itemToBuy ? <div className="preview">{itemSelector(props.itemToBuy)(null)}</div> : ""}
      &nbsp;
    </div>