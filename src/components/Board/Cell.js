import React from 'react'
import './Cell.css'
import { Fan } from './Fan'
import { Gpu } from './Gpu'
import { Asic } from './Asic'

let itemSelector = (item) => ({
  universal: <Gpu img={item.img}/>,
  fan: <Fan img={item.img}/>,
  asic: <Asic img={item.img}/>
}[item.type])

export const Cell = props =>
  props.item ?
    <div className="cell-item cell-full-item">
      {itemSelector(props.item)}
    </div>
    : <div
      className={`cell-item cell-empty-item ${props.itemToBuy ? "cell-hover" : ""}`}
      onClick={props.onClick}>
      {props.itemToBuy ? <div className="preview">{itemSelector(props.itemToBuy)}</div> : ""}
      &nbsp;
    </div>