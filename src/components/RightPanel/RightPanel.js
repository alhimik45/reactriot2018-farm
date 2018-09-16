import React from 'react';
import { ElectroLine, HeatLine, ShopConnected } from '../../connected-components'
import { ShopItems } from '../../data'

const RightPanel = props =>
  <div>
    <ElectroLine/>
    <HeatLine/>
    <div style={{ borderTop: '1px black solid' }}>
      <ShopConnected items={ShopItems}/>
    </div>
  </div>

export default RightPanel;