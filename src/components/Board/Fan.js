import React from 'react'
import Tooltip from 'rc-tooltip'

export const Fan = props =>
  <Tooltip placement="top" trigger={['hover']} mouseLeaveDelay={0} overlay={<div className="my-tooltip">
    <b>Cost: </b>
    ${props.cost}<br/>
    <b>Cools: </b>
    {Math.abs(props.heatChange)}°C<br/>
  </div>
  }>
    <img src={props.img} alt="fan"/>
  </Tooltip>