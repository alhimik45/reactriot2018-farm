import React from 'react'

const ShopButton = props =>
  <div onClick={() => props.buy(props.type)}>
    Buy
  </div>

export default ShopButton;