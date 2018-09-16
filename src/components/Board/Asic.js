import React from 'react'
import './Asic.css'
import Tooltip from 'rc-tooltip'

export const Asic = props =>
  <Tooltip placement="top" trigger={props.preview ? [] : ['hover']} mouseLeaveDelay={0} overlay={<div className="my-tooltip">
    <b>Cost: </b>
    ${props.cost}<br/>
    <b>MH/s: </b>
    {props.hashes}<br/>
    <b>Heats Up: </b>
    {props.heatChange}°C<br/>
  </div>
  }>
    <img src={props.img} className="vert-img" alt="asic"/>
  </Tooltip>