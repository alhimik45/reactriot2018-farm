import React from 'react';
import { DollarsValue, ElectroLine, HeatLine, MegahashValue, ShopConnected } from '../../connected-components'
import { ShopItems } from '../../data'

const RightPanel = props =>
  <div>
    <div>
      <DollarsValue/>
    </div>
    <div>
      <MegahashValue/>
    </div>
    <div>
      <ElectroLine/>
    </div>
    <div>
      <HeatLine/>
    </div>
    <div style={{borderTop: '1px black solid'}}>
      <ShopConnected items={ShopItems}/>
    </div>
  </div>

export default RightPanel;