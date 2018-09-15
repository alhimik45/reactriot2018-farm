import React from 'react';
import ShopItem from '../ShopItem';
import { DollarsValue, ElectroLine, HeatLine, MegahashValue, ShopButtonConnected } from '../../connected-components'

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
      <ShopButtonConnected type="fan">
        Buy fan
      </ShopButtonConnected>
      <ShopButtonConnected type="gpu">
        Buy GPU
      </ShopButtonConnected>
    </div>
    <div>
      <ShopItem/>
    </div>
  </div>

export default RightPanel;