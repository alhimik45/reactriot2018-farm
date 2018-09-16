import React from 'react';
import {
  BitcoinValue, DashValue,
  DollarsValue,
  ElectroLine, EthValue,
  HeatLine, LitecoinValue,
  MegahashValue,
  ShopConnected
} from '../../connected-components'
import { ShopItems } from '../../data'

const RightPanel = props =>
  <div>
      <DollarsValue/>
      <BitcoinValue/>
      <LitecoinValue/>
      <EthValue/>
      <DashValue/>
      <MegahashValue/>
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