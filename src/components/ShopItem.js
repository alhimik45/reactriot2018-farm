import React from 'react';

const ShopItem = props =>
  <div style={{ border: '1px blue solid' }}
       onClick={props.onClick}>
    <div>
      {props.name}
    </div>
    <div>
      <img src={props.img}/>
    </div>
    <div>
      ${props.cost}
    </div>
  </div>

export default ShopItem;