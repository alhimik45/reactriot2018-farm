import React from 'react'

const ShopButton = props =>
  <div onClick={() => props.buy(props.type)}>
    {props.children}
  </div>

export default ShopButton;