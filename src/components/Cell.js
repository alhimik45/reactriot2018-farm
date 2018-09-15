import React from 'react'
import './Cell.css'
import { Fan } from './Fan'
import { Motherboard } from './Motherboard'

export const Cell = props =>
  props.item ?
    <div className="cell-item">
      {{
        motherboard: <Motherboard/>,
        fan: <Fan/>
      }[props.item.type]}
    </div>
    : <div
      className={`cell-item cell-empty-item ${props.enableHover ? "cell-hover" : ""}`}
      onClick={props.onClick}>
      &nbsp;
    </div>