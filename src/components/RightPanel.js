import React from 'react';
import {
  DollarsValue,
  ElectroLine,
  HeatLine,
  MegahashValue,
  ShopButtonConnected
} from '../connected-components'

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
    <div>
      <ShopButtonConnected type="fan"/>
      <ShopButtonConnected type="motherboard"/>
    </div>
  </div>

export default RightPanel;