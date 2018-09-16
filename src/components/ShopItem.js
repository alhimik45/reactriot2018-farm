import React from 'react';
import './ShopItem.css'
import Tooltip from 'rc-tooltip'

const ShopItem = props =>
  <Tooltip placement="top" trigger={['hover']} mouseLeaveDelay={0}
           overlay={props.overlay} {...(!props.overlay ? {visible: false} : {})}>
    <div className="shop-item"
         style={{ boxShadow: props.needShadow || props.sellActive ? "inset 0 0 15px rgba(0,0,0,0.7)" : "" }}
         onClick={props.onClick}>
      <div>
        {props.name}
      </div>
      <div>
        <img src={props.img} alt={props.name}/>
      </div>
      <div>
        {props.cost}
      </div>
    </div>
  </Tooltip>

export default ShopItem;