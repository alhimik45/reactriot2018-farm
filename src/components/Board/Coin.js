import React from 'react'
import Tooltip from 'rc-tooltip'

export const Coin = props =>
  <Tooltip placement="top" trigger={props.preview ? [] : ['hover']} mouseLeaveDelay={0}
           overlay={<div className="my-tooltip">
             You found forgotten wallet<br/>
             with some cryptocurrency
           </div>
           }>
    <img onClick={props.onClick}
         style={{ width: 80, height: 80 }}
         alt="coin"
         src={props.img}/>
  </Tooltip>