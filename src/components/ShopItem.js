import React from 'react';
import './ShopItem.css'

const ShopItem = props =>
  <div className="shop-item"
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

export default ShopItem;