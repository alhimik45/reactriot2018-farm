import React from 'react';
import { DollarsValue, ElectroLine, HeatLine, MegahashValue } from '../connected-components'

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
      Text Help
    </div>
  </div>

export default RightPanel;