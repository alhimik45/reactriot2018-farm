import React from 'react';
import { ElectroLine, HeatLine } from '../connected-components'

const RightPanel = props =>
  <div>
    <div>
      $ {props.dollar}
    </div>
    <div>
      ????
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