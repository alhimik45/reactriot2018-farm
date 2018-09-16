import React from 'react';
import { HeatLine, ShopConnected, TradingConnected } from '../../connected-components'
import { ShopItems } from '../../data'

const RightPanel = props =>
  <div>

    <TradingConnected/>
    <div style={{ borderTop: '1px black solid' }}>
      <ShopConnected items={ShopItems}/>
    </div>
  </div>

export default RightPanel;