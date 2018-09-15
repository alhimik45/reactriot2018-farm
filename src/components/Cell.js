import React from 'react'
import './Cell.css'

export const Cell = props =>
  props.item ?
    <div className="cell-item">
      {props.item.key}
    </div>
    : <div className="cell-item cell-empty-item">&nbsp;</div>