import React from 'react';
import { BuySquare, DollarsValue, ElectroLine, HeatLine, MegahashValue } from '../connected-components'

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
      <BuySquare/>
    </div>
  </div>

export default RightPanel;