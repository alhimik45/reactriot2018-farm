import React from 'react'
import './Cell.css'
import { Fan } from './Fan'
import { Gpu } from './Gpu'

let itemSelector = (type) => ({
  gpu: <Gpu/>,
  fan: <Fan/>
}[type])

export const Cell = props =>
  props.item ?
    <div className="cell-item">
      {itemSelector(props.item.type)}
    </div>
    : <div
      className={`cell-item cell-empty-item ${props.itemToBuy ? "cell-hover" : ""}`}
      onClick={props.onClick}>
      <div className="preview">{itemSelector(props.itemToBuy)}</div>
      &nbsp;
    </div>